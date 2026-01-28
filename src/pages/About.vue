<template>
  <div class="about-edu">
    <!-- Başlık -->
    <header class="hero">
      <div class="hero-left">
        <div class="hero-icon">
          <i class="pi pi-book"></i>
        </div>
        <div>
          <h1>{{ t('about.title') }}</h1>
          <p>{{ t('about.subtitle') }}</p>
        </div>
      </div>
      <span class="hero-glow"></span>
    </header>

    <!-- Premium Kartlar (Timeline yerine Stacked Cards) -->
    <section class="edu-stack">
      <!-- Üniversite -->
      <article class="edu-card" @click="toggle('uni')">
        <div class="card-glass"></div>
        <div class="card-content">
          <div class="card-head">
            <div class="school-icon uni">
              <i class="pi pi-graduation-cap"></i>
            </div>
            <div class="school-info">
              <h3>{{ t('about.uni.title') }}</h3>
              <span class="school-meta">{{ t('about.uni.subtitle') }}</span>
            </div>
            <Button
              icon="pi pi-angle-down"
              text
              rounded
              class="toggle-btn"
              :class="{ rotated: open === 'uni' }"
            />
          </div>
          <div class="card-body" v-show="open === 'uni'">
            <div class="divider"></div>
            <p>{{ t('about.uni.desc') }}</p>
          </div>
        </div>
      </article>

      <!-- Lise -->
      <article class="edu-card" @click="toggle('hs')">
        <div class="card-glass"></div>
        <div class="card-content">
          <div class="card-head">
            <div class="school-icon hs">
              <i class="pi pi-building"></i>
            </div>
            <div class="school-info">
              <h3>{{ t('about.hs.title') }}</h3>
              <span class="school-meta">{{ t('about.hs.subtitle') }}</span>
            </div>
            <Button
              icon="pi pi-angle-down"
              text
              rounded
              class="toggle-btn"
              :class="{ rotated: open === 'hs' }"
            />
          </div>
          <div class="card-body" v-show="open === 'hs'">
            <div class="divider"></div>
            <p>{{ t('about.hs.desc') }}</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Accordion mantığı
const open = ref<'uni' | 'hs' | null>('uni')

function toggle(key: 'uni' | 'hs') {
  open.value = open.value === key ? null : key
}
</script>

<style scoped>
/* ---------- Layout & Energy ---------- */
.about-edu {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: grid;
  gap: 2rem;
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--surface-border);
}
.hero-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
}
.hero-icon {
  width: 52px; height: 52px;
  border-radius: 16px;
  display: grid; place-items: center;
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.hero-icon i { font-size: 1.4rem; color: var(--primary-color); }
.hero h1 { margin: 0; font-size: 1.8rem; font-weight: 800; letter-spacing: -0.5px; }
.hero p { margin: 0.25rem 0 0; color: var(--text-color-secondary); }
.hero-glow {
  position: absolute;
  top: -50%; left: -10%;
  width: 200px; height: 100px;
  background: radial-gradient(circle, var(--primary-200) 0%, transparent 70%);
  filter: blur(40px);
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
}

/* ---------- Stacked Cards (Accordion) ---------- */
.edu-stack {
  display: grid;
  gap: 1.25rem;
}

.edu-card {
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
  /* Hafif yukarı kalkma efekti */
}
.edu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06);
}

/* Glass Layer */
.card-glass {
  position: absolute; inset: 0;
  background: linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%);
  backdrop-filter: blur(10px);
  z-index: 1;
  border: 1px solid rgba(255,255,255,0.5);
  transition: all 0.3s ease;
}
.edu-card:hover .card-glass {
  background: linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%);
}

/* Content */
.card-content {
  position: relative;
  z-index: 2;
  padding: 1.25rem;
}

/* Head */
.card-head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
}
.school-icon {
  width: 48px; height: 48px;
  border-radius: 14px;
  display: grid; place-items: center;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
.school-icon.uni { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.school-icon.hs  { background: linear-gradient(135deg, #f59e0b, #d97706); }

.school-info h3 { margin: 0; font-size: 1.1rem; font-weight: 700; color: #1f2937; }
.school-meta { font-size: 0.9rem; color: #6b7280; font-weight: 500; }

.toggle-btn {
  color: #9ca3af;
  transition: transform 0.3s ease;
}
.toggle-btn.rotated {
  transform: rotate(180deg);
  color: var(--primary-500);
}

/* Body (Accordion Content) */
.card-body {
  margin-top: 1rem;
  animation: slideDown 0.3s ease forwards;
}
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
  margin-bottom: 1rem;
}

.card-body p {
  margin: 0;
  line-height: 1.6;
  color: #4b5563;
  font-size: 0.95rem;
}
</style>
