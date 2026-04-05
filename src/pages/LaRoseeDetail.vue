<template>
  <div class="detail-page">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <button class="back-btn" @click="$router.push('/projects')">
          <i class="pi pi-arrow-left"></i> {{ t('experience.larosee_detail.back') }}
        </button>

        <div class="hero-logo-wrap">
          <img src="/images/larosee/logo.png" alt="La Rosée Logo" class="hero-logo" />
        </div>

        <h1 class="hero-title">La Rosée Sales</h1>
        <p class="hero-sub">{{ t('experience.larosee_detail.sub') }}</p>

        <div class="hero-tags">
          <span class="htag">Full Stack</span>
          <span class="htag">Mobile First</span>
          <span class="htag">Flutter</span>
          <span class="htag highlight">AWS</span>
        </div>
      </div>
    </section>

    <!-- ─── Mobile Gallery ─── -->
    <section class="gallery-section">
      <div class="section-label">
        <i class="pi pi-mobile"></i>
        <span>{{ t('experience.larosee_detail.mobile_label') }}</span>
      </div>
      <p class="section-desc">{{ t('experience.larosee_detail.mobile_desc') }}</p>

      <!-- Showcase: prev · main · next -->
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
                :alt="`La Rosée ekran ${currentIdx + 1}`"
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

      <!-- Dot + arrow controls -->
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

      <!-- Thumbnail strip -->
      <div class="thumb-strip">
        <button
          v-for="(src, i) in screens" :key="i"
          class="thumb" :class="{ active: i === currentIdx }"
          @click="goTo(i)"
        >
          <img :src="src" :alt="`thumb ${i+1}`" />
        </button>
      </div>
    </section>

    <!-- ─── Mobile Features ─── -->
    <section class="features-section">
      <div class="features-grid">
        <div class="feat-card" v-for="(icon, i) in mobileFeatureIcons" :key="icon">
          <div class="feat-icon">
            <i :class="'pi ' + icon"></i>
          </div>
          <h4>{{ (tm('experience.larosee_detail.mobile_features') as any[])[i].title }}</h4>
          <p>{{ (tm('experience.larosee_detail.mobile_features') as any[])[i].desc }}</p>
        </div>
      </div>
    </section>

    <!-- ─── Admin Panel ─── -->
    <section class="admin-section">
      <div class="admin-inner">
        <div class="section-label">
          <i class="pi pi-desktop"></i>
          <span>{{ t('experience.larosee_detail.admin_label') }}</span>
        </div>
        <p class="section-desc">{{ t('experience.larosee_detail.admin_desc') }}</p>

        <!-- Browser mockup -->
        <div class="browser-wrap">
          <div class="browser-chrome">
            <div class="browser-dots">
              <span class="bd red"></span>
              <span class="bd yellow"></span>
              <span class="bd green"></span>
            </div>
            <div class="browser-bar">
              <i class="pi pi-lock" style="font-size:0.7rem;opacity:0.5"></i>
              larosee.app/admin
            </div>
            <div class="browser-actions">
              <i class="pi pi-refresh" style="opacity:0.4;font-size:0.8rem"></i>
            </div>
          </div>
          <div class="browser-screen">
            <transition name="fade-admin" mode="out-in">
              <img
                :key="adminIdx"
                :src="adminScreens[adminIdx]"
                :alt="`admin ekran ${adminIdx + 1}`"
                class="admin-img"
              />
            </transition>
          </div>
        </div>

        <!-- Thumbnail row -->
        <div class="admin-thumb-row">
          <button
            v-for="(src, i) in adminScreens" :key="i"
            class="admin-thumb" :class="{ active: i === adminIdx }"
            @click="goToAdmin(i)"
          >
            <img :src="src" :alt="`admin thumb ${i+1}`" />
            <div class="admin-thumb-label">{{ t('experience.larosee_detail.admin_label') }} {{ i + 1 }}</div>
          </button>
        </div>

        <!-- Feature list -->
        <div class="admin-features-grid">
          <div class="admin-feat" v-for="(icon, i) in adminFeatureIcons" :key="icon">
            <div class="admin-feat-icon">
              <i :class="'pi ' + icon"></i>
            </div>
            <div>
              <strong>{{ (tm('experience.larosee_detail.admin_features') as any[])[i].title }}</strong>
              <p>{{ (tm('experience.larosee_detail.admin_features') as any[])[i].desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Tech Stack ─── -->
    <section class="tech-section">
      <div class="section-label">
        <i class="pi pi-code"></i>
        <span>{{ t('experience.larosee_detail.tech_label') }}</span>
      </div>
      <div class="tech-grid">
        <div class="tech-chip" v-for="t in techs" :key="t.name" :style="{ '--c': t.color }">
          <i :class="'pi ' + t.icon"></i>
          {{ t.name }}
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const screens = Array.from({ length: 10 }, (_, i) =>
  `/images/larosee/mobile_${String(i + 1).padStart(2, '0')}.png`
)

const currentIdx = ref(0)
const slideDir   = ref('slide-left')
const sideVisible = ref(false)

const prevImg = computed(() => screens[(currentIdx.value - 1 + screens.length) % screens.length])
const nextImg = computed(() => screens[(currentIdx.value + 1) % screens.length])

function goTo(i: number) {
  slideDir.value = i > currentIdx.value ? 'slide-left' : 'slide-right'
  currentIdx.value = i
}
function next() {
  slideDir.value = 'slide-left'
  currentIdx.value = (currentIdx.value + 1) % screens.length
}
function prev() {
  slideDir.value = 'slide-right'
  currentIdx.value = (currentIdx.value - 1 + screens.length) % screens.length
}

const adminScreens = [
  '/images/larosee/admin_01.png',
  '/images/larosee/admin_02.png',
]
const adminIdx = ref(0)
function goToAdmin(i: number) { adminIdx.value = i }

let timer: ReturnType<typeof setInterval>
let adminTimer: ReturnType<typeof setInterval>
onMounted(() => {
  setTimeout(() => { sideVisible.value = true }, 300)
  timer = setInterval(next, 3500)
  adminTimer = setInterval(() => {
    adminIdx.value = (adminIdx.value + 1) % adminScreens.length
  }, 4500)
})
onUnmounted(() => { clearInterval(timer); clearInterval(adminTimer) })

const mobileFeatureIcons = ['pi-eye', 'pi-wifi', 'pi-sort-amount-up', 'pi-cloud', 'pi-shopping-cart', 'pi-chart-line']
const adminFeatureIcons  = ['pi-chart-bar', 'pi-box', 'pi-users', 'pi-wallet', 'pi-map', 'pi-database']

const techs = [
  { name: 'Flutter',        icon: 'pi-mobile',   color: '#02569b' },
  { name: 'Python (FastAPI)',icon: 'pi-server',   color: '#3776ab' },
  { name: 'Vue 3',          icon: 'pi-desktop',  color: '#42b883' },
  { name: 'PostgreSQL',     icon: 'pi-database', color: '#336791' },
  { name: 'AWS EC2',        icon: 'pi-cloud',    color: '#ff9900' },
  { name: 'AWS RDS',        icon: 'pi-cloud',    color: '#ff9900' },
  { name: 'Google Vision AI',icon: 'pi-eye',     color: '#4285f4' },
]
</script>

<style scoped>
/* ── accent colour ── */
.detail-page { --rose: #f43f5e; --rose-dark: #be123c; --rose-light: #fb7185; }

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
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244,63,94,0.15) 0%, transparent 70%);
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
  box-shadow: 0 12px 40px rgba(244,63,94,0.3), 0 0 0 3px rgba(244,63,94,0.18);
  overflow: hidden; background: white;
}
.hero-logo { width: 100%; height: 100%; object-fit: cover; }

.hero-title {
  font-size: 3.2rem; font-weight: 900; margin: 0; letter-spacing: -2px;
  background: linear-gradient(135deg, #f43f5e, #fb7185, #be123c);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-sub { font-size: 1.15rem; color: var(--text-color-secondary); margin: 0; }

.hero-tags { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: center; }
.htag {
  padding: 0.4rem 1rem; border-radius: 50px;
  background: color-mix(in srgb, #f43f5e 10%, transparent);
  border: 1px solid color-mix(in srgb, #f43f5e 28%, transparent);
  color: #f43f5e; font-size: 0.85rem; font-weight: 700;
}
.htag.highlight {
  background: linear-gradient(135deg, #f43f5e, #be123c);
  color: white; border-color: transparent;
}

/* ── Section Shared ── */
.section-label {
  display: inline-flex; align-items: center; gap: 0.6rem;
  background: color-mix(in srgb, #f43f5e 10%, transparent);
  border: 1px solid color-mix(in srgb, #f43f5e 25%, transparent);
  color: #f43f5e; font-size: 0.85rem; font-weight: 800;
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

.phone-showcase {
  display: flex; align-items: center; justify-content: center;
  gap: 2rem; margin-bottom: 2.5rem; perspective: 1200px;
}

.phone-center { position: relative; z-index: 10; }
.phone-glow {
  position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%);
  width: 180px; height: 30px;
  background: radial-gradient(ellipse, rgba(244,63,94,0.45) 0%, transparent 70%);
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

/* Controls */
.gallery-controls { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem; }
.ctrl-btn {
  width: 44px; height: 44px; border-radius: 50%;
  border: 1.5px solid var(--surface-border);
  background: var(--surface-card); color: var(--text-color);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all 0.2s; font-size: 1rem;
}
.ctrl-btn:hover { background: #f43f5e; color: white; border-color: #f43f5e; transform: scale(1.1); }

.dots { display: flex; gap: 0.5rem; }
.dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--surface-border); border: none; cursor: pointer;
  transition: all 0.25s; padding: 0;
}
.dot.active { background: #f43f5e; width: 24px; border-radius: 4px; }

.thumb-strip { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: center; }
.thumb {
  width: 52px; height: 96px; border-radius: 10px; overflow: hidden;
  border: 2px solid transparent; cursor: pointer; transition: all 0.2s; padding: 0; background: none;
}
.thumb img { width: 100%; height: 100%; object-fit: cover; }
.thumb:hover { border-color: color-mix(in srgb, #f43f5e 50%, transparent); transform: translateY(-3px); }
.thumb.active { border-color: #f43f5e; box-shadow: 0 6px 20px rgba(244,63,94,0.35); }

/* Slide transitions */
.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  position: absolute; inset: 0;
}
.slide-left-enter-from  { transform: translateX(100%); opacity: 0; }
.slide-left-leave-to    { transform: translateX(-100%); opacity: 0; }
.slide-right-enter-from { transform: translateX(-100%); opacity: 0; }
.slide-right-leave-to   { transform: translateX(100%); opacity: 0; }

/* ── Mobile Features ── */
.features-section { max-width: 1100px; margin: 0 auto; padding: 0 2rem 4rem; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

.feat-card {
  background: var(--surface-card); border: 1px solid var(--surface-border);
  border-radius: 20px; padding: 1.75rem; transition: all 0.25s;
}
.feat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(244,63,94,0.1);
  border-color: color-mix(in srgb, #f43f5e 30%, transparent);
}
.feat-icon {
  width: 48px; height: 48px;
  background: color-mix(in srgb, #f43f5e 10%, transparent);
  border-radius: 14px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem;
}
.feat-icon i { font-size: 1.4rem; color: #f43f5e; }
.feat-card h4 { font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem 0; color: var(--text-color); }
.feat-card p  { font-size: 0.9rem; color: var(--text-color-secondary); margin: 0; line-height: 1.6; }

/* ── Browser Mockup ── */
.browser-wrap {
  width: 100%; border-radius: 16px; overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.07);
  margin-bottom: 1.5rem; background: #1e1e2e;
}
.browser-chrome {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: #2a2a3d;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.browser-dots { display: flex; gap: 6px; }
.bd { width: 12px; height: 12px; border-radius: 50%; }
.bd.red    { background: #ff5f57; }
.bd.yellow { background: #febc2e; }
.bd.green  { background: #28c840; }
.browser-bar {
  flex: 1; text-align: center;
  background: rgba(255,255,255,0.07); border-radius: 8px;
  padding: 0.3rem 1rem; font-size: 0.8rem;
  color: rgba(255,255,255,0.45); font-family: monospace;
  display: flex; align-items: center; justify-content: center; gap: 0.4rem;
  max-width: 360px; margin: 0 auto;
}
.browser-actions { display: flex; align-items: center; color: rgba(255,255,255,0.3); }
.browser-screen {
  position: relative; width: 100%; aspect-ratio: 16/9;
  overflow: hidden; background: #111;
}
.admin-img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }

/* Admin thumbnails */
.admin-thumb-row { display: flex; gap: 1rem; margin-bottom: 3rem; width: 100%; }
.admin-thumb {
  flex: 1; border-radius: 12px; overflow: hidden;
  border: 2px solid var(--surface-border);
  cursor: pointer; transition: all 0.2s; padding: 0; background: none; position: relative;
}
.admin-thumb img { width: 100%; aspect-ratio: 16/9; object-fit: cover; object-position: top; display: block; }
.admin-thumb-label {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.45); color: white;
  font-size: 0.8rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.2s;
}
.admin-thumb:hover .admin-thumb-label { opacity: 1; }
.admin-thumb:hover { border-color: color-mix(in srgb, #f43f5e 60%, transparent); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(244,63,94,0.2); }
.admin-thumb.active { border-color: #f43f5e; box-shadow: 0 8px 28px rgba(244,63,94,0.35); }

.fade-admin-enter-active, .fade-admin-leave-active { transition: opacity 0.4s ease; }
.fade-admin-enter-from, .fade-admin-leave-to { opacity: 0; }

/* ── Admin Section ── */
.admin-section {
  background: color-mix(in srgb, #f43f5e 4%, var(--surface-ground));
  border-top: 1px solid color-mix(in srgb, #f43f5e 14%, transparent);
  border-bottom: 1px solid color-mix(in srgb, #f43f5e 14%, transparent);
  padding: 5rem 2rem;
}
.admin-inner { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; align-items: flex-start; }

.admin-features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; }
.admin-feat {
  display: flex; align-items: flex-start; gap: 1rem;
  background: var(--surface-card); border: 1px solid var(--surface-border);
  border-radius: 16px; padding: 1.25rem 1.5rem; transition: all 0.2s;
}
.admin-feat:hover {
  border-color: color-mix(in srgb, #f43f5e 30%, transparent);
  transform: translateX(4px);
}
.admin-feat-icon {
  width: 40px; height: 40px; min-width: 40px;
  background: color-mix(in srgb, #f43f5e 10%, transparent);
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
}
.admin-feat-icon i { color: #f43f5e; font-size: 1.2rem; }
.admin-feat strong { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.3rem; color: var(--text-color); }
.admin-feat p { font-size: 0.85rem; color: var(--text-color-secondary); margin: 0; line-height: 1.5; }

/* ── Tech Section ── */
.tech-section { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem 6rem; }
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
@media (max-width: 850px) {
  .hero-title { font-size: 2.4rem; }
  .phone-side { display: none; }
  .phone-frame.main { width: 220px; height: 475px; }
  .features-grid { grid-template-columns: 1fr 1fr; }
  .admin-features-grid { grid-template-columns: 1fr; }
  .admin-thumb-row { gap: 0.5rem; }
  .gallery-section { padding: 2.5rem 1.25rem; }
  .features-section { padding: 0 1.25rem 2.5rem; }
  .admin-section { padding: 3rem 1.25rem; }
  .tech-section { padding: 2.5rem 1.25rem 4rem; }
}
@media (max-width: 540px) {
  .features-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 1.9rem; }
  .phone-frame.main { width: 200px; height: 430px; }
  .browser-bar { display: none; }
  .admin-thumb-row {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
  }
  .admin-thumb { min-width: 140px; flex: 0 0 140px; }
  .hero { padding: 3rem 1.25rem 2.5rem; }
}
</style>
