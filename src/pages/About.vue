<template>
  <div class="about-edu">
    <!-- Başlık -->
    <header class="hero">
      <div class="hero-title">
        <i class="pi pi-graduation-cap"></i>
        <h1>Eğitim</h1>
      </div>
      <p class="hero-sub">Okul geçmişim — karta tıklayınca detay açılır.</p>
      <span class="hero-blob"></span>
    </header>

    <!-- Zaman Çizelgesi -->
    <section ref="journeyEl" class="timeline" :class="{ inview: journeyInView }">
      <div class="rail">
        <div class="progress" :style="{ height: progressHeight + '%' }"></div>
      </div>

      <div class="items">
        <article
          v-for="(item, idx) in education"
          :key="item.title"
          class="milestone"
          :data-key="item.key"
          :class="{ reveal: revealed[idx] }"
          @click="openDetail(item)"
        >
          <div class="dot">
            <span class="dot-ring"></span>
            <i :class="item.icon"></i>
          </div>

          <div class="card">
            <div class="topline">
              <Tag rounded :value="item.subtitle" />
            </div>
            <h3 class="m-title">{{ item.title }}</h3>
          </div>
        </article>
      </div>
    </section>

    <!-- Detay (mask tıklayınca kapanır) -->
    <Dialog
      v-model:visible="showDetail"
      modal
      :dismissableMask="true"
      :closable="true"
      :closeOnEscape="true"
      :header="selectedItem?.title"
      style="max-width: 720px"
    >
      <p class="text-700 m-0">{{ selectedItem?.fullDetail }}</p>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Tag from 'primevue/tag'
import Dialog from 'primevue/dialog'

type TimelineItem = {
  title: string
  subtitle: string
  fullDetail: string
  icon: string
  key: 'uni' | 'hs'
}

const education: TimelineItem[] = [
  {
    title: 'Yazılım Mühendisliği (Lisans) — Mezun',
    subtitle: 'Atılım Üniversitesi • 2020 – 2025',
    fullDetail:
      'Atılım Üniversitesi Yazılım Mühendisliği bölümünden 2025 yılında mezun oldum (GNO 3.13, %100 İngilizce). Lisans boyunca algoritmalar, yazılım mimarisi, web teknolojileri ve gerçek zamanlı sistemler üzerinde yoğunlaştım. Takım projelerinde Agile/Scrum süreçleri, Git akışları ve code review kültürüyle üretim kalitesine odaklandım.',
    icon: 'pi pi-graduation-cap',
    key: 'uni'
  },
  {
    title: 'Samsun Anadolu Lisesi',
    subtitle: 'Lise • 2016 – 2020',
    fullDetail:
      'Matematik ve temel bilimler odaklı güçlü bir altyapı edindim. Disiplinli çalışma, analitik düşünme ve problem çözme alışkanlıklarımın temelini bu dönemde oluşturdum.',
    icon: 'pi pi-book',
    key: 'hs'
  }
]

/* Dialog state */
const showDetail = ref(false)
const selectedItem = ref<TimelineItem | null>(null)
function openDetail(item: TimelineItem) {
  selectedItem.value = item
  showDetail.value = true
}

/* Timeline animasyonları */
const journeyEl = ref<HTMLElement | null>(null)
const journeyInView = ref(false)
const progressHeight = ref(0)         // 0 → 100
const revealed = ref<boolean[]>(education.map(() => false))

onMounted(async () => {
  await nextTick()
  const container = journeyEl.value
  if (!container) return

  // Ray görünür olunca %0 → %100
  const ioContainer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        journeyInView.value = true
        const start = performance.now()
        const dur = 1000
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / dur)
          progressHeight.value = Math.round((1 - Math.pow(1 - t, 3)) * 100) // easeOutCubic
          if (t < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        ioContainer.unobserve(e.target)
      }
    },
    { threshold: 0.25 }
  )
  ioContainer.observe(container)

  // Kartlar tek tek açılma animasyonu
  const milestones = container.querySelectorAll<HTMLElement>('.milestone')
  const ioItems = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const idx = [...milestones].indexOf(e.target as HTMLElement)
        if (idx >= 0) revealed.value[idx] = true
        ioItems.unobserve(e.target)
      }
    },
    { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
  )
  milestones.forEach((m) => ioItems.observe(m))
})
</script>

<style scoped>
/* ---------- Global palette & energy ---------- */
.about-edu {
  --t-uni: #3b82f6;   /* mavi */
  --t-hs:  #f59e0b;   /* amber */
  --bg-grid: radial-gradient(1px 1px at 1px 1px, rgba(255,255,255,.08) 0, transparent 0);

  max-width: 900px;
  margin: 0 auto;
  padding: 1.25rem;
  display: grid;
  gap: 1.25rem;

  /* Daha renkli, canlı bir arka plan */
  background:
    radial-gradient(1200px 600px at -10% -20%, color-mix(in srgb, var(--primary-200) 40%, transparent), transparent 60%),
    radial-gradient(900px 520px at 120% 10%, color-mix(in srgb, var(--primary-400) 20%, transparent), transparent 60%),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
  position: relative;
}
.about-edu::before {
  /* Hafif grid dokusu */
  content:""; position:absolute; inset:0; pointer-events:none; border-radius:16px;
  background-image: var(--bg-grid);
  background-size: 14px 14px;
  opacity: .5;
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  border-radius: 18px;
  padding: 1.1rem 1.25rem;
  overflow: hidden;

  /* gradient border efekti */
  --gb: linear-gradient(135deg, color-mix(in srgb, var(--primary-300) 60%, transparent), transparent 60%);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--primary-50) 75%, var(--surface-card)), var(--surface-card));
  box-shadow: 0 14px 34px rgba(0,0,0,.08);
}
.hero::before {
  content:""; position:absolute; inset:0; padding:1px; border-radius:20px;
  background: var(--gb);
  -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.hero-title { display: flex; align-items: center; gap: .65rem; }
.hero-title i { color: var(--primary-600); filter: drop-shadow(0 6px 12px color-mix(in srgb, var(--primary-400) 40%, transparent)); }
.hero-title h1 { margin: 0; font-size: 1.7rem; font-weight: 900; letter-spacing: .2px; }
.hero-sub { margin: .35rem 0 0; color: var(--text-color-secondary); }
.hero-blob {
  position: absolute; right: -110px; top: -120px; width: 340px; height: 340px; border-radius: 50%;
  background:
    radial-gradient(closest-side, color-mix(in srgb, var(--primary-300) 40%, transparent), transparent 70%),
    conic-gradient(from 200deg, color-mix(in srgb, var(--primary-200) 50%, transparent), transparent 60%);
  filter: blur(18px); opacity: .65; pointer-events: none;
}

/* ---------- Timeline ---------- */
.timeline { position: relative; display: grid; grid-template-columns: 58px 1fr; gap: 1rem; }
.rail {
  position: relative; margin-left: 24px;
  width: 10px; border-radius: 999px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--primary-100) 50%, var(--surface-200)), var(--surface-300));
  border: 1px solid color-mix(in srgb, var(--primary-300) 50%, var(--surface-border));
  overflow: hidden;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-200) 30%, transparent);
}
.progress {
  position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
  background:
    linear-gradient(180deg, var(--primary-400), var(--primary-600));
  box-shadow: 0 0 20px color-mix(in srgb, var(--primary-500) 50%, transparent);
  transition: height .9s cubic-bezier(.22,.61,.36,1);
}
.items { display: grid; gap: 1rem; }

/* ---------- Milestone (tint by key) ---------- */
.milestone {
  --tint: var(--primary-500);
  position: relative;
  display: grid; grid-template-columns: 58px 1fr; gap: .75rem;
  align-items: flex-start;
  cursor: pointer;
  opacity: 0; transform: translateY(10px);
  transition: opacity .35s ease, transform .35s ease, box-shadow .15s ease;
}
.milestone[data-key="uni"] { --tint: var(--t-uni); }
.milestone[data-key="hs"]  { --tint: var(--t-hs); }

.milestone.reveal { opacity: 1; transform: translateY(0); }

.dot {
  position: relative; width: 58px; height: 58px; display: grid; place-items: center;
}
.dot-ring {
  position:absolute; inset:6px; border-radius:16px;
  background: conic-gradient(from 180deg, color-mix(in srgb, var(--tint) 70%, transparent), transparent 60%);
  filter: blur(6px); opacity:.7;
}
.dot i {
  width: 44px; height: 44px; display: grid; place-items: center;
  border-radius: 14px;
  color: var(--tint);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--tint) 18%, transparent), transparent 70%);
  border: 1px solid color-mix(in srgb, var(--tint) 45%, var(--surface-border));
  font-size: 1rem;
  box-shadow: 0 6px 18px color-mix(in srgb, var(--tint) 18%, transparent);
}

.card {
  border: 1px solid color-mix(in srgb, var(--tint) 45%, var(--surface-border));
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--tint) 10%, transparent), transparent 70%),
    var(--surface-card);
  border-radius: 16px;
  padding: .9rem;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease, background .2s ease;
  box-shadow: 0 10px 26px color-mix(in srgb, var(--tint) 10%, transparent);
}
.milestone:hover .card {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px color-mix(in srgb, var(--tint) 18%, transparent);
  border-color: color-mix(in srgb, var(--tint) 70%, var(--surface-border));
}
.topline { margin-bottom: .4rem; }
/* Tag'i tıntla */
.milestone :deep(.p-tag) {
  border: 1px solid color-mix(in srgb, var(--tint) 45%, var(--surface-border));
  background: color-mix(in srgb, var(--tint) 16%, var(--surface-card));
  color: color-mix(in srgb, var(--tint) 85%, black);
  font-weight: 700;
}
.m-title { margin: 0; font-size: 1.08rem; font-weight: 900; }

/* ---------- Dialog ---------- */
:deep(.p-dialog .p-dialog-header) { font-weight: 900; }
:deep(.p-dialog .p-dialog-content) { line-height: 1.6; }

/* ---------- Responsive ---------- */
@media (max-width: 820px) {
  .timeline { grid-template-columns: 46px 1fr; }
  .rail { margin-left: 18px; width: 8px; }
  .dot { width: 46px; height: 46px; }
  .dot i { width: 36px; height: 36px; border-radius: 10px; font-size: .9rem; }
  .hero-title h1 { font-size: 1.55rem; }
}
</style>
