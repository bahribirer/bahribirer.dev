<template>
  <div class="about-page">
    <!-- Modern Hero Header -->
    <header class="page-header">
      <div class="header-content">
        <div class="header-badge">
          <i class="pi pi-user"></i>
        </div>
        <h1 class="header-title">{{ t('about.title') }}</h1>
        <p class="header-subtitle">{{ t('about.subtitle') }}</p>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="content-container">
      
      <!-- Üniversite -->
      <section class="edu-section">
        <div class="section-card">
          <div class="card-head">
            <div class="icon-box uni">
              <i class="pi pi-graduation-cap"></i>
            </div>
            <div class="head-info">
              <h2 class="school-title">{{ t('about.uni.title') }}</h2>
              <span class="school-meta">{{ t('about.uni.subtitle') }}</span>
            </div>
          </div>
          
          <div class="card-body">
            <p class="description">{{ t('about.uni.desc') }}</p>
          </div>
        </div>
      </section>

      <!-- Lise -->
      <section class="edu-section">
         <div class="section-card">
          <div class="card-head">
            <div class="icon-box hs">
              <i class="pi pi-building"></i>
            </div>
            <div class="head-info">
              <h2 class="school-title">{{ t('about.hs.title') }}</h2>
              <span class="school-meta">{{ t('about.hs.subtitle') }}</span>
            </div>
          </div>
          
          <div class="card-body">
            <p class="description">{{ t('about.hs.desc') }}</p>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Page Layout */
.about-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}

/* Modern Header */
.page-header {
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, var(--surface-card), var(--surface-0));
  border: 1px solid var(--surface-border);
  border-radius: 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

.page-header::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; height: 4px;
  background: linear-gradient(90deg, var(--primary-400), var(--primary-600));
}

.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-badge {
  width: 60px;
  height: 60px;
  background: color-mix(in srgb, var(--primary-500) 10%, transparent);
  color: var(--primary-600);
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.25rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
}
.header-badge i { font-size: 1.75rem; }

.header-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.75rem 0;
  letter-spacing: -1px;
  color: var(--text-color);
}

.header-subtitle {
  font-size: 1.1rem;
  color: var(--text-color-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Content Container */
.content-container {
  display: grid;
  gap: 2rem;
}

/* Section Cards */
.section-card {
  background: var(--surface-card);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid var(--surface-border);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
}

/* Card Header */
.card-head {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--surface-border);
}

.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.uni {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
}
.hs {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);
}

.head-info {
  flex: 1;
}

.school-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 0.35rem 0;
  color: var(--text-color);
}

.school-meta {
  font-size: 0.95rem;
  color: var(--text-color-secondary);
  font-weight: 500;
}

/* Card Body */
.description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-color-secondary);
  margin: 0;
}

/* Dark Mode Adjustments */
@media (prefers-color-scheme: dark) {
  .section-card {
    background: var(--surface-card);
    border-color: var(--surface-border);
  }
}

/* Responsive */
@media (max-width: 600px) {
  .card-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
