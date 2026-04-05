<template>
  <div class="detail-page">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <button class="back-btn" @click="$router.push('/projects')">
          <i class="pi pi-arrow-left"></i> {{ t('experience.tiki_detail.back') }}
        </button>

        <div class="hero-logo-wrap">
          <img src="/images/tiki/logo.png" alt="Tiki Taka Toe Logo" class="hero-logo" />
        </div>

        <h1 class="hero-title">Tiki Taka Toe</h1>
        <p class="hero-sub">{{ t('experience.tiki_detail.sub') }}</p>

        <div class="hero-tags">
          <span class="htag">Flutter</span>
          <span class="htag">WebSocket</span>
          <span class="htag">Python</span>
          <span class="htag highlight">Multiplayer</span>
        </div>
      </div>
    </section>

    <!-- ─── Screenshots ─── -->
    <section class="gallery-section">
      <div class="section-label">
        <i class="pi pi-images"></i>
        <span>{{ t('experience.tiki_detail.screenshots_label') }}</span>
      </div>

      <!-- When photos exist -->
      <template v-if="screens.length">
        <p class="section-desc" style="margin-bottom:2rem">{{ t('experience.tiki_detail.gameplay_desc') }}</p>

        <div class="phone-showcase">
          <div class="phone-side left" :class="{ visible: sideVisible }">
            <div class="phone-frame small">
              <img :src="prevImg" alt="prev" class="phone-screen" />
            </div>
          </div>

          <div class="phone-center">
            <div class="phone-frame main">
              <div class="phone-notch"></div>
              <transition :name="slideDir" mode="out-in">
                <img
                  :key="currentIdx"
                  :src="screens[currentIdx]"
                  :alt="`Tiki Taka Toe ekran ${currentIdx + 1}`"
                  class="phone-screen"
                />
              </transition>
            </div>
            <div class="phone-glow"></div>
          </div>

          <div class="phone-side right" :class="{ visible: sideVisible }">
            <div class="phone-frame small">
              <img :src="nextImg" alt="next" class="phone-screen" />
            </div>
          </div>
        </div>

        <div class="gallery-controls">
          <button class="ctrl-btn" @click="prev"><i class="pi pi-chevron-left"></i></button>
          <div class="dots">
            <button
              v-for="(_, i) in screens" :key="i"
              class="dot" :class="{ active: i === currentIdx }"
              @click="goTo(i)"
            ></button>
          </div>
          <button class="ctrl-btn" @click="next"><i class="pi pi-chevron-right"></i></button>
        </div>

        <div class="thumb-strip">
          <button
            v-for="(src, i) in screens" :key="i"
            class="thumb" :class="{ active: i === currentIdx }"
            @click="goTo(i)"
          >
            <img :src="src" :alt="`thumb ${i+1}`" />
          </button>
        </div>
      </template>

      <!-- Placeholder when no photos yet -->
      <div v-else class="screenshots-placeholder">
        <div class="placeholder-phones">
          <div class="ph-phone left">
            <div class="ph-screen">
              <i class="pi pi-th-large"></i>
            </div>
          </div>
          <div class="ph-phone center">
            <div class="ph-screen main">
              <i class="pi pi-th-large"></i>
              <span>{{ t('experience.tiki_detail.screenshots_placeholder') }}</span>
            </div>
          </div>
          <div class="ph-phone right">
            <div class="ph-screen">
              <i class="pi pi-th-large"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Gameplay Steps ─── -->
    <section class="gameplay-section">
      <div class="gameplay-inner">
        <div class="section-label">
          <i class="pi pi-th-large"></i>
          <span>{{ t('experience.tiki_detail.gameplay_label') }}</span>
        </div>
        <p class="section-desc">{{ t('experience.tiki_detail.gameplay_desc') }}</p>

        <div class="steps-grid">
          <div class="step-card" v-for="(step, i) in gameplaySteps" :key="i">
            <div class="step-number">{{ i + 1 }}</div>
            <div class="step-icon">
              <i :class="'pi ' + step.icon"></i>
            </div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Architecture + Role ─── -->
    <section class="two-col-section">
      <div class="two-col-inner">

        <div class="two-col-block">
          <div class="section-label">
            <i class="pi pi-sitemap"></i>
            <span>{{ t('experience.tiki_detail.arch_label') }}</span>
          </div>
          <div class="info-list">
            <div class="info-item" v-for="(item, i) in archItems" :key="i">
              <div class="info-icon">
                <i :class="'pi ' + item.icon"></i>
              </div>
              <div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="two-col-block">
          <div class="section-label">
            <i class="pi pi-user"></i>
            <span>{{ t('experience.tiki_detail.role_label') }}</span>
          </div>
          <div class="info-list">
            <div class="info-item" v-for="(item, i) in roleItems" :key="i">
              <div class="info-icon">
                <i :class="'pi ' + item.icon"></i>
              </div>
              <div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── Tech Stack ─── -->
    <section class="tech-section">
      <div class="section-label">
        <i class="pi pi-code"></i>
        <span>{{ t('experience.tiki_detail.tech_label') }}</span>
      </div>
      <div class="tech-grid">
        <div class="tech-chip" v-for="tech in techs" :key="tech.name" :style="{ '--c': tech.color }">
          <i :class="'pi ' + tech.icon"></i>
          {{ tech.name }}
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const screens: string[] = Array.from({ length: 10 }, (_, i) =>
  `/images/tiki/mobile_${String(i + 1).padStart(2, '0')}.png`
)

const currentIdx  = ref(0)
const slideDir    = ref('slide-left')
const sideVisible = ref(false)

const prevImg = computed(() => screens.length ? screens[(currentIdx.value - 1 + screens.length) % screens.length] : '')
const nextImg = computed(() => screens.length ? screens[(currentIdx.value + 1) % screens.length] : '')

function goTo(i: number) {
  slideDir.value = i > currentIdx.value ? 'slide-left' : 'slide-right'
  currentIdx.value = i
}
function next() {
  if (!screens.length) return
  slideDir.value = 'slide-left'
  currentIdx.value = (currentIdx.value + 1) % screens.length
}
function prev() {
  if (!screens.length) return
  slideDir.value = 'slide-right'
  currentIdx.value = (currentIdx.value - 1 + screens.length) % screens.length
}

let timer: ReturnType<typeof setInterval>
onMounted(() => {
  setTimeout(() => { sideVisible.value = true }, 300)
  if (screens.length > 1) timer = setInterval(next, 3500)
})
onUnmounted(() => clearInterval(timer))

const gameplaySteps = computed(() => tm('experience.tiki_detail.gameplay_steps') as any[])
const archItems     = computed(() => tm('experience.tiki_detail.arch_items') as any[])
const roleItems     = computed(() => tm('experience.tiki_detail.role_items') as any[])

const techs = [
  { name: 'Flutter',   icon: 'pi-mobile',   color: '#02569b' },
  { name: 'Dart',      icon: 'pi-code',     color: '#0175c2' },
  { name: 'WebSocket', icon: 'pi-sort-alt', color: '#22c55e' },
  { name: 'Python',    icon: 'pi-server',   color: '#3776ab' },
]
</script>

<style scoped>
/* ── Page ── */
.detail-page {
  min-height: 100vh;
  background: var(--surface-ground);
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
}

/* ── Hero ── */
.hero {
  position: relative;
  padding: 5rem 2rem 4rem;
  text-align: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.15) 0%, transparent 70%);
  pointer-events: none;
}
.hero-content {
  position: relative; z-index: 2;
  max-width: 700px; margin: 0 auto;
  display: flex; flex-direction: column; align-items: center; gap: 1rem;
}

.back-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--surface-card); border: 1px solid var(--surface-border);
  color: var(--text-color-secondary); padding: 0.5rem 1.2rem;
  border-radius: 50px; font-size: 0.9rem; font-weight: 600;
  cursor: pointer; margin-bottom: 1rem; transition: all 0.2s;
  align-self: flex-start;
}
.back-btn:hover { background: var(--surface-border); color: var(--text-color); }

.hero-logo-wrap {
  width: 110px; height: 110px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 12px 40px rgba(34,197,94,0.35), 0 0 0 3px rgba(34,197,94,0.2);
  overflow: hidden; background: white;
}
.hero-logo { width: 100%; height: 100%; object-fit: cover; }

.hero-title {
  font-size: 3.2rem; font-weight: 900; margin: 0; letter-spacing: -2px;
  background: linear-gradient(135deg, #22c55e, #4ade80, #16a34a);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-sub { font-size: 1.1rem; color: var(--text-color-secondary); margin: 0; max-width: 540px; line-height: 1.5; }

.hero-tags { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: center; }
.htag {
  padding: 0.4rem 1rem; border-radius: 50px;
  background: color-mix(in srgb, #22c55e 10%, transparent);
  border: 1px solid color-mix(in srgb, #22c55e 28%, transparent);
  color: #16a34a; font-size: 0.85rem; font-weight: 700;
}
.htag.highlight {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white; border-color: transparent;
}

/* ── Section Shared ── */
.section-label {
  display: inline-flex; align-items: center; gap: 0.6rem;
  background: color-mix(in srgb, #22c55e 10%, transparent);
  border: 1px solid color-mix(in srgb, #22c55e 28%, transparent);
  color: #16a34a; font-size: 0.85rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.8px;
  padding: 0.5rem 1.2rem; border-radius: 50px; margin-bottom: 1.5rem;
}
.section-desc {
  font-size: 1.05rem; color: var(--text-color-secondary); line-height: 1.7;
  max-width: 650px; margin: 0 0 3rem 0;
}

/* ── Gallery ── */
.gallery-section {
  max-width: 1100px; margin: 0 auto;
  padding: 4rem 2rem; display: flex; flex-direction: column; align-items: center;
}

/* Placeholder phones */
.screenshots-placeholder {
  width: 100%; display: flex; flex-direction: column; align-items: center; padding: 1rem 0 2rem;
}
.placeholder-phones {
  display: flex; align-items: center; justify-content: center; gap: 2rem;
}
.ph-phone { display: flex; }
.ph-phone.left, .ph-phone.right { opacity: 0.35; transform: scale(0.78); }
.ph-phone.left  { transform: scale(0.78) rotate(-8deg) translateX(20px); }
.ph-phone.right { transform: scale(0.78) rotate(8deg) translateX(-20px); }

.ph-screen {
  width: 200px; height: 430px;
  background: color-mix(in srgb, #22c55e 8%, var(--surface-card));
  border: 2px dashed color-mix(in srgb, #22c55e 35%, transparent);
  border-radius: 40px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 1rem; color: color-mix(in srgb, #22c55e 60%, transparent);
}
.ph-screen.main {
  width: 230px; height: 490px;
  border-color: #22c55e;
  color: #22c55e;
  box-shadow: 0 20px 50px rgba(34,197,94,0.15);
}
.ph-screen i { font-size: 2.5rem; }
.ph-screen span { font-size: 0.85rem; font-weight: 600; text-align: center; padding: 0 1.5rem; line-height: 1.4; }

/* Phone showcase (when photos exist) */
.phone-showcase {
  display: flex; align-items: center; justify-content: center;
  gap: 2rem; margin-bottom: 2.5rem; perspective: 1200px;
}
.phone-center { position: relative; z-index: 10; }
.phone-glow {
  position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%);
  width: 180px; height: 30px;
  background: radial-gradient(ellipse, rgba(34,197,94,0.45) 0%, transparent 70%);
  filter: blur(8px); pointer-events: none;
}
.phone-frame {
  background: #111; border-radius: 42px; padding: 10px;
  box-shadow: 0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08);
  overflow: hidden; position: relative;
}
.phone-frame.main  { width: 260px; height: 560px; border-radius: 46px; }
.phone-frame.small { width: 190px; height: 410px; border-radius: 36px; opacity: 0.6; filter: blur(1px); }
.phone-notch {
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
  width: 80px; height: 24px; background: #111;
  border-radius: 0 0 16px 16px; z-index: 10;
}
.phone-screen { width: 100%; height: 100%; object-fit: cover; border-radius: 32px; display: block; }
.phone-frame.small .phone-screen { border-radius: 24px; }
.phone-side { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }
.phone-side.left  { transform: scale(0.85) rotate(-8deg) translateX(20px); }
.phone-side.right { transform: scale(0.85) rotate(8deg) translateX(-20px); }
.phone-side.visible { opacity: 1; }

.gallery-controls { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem; }
.ctrl-btn {
  width: 44px; height: 44px; border-radius: 50%;
  border: 1.5px solid var(--surface-border); background: var(--surface-card); color: var(--text-color);
  display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;
}
.ctrl-btn:hover { background: #22c55e; color: white; border-color: #22c55e; transform: scale(1.1); }
.dots { display: flex; gap: 0.5rem; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--surface-border); border: none; cursor: pointer; transition: all 0.25s; padding: 0; }
.dot.active { background: #22c55e; width: 24px; border-radius: 4px; }
.thumb-strip { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: center; }
.thumb { width: 52px; height: 96px; border-radius: 10px; overflow: hidden; border: 2px solid transparent; cursor: pointer; transition: all 0.2s; padding: 0; background: none; }
.thumb img { width: 100%; height: 100%; object-fit: cover; }
.thumb:hover { border-color: color-mix(in srgb, #22c55e 50%, transparent); transform: translateY(-3px); }
.thumb.active { border-color: #22c55e; box-shadow: 0 6px 20px rgba(34,197,94,0.35); }

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1); position: absolute; inset: 0;
}
.slide-left-enter-from  { transform: translateX(100%); opacity: 0; }
.slide-left-leave-to    { transform: translateX(-100%); opacity: 0; }
.slide-right-enter-from { transform: translateX(-100%); opacity: 0; }
.slide-right-leave-to   { transform: translateX(100%); opacity: 0; }

/* ── Gameplay Steps ── */
.gameplay-section {
  background: color-mix(in srgb, #22c55e 4%, var(--surface-ground));
  border-top: 1px solid color-mix(in srgb, #22c55e 14%, transparent);
  border-bottom: 1px solid color-mix(in srgb, #22c55e 14%, transparent);
  padding: 5rem 2rem;
}
.gameplay-inner { max-width: 1100px; margin: 0 auto; }

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.step-card {
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  display: flex; flex-direction: column; gap: 0.75rem;
  transition: all 0.25s; position: relative;
}
.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(34,197,94,0.12);
  border-color: color-mix(in srgb, #22c55e 35%, transparent);
}

.step-number {
  position: absolute; top: 1.25rem; right: 1.25rem;
  width: 28px; height: 28px; border-radius: 50%;
  background: color-mix(in srgb, #22c55e 12%, transparent);
  color: #16a34a; font-size: 0.8rem; font-weight: 900;
  display: flex; align-items: center; justify-content: center;
}

.step-icon {
  width: 48px; height: 48px;
  background: color-mix(in srgb, #22c55e 10%, transparent);
  border-radius: 14px; display: flex; align-items: center; justify-content: center;
}
.step-icon i { font-size: 1.4rem; color: #22c55e; }

.step-card h4 { font-size: 1rem; font-weight: 700; margin: 0; color: var(--text-color); }
.step-card p  { font-size: 0.88rem; color: var(--text-color-secondary); margin: 0; line-height: 1.6; }

/* ── Two Column Section ── */
.two-col-section { padding: 5rem 2rem; }
.two-col-inner {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;
}

.info-list { display: flex; flex-direction: column; gap: 1rem; }
.info-item {
  display: flex; align-items: flex-start; gap: 1rem;
  background: var(--surface-card); border: 1px solid var(--surface-border);
  border-radius: 16px; padding: 1.25rem 1.5rem; transition: all 0.2s;
}
.info-item:hover {
  border-color: color-mix(in srgb, #22c55e 30%, transparent);
  transform: translateX(4px);
}
.info-icon {
  width: 40px; height: 40px; min-width: 40px;
  background: color-mix(in srgb, #22c55e 10%, transparent);
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
}
.info-icon i { color: #22c55e; font-size: 1.2rem; }
.info-item strong { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.3rem; color: var(--text-color); }
.info-item p { font-size: 0.85rem; color: var(--text-color-secondary); margin: 0; line-height: 1.5; }

/* ── Tech Section ── */
.tech-section { max-width: 1100px; margin: 0 auto; padding: 0 2rem 6rem; }
.tech-grid { display: flex; flex-wrap: wrap; gap: 0.85rem; }
.tech-chip {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.65rem 1.2rem; border-radius: 12px;
  background: var(--surface-card); border: 1px solid var(--surface-border);
  font-size: 0.95rem; font-weight: 600; color: var(--text-color);
  transition: all 0.2s; cursor: default;
}
.tech-chip:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); border-color: var(--c); }
.tech-chip i { color: var(--c); font-size: 1.1rem; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .steps-grid { grid-template-columns: 1fr 1fr; }
  .two-col-inner { grid-template-columns: 1fr; gap: 3rem; }
  .gallery-section { padding: 2.5rem 1.25rem; }
  .gameplay-section { padding: 3rem 1.25rem; }
  .two-col-section { padding: 3rem 1.25rem; }
  .tech-section { padding: 0 1.25rem 4rem; }
}
@media (max-width: 600px) {
  .hero-title { font-size: 2.2rem; }
  .hero { padding: 3rem 1.25rem 2.5rem; }
  .hero-sub { font-size: 0.95rem; }
  .steps-grid { grid-template-columns: 1fr; }
  .placeholder-phones .ph-phone.left,
  .placeholder-phones .ph-phone.right { display: none; }
  .phone-side { display: none; }
  .phone-frame.main { width: 200px; height: 430px; }
}
</style>
