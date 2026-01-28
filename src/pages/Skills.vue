<template>
  <div class="skills-neo">
    <!-- Üst / Özet -->
    <header class="hero">
      <div class="hero-left">
        <div class="glyph">
          <i class="pi pi-compass"></i>
          <span class="glow"></span>
        </div>
        <div>
          <div class="title-row">
            <h1>{{ t('skills.title') }}</h1>
            <span class="title-chip">
              <i class="pi pi-bolt"></i> {{ t('skills.status') }}
            </span>
          </div>
          <p>{{ t('skills.subtitle') }}</p>
          <div class="chips">
            <Tag severity="success" rounded :value="t('skills.total_skills', { n: flatSkills.length })" />
            <Tag severity="info" rounded :value="t('skills.avg_pct', { n: overallPct })" />
            <Tag severity="warning" rounded :value="t('skills.strongest', { name: strongestCategory })" />
          </div>
        </div>
      </div>

      <div class="hero-right">
        <!-- İyileştirilmiş Search UI -->
        <div class="search">
          <i class="pi pi-search"></i>
          <InputText
            v-model="q"
            class="search-input"
            :placeholder="t('skills.search')"
            aria-label="Beceri arama"
          />
          <Button
            v-if="q"
            class="search-clear"
            icon="pi pi-times"
            text
            rounded
            aria-label="Aramayı temizle"
            @click="q = ''"
          />
        </div>

        <Dropdown
          v-model="sortKey"
          :options="sortOptions"
          optionLabel="label"
          optionValue="value"
          class="w-full pretty-dropdown"
        />
        <Button
          class="w-full"
          icon="pi pi-sliders-h"
          :label="t('skills.reset')"
          severity="contrast"
          @click="resetFilters"
        />
      </div>
    </header>

    <!-- Gruplu Liste -->
    <section class="group-list">
      <article
        v-for="grp in groupedCats"
        :key="grp.id"
        class="group-card"
        :data-cat="grp.name"
        :data-key="slug(grp.name)"
      >
        <div class="group-head">
          <div class="left">
            <i :class="grp.icon" class="cat-icon"></i>
            <div>
              <h3 class="group-title">{{ grp.name }}</h3>
              <p class="group-desc">{{ grp.description }}</p>
            </div>
          </div>

          <!-- Donut Chart (SVG) -->
          <div
            class="donut-wrap"
            data-anim="donut"
            :data-id="grp.id"
            :data-target="grp.avgPercent"
            :aria-label="`${grp.name} ortalama yüzde`"
          >
            <svg class="donut" viewBox="0 0 80 80" role="img" aria-hidden="true">
              <circle class="donut-bg" :r="R" cx="40" cy="40" />
              <circle
                class="donut-fg"
                :r="R" cx="40" cy="40"
                :stroke-dasharray="C"
                :stroke-dashoffset="((100 - displayDonut(grp.id)) / 100) * C"
              />
            </svg>
            <!-- Tam ortalanmış merkez metin -->
            <div class="donut-center">
              <div class="donut-pct">{{ displayDonut(grp.id) }}%</div>
              <div class="donut-label">{{ t('skills.average') }}</div>
            </div>
          </div>
        </div>

        <!-- Grup içi beceriler -->
        <div class="rows">
          <div
            v-for="skill in grp.skills"
            :key="skill.id"
            class="row"
            :data-cat="grp.name"
            data-anim="bar"
            :data-id="skill.id"
            :data-target="skill.percent"
          >
            <div class="row-head">
              <Tag :severity="catSeverity(grp.name)" rounded :value="grp.name" />
              <span class="name">{{ skill.name }}</span>
              <span class="pct">{{ displayPct(skill.id) }}%</span>
            </div>

            <div class="bar" role="progressbar" :aria-valuenow="displayPct(skill.id)" aria-valuemin="0" aria-valuemax="100">
              <div class="bar-fill" :style="{ width: displayPct(skill.id) + '%' }"></div>
              <div class="bar-glow"></div>
            </div>
          </div>
        </div>
      </article>

      <div v-if="groupedCats.length === 0" class="empty">
        <i class="pi pi-filter-slash"></i>
        <p>{{ t('skills.empty') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type Skill = { name: string; level: number }
type Category = { name: string; icon: string; description: string; skills: Skill[] }

const skillCategories = computed<Category[]>(() => [
  {
    name: t('skills.cats.frontend'),
    icon: 'pi pi-desktop',
    description: t('skills.cats.frontend_desc'),
    skills: [
      { name: 'HTML / CSS', level: 4 },
      { name: 'Vue.js', level: 4 },
      { name: 'Angular', level: 2 },
      { name: 'Flutter', level: 4 }
    ]
  },
  {
    name: t('skills.cats.backend'),
    icon: 'pi pi-server',
    description: t('skills.cats.backend_desc'),
    skills: [
      { name: 'Node.js', level: 4 },
      { name: 'Spring Boot', level: 2 },
      { name: 'GraphQL', level: 3 },
      { name: 'REST API', level: 4 },
      { name: 'WebSocket', level: 4 }
    ]
  },
  {
    name: t('skills.cats.database'),
    icon: 'pi pi-database',
    description: t('skills.cats.database_desc'),
    skills: [
      { name: 'MongoDB', level: 5 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'SQL', level: 4 }
    ]
  },
  {
    name: t('skills.cats.devops'),
    icon: 'pi pi-cog',
    description: t('skills.cats.devops_desc'),
    skills: [
      { name: 'Docker', level: 4 },
      { name: 'Git', level: 5 },
      { name: 'AWS (EC2/S3)', level: 3 },
      { name: 'Firebase', level: 4 },
      { name: 'Google Analytics 4', level: 4 },
      { name: 'Search Console', level: 4 }
    ]
  },
  {
    name: t('skills.cats.seo'),
    icon: 'pi pi-chart-line',
    description: t('skills.cats.seo_desc'),
    skills: [
      { name: 'Teknik SEO', level: 4 },
      { name: 'OCR & AI Vision', level: 4 },
      { name: 'Twilio SMS API', level: 4 },
      { name: 'Site Hızı Optimizasyonu', level: 4 }
    ]
  },
  {
    name: t('skills.cats.langs'),
    icon: 'pi pi-code',
    description: t('skills.cats.langs_desc'),
    skills: [
      { name: 'C / C++', level: 3 },
      { name: 'Java', level: 3 },
      { name: 'Python', level: 3 },
      { name: 'Dart', level: 4 },
      { name: 'JavaScript / TypeScript', level: 4 },
    ]
  }
])

/** Yardımcılar: Türkçe karakterleri de normalize eden slug */
const slug = (s: string) => {
  const map: Record<string, string> = {
    'ç': 'c','ğ': 'g','ı': 'i','i': 'i','ö': 'o','ş': 's','ü': 'u',
    'Ç': 'c','Ğ': 'g','İ': 'i','Ö': 'o','Ş': 's','Ü': 'u'
  }
  return s
    .split('')
    .map(ch => map[ch] ?? ch)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
const toPct = (lvl: number) => Math.round((lvl / 5) * 100)

/** Düz liste ve özet */
const flatSkills = computed(() =>
  skillCategories.value.flatMap(cat =>
    cat.skills.map((s, i) => ({
      id: `${slug(cat.name)}-${i}-${slug(s.name)}`,
      category: cat.name,
      description: skillCategories.value.find(c => c.name === cat.name)?.description ?? '',
      name: s.name,
      level: s.level,
      percent: toPct(s.level),
      icon: skillCategories.value.find(c => c.name === cat.name)?.icon ?? 'pi pi-tag'
    }))
  )
)

const overallPct = computed(() => {
  const all = flatSkills.value
  const sumPct = all.reduce((a, x) => a + x.percent, 0)
  return all.length ? Math.round(sumPct / all.length) : 0
})

const strongestCategory = computed(() => {
  const acc = new Map<string, { sum: number; n: number }>()
  for (const s of flatSkills.value) {
    const v = acc.get(s.category) ?? { sum: 0, n: 0 }
    v.sum += s.level; v.n += 1
    acc.set(s.category, v)
  }
  const arr = [...acc.entries()].map(([name, v]) => ({ name, avg: v.sum / v.n }))
  arr.sort((a, b) => b.avg - a.avg)
  return arr[0]?.name ?? '-'
})

/** Filtre & sıralama */
const q = ref('')
const sortKey = ref<'lvl-desc' | 'lvl-asc' | 'az' | 'za' | 'cat-name' | 'cat-avg'>('lvl-desc')
const sortOptions = computed(() => [
  { label: t('skills.sort.lvl_desc'), value: 'lvl-desc' },
  { label: t('skills.sort.lvl_asc'), value: 'lvl-asc' },
  { label: t('skills.sort.az'), value: 'az' },
  { label: t('skills.sort.za'), value: 'za' },
  { label: t('skills.sort.cat_name'), value: 'cat-name' },
  { label: t('skills.sort.cat_avg'), value: 'cat-avg' }
])

const filteredByQuery = computed(() => {
  const term = q.value.trim().toLowerCase()
  if (!term) return flatSkills.value
  return flatSkills.value.filter(s =>
    s.name.toLowerCase().includes(term) || s.category.toLowerCase().includes(term)
  )
})

type Grouped = {
  id: string
  name: string
  description: string
  icon: string
  avgPercent: number
  skills: Array<{ id: string; name: string; percent: number }>
}

const groupedCats = computed<Grouped[]>(() => {
  // Kategorileri topla
  const byCat = new Map<string, Grouped>()
  for (const s of filteredByQuery.value) {
    if (!byCat.has(s.category)) {
      byCat.set(s.category, {
        id: `cat-${slug(s.category)}`,
        name: s.category,
        description: s.description,
        icon: s.icon,
        avgPercent: 0,
        skills: []
      })
    }
    byCat.get(s.category)!.skills.push({ id: s.id, name: s.name, percent: s.percent })
  }

  // Boş olmayan kategoriler
  let arr = [...byCat.values()].filter(g => g.skills.length > 0)

  // Grup içi sıralama (beceriler)
  for (const g of arr) {
    switch (sortKey.value) {
      case 'lvl-desc': g.skills.sort((a, b) => b.percent - a.percent || a.name.localeCompare(b.name)); break
      case 'lvl-asc':  g.skills.sort((a, b) => a.percent - b.percent || a.name.localeCompare(b.name)); break
      case 'az':       g.skills.sort((a, b) => a.name.localeCompare(b.name)); break
      case 'za':       g.skills.sort((a, b) => b.name.localeCompare(a.name)); break
      default: break
    }
    const sum = g.skills.reduce((x, s) => x + s.percent, 0)
    g.avgPercent = Math.round(sum / g.skills.length)
  }

  // Kategori sırası
  if (sortKey.value === 'cat-name') {
    arr.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortKey.value === 'cat-avg') {
    arr.sort((a, b) => b.avgPercent - a.avgPercent || a.name.localeCompare(b.name))
  }

  return arr
})

/** Bar & Donut animasyon state */
const progress = ref<Record<string, number>>({})   // skill bar yüzdesi
const donut = ref<Record<string, number>>({})      // kategori donut yüzdesi
const displayPct = (id: string) => Math.round(progress.value[id] ?? 0)
const displayDonut = (id: string) => Math.round(donut.value[id] ?? 0)

/** Görsel sabitler (donut) */
const R = 30
const C = 2 * Math.PI * R

/** Yardımcılar */
function resetFilters() { q.value = ''; sortKey.value = 'lvl-desc' }
function catSeverity(catName: string) {
  // Translate cat names back to keys or use localized names
  if (catName === t('skills.cats.frontend')) return 'info'
  if (catName === t('skills.cats.backend')) return 'success'
  if (catName === t('skills.cats.database')) return 'help'
  if (catName === t('skills.cats.devops') || catName === t('skills.cats.seo')) return 'warning'
  return 'contrast'
}

/** Animasyon fonksiyonları */
function tween(store: Record<string, number>, key: string, to: number, ms = 900) {
  const start = performance.now()
  const from = store[key] ?? 0
  const delta = to - from
  function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }
  function step(now: number) {
    const t = Math.min(1, (now - start) / ms)
    store[key] = from + delta * easeOutCubic(t)
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

/** Observer: görünür olunca animasyon başlat */
let io: IntersectionObserver | null = null
function observeNew() {
  nextTick(() => {
    document.querySelectorAll<HTMLElement>('[data-anim]:not([data-observed])').forEach(el => {
      el.dataset.observed = '1'
      io?.observe(el)
    })
  })
}

onMounted(async () => {
  // Başlangıçları 0 yap
  for (const s of flatSkills.value) progress.value[s.id] = 0
  for (const c of skillCategories.value) donut.value[`cat-${slug(c.name)}`] = 0

  io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      const el = e.target as HTMLElement
      const id = el.dataset.id || ''
      const target = Number(el.dataset.target || 0)
      const kind = el.dataset.anim
      if (id && kind === 'bar') tween(progress.value, id, target, 800 + Math.random() * 400)
      if (id && kind === 'donut') tween(donut.value, id, target, 900 + Math.random() * 300)
      io?.unobserve(el)
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 })

  observeNew()
})

watch([q, sortKey, groupedCats], () => observeNew(), { deep: true })
</script>

<style scoped>
/* ---------- THEME TINTS (custom) ---------- */
.skills-neo {
  /* kategori renkleri */
  --c-frontend: #06b6d4;   /* cyan */
  --c-backend:   #22c55e;  /* green */
  --c-db:        #8b5cf6;  /* violet */
  --c-devops:    #f59e0b;  /* amber */
  --c-langs:     #ec4899;  /* magenta */

  /* sayfa arka planına hafif canlılık */
  background:
    radial-gradient(1200px 600px at 0% 0%, color-mix(in srgb, var(--primary-50) 65%, transparent), transparent 60%),
    radial-gradient(900px 500px at 100% 20%, color-mix(in srgb, var(--primary-100) 60%, transparent), transparent 60%);
}

/* ---------- LAYOUT ---------- */
.skills-neo {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem;
  display: grid;
  gap: 1.25rem;
}

/* ---------- HERO ---------- */
.hero {
  display: grid;
  grid-template-columns: 1fr minmax(260px, 360px);
  gap: 1rem;
  align-items: center;
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  padding: 1rem;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--primary-50) 70%, var(--surface-card)), var(--surface-card));
  box-shadow: 0 10px 30px color-mix(in srgb, var(--primary-500) 8%, transparent);
}
.hero-left { display: grid; grid-template-columns: 70px 1fr; gap: .75rem; align-items: center; }
.glyph { position: relative; width: 64px; height: 64px; border-radius: 16px; display: grid; place-items: center;
  background: var(--surface-card); border: 1px solid var(--surface-border);}
.glyph i { color: var(--primary-color); font-size: 1.4rem; }
.glyph .glow { content:""; position:absolute; inset:-6px; border-radius:20px;
  background: radial-gradient(60px 60px at 30% 30%, color-mix(in srgb, var(--primary-300) 30%, transparent), transparent 70%);
  filter: blur(6px); opacity:.5; pointer-events:none;
}
.title-row { display:flex; gap:.5rem; align-items:center; flex-wrap:wrap; }
.title-row h1 { margin: 0; font-size: 1.7rem; font-weight: 900; letter-spacing:.2px; }
.title-chip {
  display:inline-flex; align-items:center; gap:.35rem;
  border:1px solid color-mix(in srgb, var(--primary-color) 35%, var(--surface-border));
  background: color-mix(in srgb, var(--primary-50) 60%, transparent);
  color: var(--primary-700);
  padding:.25rem .55rem; border-radius:999px; font-size:.8rem; font-weight:700;
}
.hero-left p { margin: .25rem 0 .75rem; color: var(--text-color-secondary); }
.chips { display: flex; gap: .5rem; flex-wrap: wrap; }

/* Search alanı – pilled, modern */
.hero-right { display: grid; gap: .6rem; }
.search {
  display:grid; grid-template-columns: 28px 1fr auto; align-items:center; gap:.5rem;
  border:1px solid var(--surface-border); border-radius: 999px; padding: .4rem .5rem .4rem .6rem;
  background: linear-gradient(180deg, var(--surface-0), var(--surface-card));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
}
.search i { color: var(--text-color-secondary); }
.search-input { border: none; background: transparent; outline: none; box-shadow:none; }
.search-input:focus { box-shadow:none; }
.search:focus-within {
  border-color: color-mix(in srgb, var(--primary-color) 50%, var(--surface-border));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-200) 35%, transparent);
}
.search-clear { margin-right:.15rem; }
.pretty-dropdown :deep(.p-dropdown) {
  width: 100%;
  border-radius: 12px;
}

/* ---------- GROUPS ---------- */
.group-list { display: grid; gap: 1rem; }
.group-card {
  --tint: var(--primary-color);
  border: 1px solid var(--surface-border);
  border-left: 4px solid color-mix(in srgb, var(--tint) 80%, transparent);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--tint) 6%, transparent), transparent 65%),
    var(--surface-card);
  border-radius: 16px;
  padding: 1rem;
  transition: box-shadow .2s ease, border-color .2s ease;
  box-shadow: 0 6px 18px color-mix(in srgb, var(--tint) 6%, transparent);
}
.group-card:hover {
  border-color: color-mix(in srgb, var(--tint) 40%, var(--surface-border));
  box-shadow: 0 12px 28px color-mix(in srgb, var(--tint) 10%, transparent);
}

/* Kategori anahtarlarını daha sağlam yönetmek için id veya slug kullanacağız */
.group-card[data-key="frontend"]            { --tint: var(--c-frontend); }
.group-card[data-key="backend"]             { --tint: var(--c-backend); }
.group-card[data-key="database"]            { --tint: var(--c-db); }
.group-card[data-key="devops-tools"]        { --tint: var(--c-devops); }
.group-card[data-key="seo-dijital-strateji"] { --tint: #f59e0b; }
.group-card[data-key="programming-languages"] { --tint: var(--c-langs); }
.group-card[data-key="programlama-dilleri"] { --tint: var(--c-langs); }

.group-head {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: .75rem;
  align-items: center;
  padding-bottom: .75rem;
  border-bottom: 1px dashed var(--surface-border);
}
.left { display: flex; gap: .75rem; align-items: center; }
.cat-icon {
  color: var(--tint); font-size: 1.1rem;
  background: color-mix(in srgb, var(--tint) 14%, transparent);
  padding: .55rem; border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--tint) 30%, var(--surface-border));
}
.group-title { margin: 0 0 .25rem 0; font-size: 1.2rem; }
.group-desc { margin: 0; color: var(--text-color-secondary); }

/* ---------- DONUT (tam ortalanmış metin) ---------- */
.donut-wrap { position: relative; width: 86px; height: 86px; }
.donut { width: 86px; height: 86px; display: block; }
.donut-bg { fill: none; stroke: color-mix(in srgb, var(--tint) 20%, var(--surface-300)); stroke-width: 10; }
.donut-fg { fill: none; stroke: var(--tint); stroke-width: 10; stroke-linecap: round;
  transform: rotate(-90deg); transform-origin: 50% 50%;
  transition: stroke-dashoffset .6s cubic-bezier(.22,.61,.36,1); }

/* Burada kesin merkezleme yapıyoruz */
.donut-center {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; line-height: 1;
}
.donut-pct {
  font-weight: 900; font-size: 1rem;
  font-variant-numeric: tabular-nums; /* eş genişlikli rakamlar */
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
}
.donut-label { margin-top: .15rem; font-size: .7rem; color: var(--text-color-secondary); }

/* ---------- ROWS ---------- */
.rows { display: grid; gap: .7rem; padding-top: .8rem; }
.row {
  border: 1px solid var(--surface-border);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--tint) 4%, transparent), transparent 70%),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
  border-radius: 14px;
  padding: .8rem;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
  position: relative; overflow: hidden;
}
.row:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px color-mix(in srgb, var(--tint) 10%, transparent);
  border-color: color-mix(in srgb, var(--tint) 45%, var(--surface-border));
}
.row-head { display: grid; grid-template-columns: auto 1fr auto; gap: .6rem; align-items: center; margin-bottom: .5rem; }
.row-head .name { font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.row-head .pct { font-variant-numeric: tabular-nums; opacity: .9; }

/* Progress bar (tinted + stripes) */
.bar {
  position: relative; height: 12px; border-radius: 999px;
  background: linear-gradient(180deg, var(--surface-100), var(--surface-200));
  overflow: hidden; border: 1px solid color-mix(in srgb, var(--tint) 20%, var(--surface-border));
}
.bar-fill {
  position: absolute; left: 0; top: 0; bottom: 0; width: 0%;
  border-radius: 999px;
  background:
    linear-gradient(180deg,
      color-mix(in srgb, var(--tint) 70%, white 0%),
      color-mix(in srgb, var(--tint) 90%, black 0%)
    );
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--tint) 30%, transparent) inset;
  transition: width .6s cubic-bezier(.22,.61,.36,1);
}
.bar-fill::before {
  content: '';
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(45deg,
      rgba(255,255,255,.18) 0 8px,
      rgba(255,255,255,0) 8px 16px);
  mix-blend-mode: screen;
  animation: stripeMove 6s linear infinite;
}
@keyframes stripeMove { from { background-position: 0 0; } to { background-position: 120px 0; } }
.bar-glow {
  position: absolute; inset: -20px -40px;
  background: radial-gradient(60px 60px at var(--x, 0%) 50%, rgba(255,255,255,.25), transparent 60%);
  pointer-events: none; mix-blend-mode: overlay; animation: sweep 2.4s ease-in-out infinite;
}
@keyframes sweep { 0%{--x:-10%} 50%{--x:110%} 100%{--x:-10%} }

/* ---------- EMPTY ---------- */
.empty { text-align: center; color: var(--text-color-secondary); padding: 2rem 0; }
.empty i { display: block; font-size: 1.6rem; margin-bottom: .5rem; }

/* ---------- RESPONSIVE ---------- */
@media (max-width: 920px) {
  .hero { grid-template-columns: 1fr; }
}
</style>
