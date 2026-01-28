<template>
  <section class="exp-page">
    <!-- Başlık -->
    <header class="exp-top text-center">
      <i class="pi pi-briefcase" style="font-size:3rem; color: var(--brand)"></i>
      <h2 class="title">{{ t('experience.title') }}</h2>
      <p class="subtitle">{{ t('experience.subtitle') }}</p>
    </header>

    <!-- HAVELSAN -->
    <section class="exp-section">
      <div class="exp-head">
        <img src="@/assets/images/havelsan.png" alt="HAVELSAN" class="exp-logo" />
        <div class="exp-head-text">
          <h3 class="exp-company">HAVELSAN</h3>
          <div class="exp-meta">
            <span class="role">{{ t('experience.role.long_term') }}</span>
            <span class="dot">•</span>
            <span class="where">Ankara</span>
            <span class="dot">•</span>
            <span class="when">08.07.2024 – 10.01.2025</span>
          </div>
        </div>
      </div>

      <p class="exp-summary" v-html="t('experience.havelsan.summary')"></p>

      <div class="exp-columns">
        <div class="exp-col">
          <h4 class="col-title">{{ t('experience.responsibilities') }}</h4>
          <ul class="bullets">
            <li v-for="(item, i) in tm('experience.havelsan.res_list')" :key="i" v-html="rt(item)"></li>
          </ul>
        </div>
        <div class="exp-col">
          <h4 class="col-title">{{ t('experience.highlights') }}</h4>
          <ul class="bullets">
            <li v-for="(item, i) in tm('experience.havelsan.high_list')" :key="i" v-html="rt(item)"></li>
          </ul>
        </div>
      </div>

      <!-- PREMIUM TECH STACK -->
      <div class="tech-grid">
        <span class="grid-label">{{ t('experience.tech_stack') }}</span>
        <div class="grid-items">
          <div class="tech-card js">
            <i class="pi pi-code"></i>
            <span>TypeScript</span>
          </div>
          <div class="tech-card vue">
            <i class="pi pi-desktop"></i>
            <span>Vue.js</span>
          </div>
          <div class="tech-card db">
            <i class="pi pi-database"></i>
            <span>MongoDB</span>
          </div>
          <div class="tech-card api">
            <i class="pi pi-cloud"></i>
            <span>GraphQL</span>
          </div>
          <div class="tech-card rt">
            <i class="pi pi-bolt"></i>
            <span>Socket.IO</span>
          </div>
          <div class="tech-card ops">
            <i class="pi pi-cog"></i>
            <span>CI/CD</span>
          </div>
        </div>
      </div>
    </section>

    <!-- VBT Software -->
    <section class="exp-section">
      <div class="exp-head">
        <img src="@/assets/images/vbt.png" alt="VBT Software" class="exp-logo" />
        <div class="exp-head-text">
          <h3 class="exp-company">VBT Software</h3>
          <div class="exp-meta">
            <span class="role">{{ t('experience.role.intern') }}</span>
            <span class="dot">•</span>
            <span class="when">05.07.2023 – 28.07.2023</span>
          </div>
        </div>
      </div>

      <p class="exp-summary" v-html="t('experience.vbt.summary')"></p>

      <div class="exp-columns">
        <div class="exp-col">
          <h4 class="col-title">{{ t('experience.responsibilities') }}</h4>
          <ul class="bullets">
            <li v-for="(item, i) in tm('experience.vbt.res_list')" :key="i" v-html="rt(item)"></li>
          </ul>
        </div>
        <div class="exp-col">
          <h4 class="col-title">{{ t('experience.learnings') }}</h4>
          <ul class="bullets">
            <li v-for="(item, i) in tm('experience.vbt.learn_list')" :key="i" v-html="rt(item)"></li>
          </ul>
        </div>
      </div>

      <!-- PREMIUM TECH STACK -->
      <div class="tech-grid">
        <span class="grid-label">{{ t('experience.tech_stack') }}</span>
        <div class="grid-items">
          <div class="tech-card java">
            <i class="pi pi-box"></i>
            <span>Java</span>
          </div>
          <div class="tech-card ang">
            <i class="pi pi-compass"></i>
            <span>Angular</span>
          </div>
          <div class="tech-card db">
            <i class="pi pi-database"></i>
            <span>SQL</span>
          </div>
          <div class="tech-card ops">
            <i class="pi pi-github"></i>
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
</script>

<style scoped>
.exp-page {
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
}

/* Header */
.exp-top .title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.5rem 0 0.25rem;
}
.exp-top .subtitle {
  color: #4b5563;
  margin: 0;
}

/* Section shell */
.exp-section {
  background: #fff;
  border-left: 6px solid var(--brand, #42b883);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  box-shadow: 0 6px 28px rgba(17, 24, 39, 0.06);
}

/* Header row */
.exp-head {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.exp-logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
}
.exp-company {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
}
.exp-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.95rem;
}
.dot { opacity: 0.6; }
.role { font-weight: 600; }
.when, .where { white-space: nowrap; }

/* Summary paragraph */
.exp-summary {
  margin: 0.75rem 0 1.25rem;
  color: #374151;
  line-height: 1.7;
}

/* Two columns details */
.exp-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem 2rem;
}
.col-title {
  margin: 0 0 0.5rem;
  font-weight: 700;
}
.bullets {
  margin: 0;
  padding-left: 1.1rem;
  color: #374151;
  line-height: 1.7;
}
.bullets li { margin-bottom: 0.35rem; }

/* TECH GRID (PREMIUM UI) */
.tech-grid {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px dashed var(--surface-border);
}
.grid-label {
  display: block; font-size: 0.9rem; font-weight: 700; color: #9ca3af;
  margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px;
}
.grid-items {
  display: flex; gap: 0.75rem; flex-wrap: wrap;
}

.tech-card {
  --tint: #64748b;
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 0.85rem;
  border-radius: 12px;
  font-weight: 600; font-size: 0.9rem;
  background: color-mix(in srgb, var(--tint) 8%, white);
  color: var(--tint);
  border: 1px solid color-mix(in srgb, var(--tint) 20%, transparent);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;
}

/* Specific colors */
.tech-card.js   { --tint: #3b82f6; } /* TypeScript Blue */
.tech-card.vue  { --tint: #42b883; } /* Vue Green */
.tech-card.db   { --tint: #059669; } /* Emerald */
.tech-card.api  { --tint: #db2777; } /* Pink */
.tech-card.rt   { --tint: #f59e0b; } /* Amber */
.tech-card.ops  { --tint: #6366f1; } /* Indigo */
.tech-card.java { --tint: #ea580c; } /* Orange */
.tech-card.ang  { --tint: #dc2626; } /* Red */

.tech-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--tint) 25%, transparent);
  background: white;
}
.tech-card i { font-size: 1rem; opacity: 0.85; }

@media (min-width: 768px) {
  .exp-columns { grid-template-columns: 1fr 1fr; }
}
</style>
