<template>
  <div class="contact-page">
    <Toast />

    <!-- Modern Hero Header -->
    <header class="page-header">
      <div class="header-content">
        <div class="header-badge">
          <i class="pi pi-send"></i>
        </div>
        <h1 class="header-title">{{ t('contact.title') }}</h1>
        <p class="header-subtitle">{{ t('contact.subtitle') }}</p>
      </div>
    </header>

    <!-- Main Grid -->
    <main class="contact-grid">
      
      <!-- Email -->
      <div class="contact-card email-card">
        <div class="card-icon">
          <i class="pi pi-envelope"></i>
        </div>
        <div class="card-info">
          <h3 class="label">{{ t('contact.email') }}</h3>
          <p class="value">{{ TO_EMAIL }}</p>
        </div>
        <Button 
          icon="pi pi-copy" 
          text 
          rounded 
          class="action-btn"
          @click="copy(TO_EMAIL, t('contact.copied_mail'))" 
        />
      </div>

      <!-- Phone -->
      <div class="contact-card phone-card">
        <div class="card-icon">
          <i class="pi pi-phone"></i>
        </div>
        <div class="card-info">
          <h3 class="label">{{ t('contact.phone') }}</h3>
          <p class="value">{{ PHONE_DISPLAY }}</p>
        </div>
        <Button 
          icon="pi pi-copy" 
          text 
          rounded 
          class="action-btn"
          @click="copy(PHONE_DISPLAY, t('contact.copied_phone'))" 
        />
      </div>

      <!-- Location (Simplified) -->
      <div class="contact-card location-card">
        <div class="card-icon">
          <i class="pi pi-map-marker"></i>
        </div>
        <div class="card-info">
          <h3 class="label">{{ t('contact.location') }}</h3>
          <p class="value">{{ t('contact.location_val') }}</p>
        </div>
        <!-- No action button here as requested -->
      </div>

      <!-- Socials (Full Width or Grid Item) -->
      <div class="contact-card social-card">
        <div class="card-icon">
          <i class="pi pi-users"></i>
        </div>
        <div class="card-info">
          <h3 class="label">{{ t('contact.social') }}</h3>
          <div class="social-links">
            <a :href="LINKEDIN" target="_blank" class="social-link linkedin">
              <i class="pi pi-linkedin"></i> LinkedIn
            </a>
            <a :href="GITHUB" target="_blank" class="social-link github">
              <i class="pi pi-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Data
const TO_EMAIL = 'bahribirerr@gmail.com'
const PHONE_DISPLAY = '+90 538 367 05 89'
const LINKEDIN = 'https://www.linkedin.com/in/bahri-birer-02256a267//'
const GITHUB = 'https://github.com/bahribirer/'

// Helpers
const toast = useToast()
function copy(text: string, okMsg = 'Kopyalandı') {
  navigator.clipboard.writeText(text).then(() => {
    toast.add({ severity: 'success', summary: okMsg, life: 2000 })
  })
}
</script>

<style scoped>
/* Layout */
.contact-page {
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

/* Grid System */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

/* Base Card Style */
.contact-card {
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  position: relative;
  overflow: hidden;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  border-color: color-mix(in srgb, var(--accent) 40%, var(--surface-border));
}

/* Card Icons & Colors */
.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  color: var(--accent);
  flex-shrink: 0;
}

/* Specific Accents */
.email-card     { --accent: #3b82f6; }
.phone-card     { --accent: #22c55e; }
.location-card  { --accent: #f59e0b; }
.social-card    { --accent: #8b5cf6; }

/* Info Text */
.card-info {
  flex: 1;
  min-width: 0; /* for ellipsis */
}
.label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color-secondary);
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Action Button */
.action-btn {
  color: var(--text-color-secondary);
}
.action-btn:hover {
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, transparent);
}

/* Social Links specific styles */
.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.25rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-color);
  background: var(--surface-0);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--surface-border);
  transition: all 0.2s;
}

.social-link:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* Full width for location/social on mobile? No, grid handles it. */
</style>
