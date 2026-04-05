<template>
  <div class="detail-page">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <button class="back-btn" @click="$router.push('/projects')">
          <i class="pi pi-arrow-left"></i> {{ t('experience.counpaign_detail.back') }}
        </button>
        <div class="hero-logo-wrap">
          <img src="/images/counpaign/logo.png" alt="Counpaign Logo" class="hero-logo" />
        </div>
        <h1 class="hero-title">Counpaign</h1>
        <p class="hero-sub">{{ t('experience.counpaign_detail.sub') }}</p>
        <div class="hero-tags">
          <span class="htag">SaaS</span>
          <span class="htag">Loyalty</span>
          <span class="htag">Fintech</span>
          <span class="htag founder">Co-Founder</span>
        </div>
      </div>
    </section>

    <!-- ─── Mobile Gallery ─── -->
    <section class="gallery-section">
      <div class="section-label">
        <i class="pi pi-mobile"></i>
        <span>{{ t('experience.counpaign_detail.mobile_label') }}</span>
      </div>
      <p class="section-desc">{{ t('experience.counpaign_detail.mobile_desc') }}</p>

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
                :alt="`Counpaign ekran ${currentIdx + 1}`"
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
    </section>

    <!-- ─── Mobile Features ─── -->
    <section class="features-section">
      <div class="features-grid">
        <div class="feat-card" v-for="(f, i) in mobileFeatureIcons" :key="f">
          <div class="feat-icon">
            <i :class="'pi ' + f"></i>
          </div>
          <h4>{{ (tm('experience.counpaign_detail.mobile_features') as any[])[i].title }}</h4>
          <p>{{ (tm('experience.counpaign_detail.mobile_features') as any[])[i].desc }}</p>
        </div>
      </div>
    </section>

    <!-- ─── Admin Panel ─── -->
    <section class="admin-section">
      <div class="admin-inner">
        <div class="section-label">
          <i class="pi pi-desktop"></i>
          <span>{{ t('experience.counpaign_detail.admin_label') }}</span>
        </div>
        <p class="section-desc">{{ t('experience.counpaign_detail.admin_desc') }}</p>

        <!-- Browser mockup — big featured screenshot -->
        <div class="browser-wrap">
          <div class="browser-chrome">
            <div class="browser-dots">
              <span class="bd red"></span>
              <span class="bd yellow"></span>
              <span class="bd green"></span>
            </div>
            <div class="browser-bar">
              <i class="pi pi-lock" style="font-size:0.7rem; opacity:0.5"></i>
              counpaign.app/admin
            </div>
            <div class="browser-actions">
              <i class="pi pi-refresh" style="opacity:0.4; font-size:0.8rem"></i>
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

        <!-- Thumbnail row for admin -->
        <div class="admin-thumb-row">
          <button
            v-for="(src, i) in adminScreens" :key="i"
            class="admin-thumb" :class="{ active: i === adminIdx }"
            @click="goToAdmin(i)"
          >
            <img :src="src" :alt="`admin thumb ${i+1}`" />
            <div class="admin-thumb-label">{{ t('experience.counpaign_detail.admin_thumb') }} {{ i + 1 }}</div>
          </button>
        </div>

        <!-- Admin feature list -->
        <div class="admin-features-grid">
          <div class="admin-feat" v-for="(icon, i) in adminFeatureIcons" :key="icon">
            <div class="admin-feat-icon">
              <i :class="'pi ' + icon"></i>
            </div>
            <div>
              <strong>{{ (tm('experience.counpaign_detail.admin_features') as any[])[i].title }}</strong>
              <p>{{ (tm('experience.counpaign_detail.admin_features') as any[])[i].desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Website ─── -->
    <section class="website-section">
      <div class="website-inner">
        <div class="website-text">
          <div class="section-label">
            <i class="pi pi-globe"></i>
            <span>{{ t('experience.counpaign_detail.website_label') }}</span>
          </div>
          <h2 class="website-title">counpaign.com</h2>
          <p class="website-desc">{{ t('experience.counpaign_detail.website_desc') }}</p>
          <a href="https://counpaign.com" target="_blank" rel="noopener" class="website-btn">
            <i class="pi pi-external-link"></i>
            {{ t('experience.counpaign_detail.website_cta') }}
          </a>
        </div>
        <div class="website-visual">
          <div class="globe-ring">
            <i class="pi pi-globe"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Tech Stack ─── -->
    <section class="tech-section">
      <div class="section-label">
        <i class="pi pi-code"></i>
        <span>{{ t('experience.counpaign_detail.tech_label') }}</span>
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

// Mobile screens
const screens = [
  '/images/counpaign/mobile_01.png',
  '/images/counpaign/mobile_02.png',
  '/images/counpaign/mobile_03.png',
  '/images/counpaign/mobile_04.png',
  '/images/counpaign/mobile_05.png',
  '/images/counpaign/mobile_06.png',
]

const currentIdx = ref(0)
const slideDir = ref('slide-left')
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

// Admin screens
const adminScreens = [
  '/images/counpaign/admin_01.png',
  '/images/counpaign/admin_02.png',
  '/images/counpaign/admin_03.png',
]
const adminIdx = ref(0)

function goToAdmin(i: number) {
  adminIdx.value = i
}

let mobileTimer: ReturnType<typeof setInterval>
let adminTimer: ReturnType<typeof setInterval>

onMounted(() => {
  setTimeout(() => { sideVisible.value = true }, 300)
  mobileTimer = setInterval(next, 3500)
  adminTimer = setInterval(() => {
    adminIdx.value = (adminIdx.value + 1) % adminScreens.length
  }, 4000)
})
onUnmounted(() => {
  clearInterval(mobileTimer)
  clearInterval(adminTimer)
})

// Only icons — text comes from i18n
const mobileFeatureIcons = ['pi-qrcode', 'pi-mobile', 'pi-bell', 'pi-chart-line', 'pi-tag', 'pi-lock']
const adminFeatureIcons  = ['pi-chart-bar', 'pi-tag', 'pi-qrcode', 'pi-users', 'pi-file-pdf', 'pi-bell']

const techs = [
  { name: 'Flutter',         icon: 'pi-mobile',   color: '#02569b' },
  { name: 'Vue 3',           icon: 'pi-desktop',  color: '#42b883' },
  { name: 'Node.js',         icon: 'pi-server',   color: '#339933' },
  { name: 'MongoDB',         icon: 'pi-database', color: '#47a248' },
  { name: 'Firebase',        icon: 'pi-cloud',    color: '#ffca28' },
  { name: 'Socket.IO',       icon: 'pi-sort-alt', color: '#888' },
  { name: 'Docker',          icon: 'pi-box',      color: '#2496ed' },
  { name: 'AWS EC2',         icon: 'pi-cloud',    color: '#ff9900' },
  { name: 'GitHub Actions',  icon: 'pi-github',   color: '#2088ff' },
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
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.18) 0%, transparent 70%);
  pointer-events: none;
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  color: var(--text-color-secondary);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.2s;
  align-self: flex-start;
}
.back-btn:hover { background: var(--surface-border); color: var(--text-color); }

.hero-logo-wrap {
  width: 110px; height: 110px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 12px 40px rgba(168,85,247,0.35), 0 0 0 3px rgba(168,85,247,0.2);
  overflow: hidden;
}
.hero-logo {
  width: 100%; height: 100%;
  object-fit: cover;
}

.hero-title {
  font-size: 3.5rem; font-weight: 900; margin: 0; letter-spacing: -2px;
  background: linear-gradient(135deg, #a855f7, #c084fc, #7c3aed);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-sub { font-size: 1.2rem; color: var(--text-color-secondary); margin: 0; }

.hero-tags { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: center; }
.htag {
  padding: 0.4rem 1rem; border-radius: 50px;
  background: color-mix(in srgb, #a855f7 12%, transparent);
  border: 1px solid color-mix(in srgb, #a855f7 30%, transparent);
  color: #a855f7; font-size: 0.85rem; font-weight: 700;
}
.htag.founder {
  background: linear-gradient(135deg, #a855f7, #7c3aed);
  color: white; border-color: transparent;
}

/* ── Section Shared ── */
.section-label {
  display: inline-flex; align-items: center; gap: 0.6rem;
  background: color-mix(in srgb, #a855f7 10%, transparent);
  border: 1px solid color-mix(in srgb, #a855f7 25%, transparent);
  color: #a855f7; font-size: 0.85rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.8px;
  padding: 0.5rem 1.2rem; border-radius: 50px; margin-bottom: 1.5rem;
}
.section-desc {
  font-size: 1.05rem; color: var(--text-color-secondary); line-height: 1.7;
  max-width: 650px; margin: 0 0 3rem 0;
}

/* ── Mobile Gallery ── */
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
  background: radial-gradient(ellipse, rgba(168,85,247,0.5) 0%, transparent 70%);
  filter: blur(8px); pointer-events: none;
}

.phone-frame {
  background: #111; border-radius: 42px; padding: 10px;
  box-shadow: 0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.04);
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

.phone-side {
  opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease;
}
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
.ctrl-btn:hover { background: #a855f7; color: white; border-color: #a855f7; transform: scale(1.1); }

.dots { display: flex; gap: 0.5rem; }
.dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--surface-border); border: none; cursor: pointer;
  transition: all 0.25s; padding: 0;
}
.dot.active { background: #a855f7; width: 24px; border-radius: 4px; }

.thumb-strip { display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; }
.thumb {
  width: 60px; height: 110px; border-radius: 12px; overflow: hidden;
  border: 2px solid transparent; cursor: pointer; transition: all 0.2s; padding: 0; background: none;
}
.thumb img { width: 100%; height: 100%; object-fit: cover; }
.thumb:hover { border-color: color-mix(in srgb, #a855f7 50%, transparent); transform: translateY(-3px); }
.thumb.active { border-color: #a855f7; box-shadow: 0 6px 20px rgba(168,85,247,0.35); }

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
  box-shadow: 0 15px 35px rgba(168,85,247,0.1);
  border-color: color-mix(in srgb, #a855f7 30%, transparent);
}
.feat-icon {
  width: 48px; height: 48px;
  background: color-mix(in srgb, #a855f7 12%, transparent);
  border-radius: 14px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem;
}
.feat-icon i { font-size: 1.4rem; color: #a855f7; }
.feat-card h4 { font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem 0; color: var(--text-color); }
.feat-card p  { font-size: 0.9rem; color: var(--text-color-secondary); margin: 0; line-height: 1.6; }

/* ── Admin Panel Section ── */
.admin-section {
  background: color-mix(in srgb, #a855f7 5%, var(--surface-ground));
  border-top: 1px solid color-mix(in srgb, #a855f7 15%, transparent);
  border-bottom: 1px solid color-mix(in srgb, #a855f7 15%, transparent);
  padding: 5rem 2rem;
}
.admin-inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; flex-direction: column; align-items: flex-start;
}

/* Browser mockup */
.browser-wrap {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 40px 80px rgba(0,0,0,0.22),
    0 0 0 1px rgba(255,255,255,0.07);
  margin-bottom: 1.5rem;
  background: #1e1e2e;
}

.browser-chrome {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: #2a2a3d;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.browser-dots { display: flex; gap: 6px; }
.bd {
  width: 12px; height: 12px; border-radius: 50%;
}
.bd.red    { background: #ff5f57; }
.bd.yellow { background: #febc2e; }
.bd.green  { background: #28c840; }

.browser-bar {
  flex: 1; text-align: center;
  background: rgba(255,255,255,0.07);
  border-radius: 8px;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.45);
  font-family: monospace;
  display: flex; align-items: center; justify-content: center; gap: 0.4rem;
  max-width: 360px;
  margin: 0 auto;
}

.browser-actions { display: flex; align-items: center; color: rgba(255,255,255,0.3); }

.browser-screen {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #111;
}

.admin-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

/* Admin thumbnail row */
.admin-thumb-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  width: 100%;
}

.admin-thumb {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--surface-border);
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
  background: none;
  position: relative;
}
.admin-thumb img {
  width: 100%; aspect-ratio: 16/9;
  object-fit: cover; object-position: top; display: block;
}
.admin-thumb-label {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.45);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}
.admin-thumb:hover .admin-thumb-label { opacity: 1; }
.admin-thumb:hover { border-color: color-mix(in srgb, #a855f7 60%, transparent); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(168,85,247,0.2); }
.admin-thumb.active { border-color: #a855f7; box-shadow: 0 8px 28px rgba(168,85,247,0.35); }

/* Fade transition for admin */
.fade-admin-enter-active, .fade-admin-leave-active { transition: opacity 0.4s ease; }
.fade-admin-enter-from, .fade-admin-leave-to { opacity: 0; }

/* Admin features */
.admin-features-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%;
}
.admin-feat {
  display: flex; align-items: flex-start; gap: 1rem;
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 16px; padding: 1.25rem 1.5rem; transition: all 0.2s;
}
.admin-feat:hover {
  border-color: color-mix(in srgb, #a855f7 30%, transparent);
  transform: translateX(4px);
}
.admin-feat-icon {
  width: 40px; height: 40px; min-width: 40px;
  background: color-mix(in srgb, #a855f7 10%, transparent);
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
}
.admin-feat-icon i { color: #a855f7; font-size: 1.2rem; }
.admin-feat strong { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.3rem; color: var(--text-color); }
.admin-feat p { font-size: 0.85rem; color: var(--text-color-secondary); margin: 0; line-height: 1.5; }

/* ── Website Section ── */
.website-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 2rem 0;
}

.website-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  background: linear-gradient(135deg,
    color-mix(in srgb, #a855f7 12%, var(--surface-card)),
    color-mix(in srgb, #7c3aed 8%, var(--surface-card))
  );
  border: 1px solid color-mix(in srgb, #a855f7 25%, transparent);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.website-inner::before {
  content: '';
  position: absolute;
  top: -60px; right: -60px;
  width: 240px; height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.website-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
}

.website-title {
  font-size: 2.2rem;
  font-weight: 900;
  margin: 0;
  letter-spacing: -1px;
  color: var(--text-color);
}

.website-desc {
  font-size: 1.05rem;
  color: var(--text-color-secondary);
  line-height: 1.7;
  margin: 0;
  max-width: 480px;
}

.website-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 2rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #a855f7, #7c3aed);
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(168,85,247,0.4);
  transition: all 0.25s;
  margin-top: 0.5rem;
}
.website-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(168,85,247,0.55);
}

.website-visual {
  flex-shrink: 0;
}

.globe-ring {
  width: 140px; height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(168,85,247,0.2), rgba(124,58,237,0.1));
  border: 2px solid color-mix(in srgb, #a855f7 35%, transparent);
  display: flex; align-items: center; justify-content: center;
  animation: spin-slow 12s linear infinite;
  box-shadow: 0 0 40px rgba(168,85,247,0.2), inset 0 0 40px rgba(168,85,247,0.05);
}
.globe-ring i {
  font-size: 3.5rem;
  color: #a855f7;
  animation: counter-spin 12s linear infinite;
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes counter-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}

@media (max-width: 700px) {
  .website-inner { flex-direction: column; padding: 2rem; }
  .website-visual { display: none; }
  .website-title { font-size: 1.7rem; }
}

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
  .hero-title { font-size: 2.5rem; }
  .phone-side { display: none; }
  .phone-frame.main { width: 220px; height: 475px; }
  .features-grid { grid-template-columns: 1fr 1fr; }
  .admin-features-grid { grid-template-columns: 1fr; }
  .admin-thumb-row { gap: 0.5rem; }
  .gallery-section { padding: 2.5rem 1.25rem; }
  .features-section { padding: 0 1.25rem 2.5rem; }
  .admin-section { padding: 3rem 1.25rem; }
  .tech-section { padding: 2.5rem 1.25rem 4rem; }
  .website-section { padding: 0 1.25rem; }
}
@media (max-width: 540px) {
  .features-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 2rem; }
  .phone-frame.main { width: 200px; height: 430px; }
  .browser-bar { display: none; }
  /* Admin thumbs: scrollable row on very small screens */
  .admin-thumb-row {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
  }
  .admin-thumb { min-width: 120px; flex: 0 0 120px; }
  .hero { padding: 3rem 1.25rem 2.5rem; }
}
</style>
