<template>
  <div class="contact-neo">
    <Toast />

    <!-- Hero -->
    <header class="hero">
      <div class="hero-title">
        <i class="pi pi-send"></i>
        <h1>{{ t('contact.title') }}</h1>
      </div>
      <p class="hero-sub">{{ t('contact.subtitle') }}</p>
      <span class="hero-blob"></span>
    </header>

    <!-- Content (Alt alta bilgiler) -->
    <section class="stack">
      <!-- Email -->
      <article class="info-card" data-key="mail">
        <div class="ic-head">
          <div class="ic-icon"><i class="pi pi-envelope"></i></div>
          <div class="ic-titles">
            <h3>{{ t('contact.email') }}</h3>
            <p class="ic-text">{{ TO_EMAIL }}</p>
          </div>
        </div>
        <div class="ic-actions">
          <Button size="small" icon="pi pi-copy" :label="t('contact.copy')" text @click="copy(TO_EMAIL, t('contact.copied_mail'))" />
        </div>
      </article>

      <!-- Phone -->
      <article class="info-card" data-key="phone">
        <div class="ic-head">
          <div class="ic-icon"><i class="pi pi-phone"></i></div>
          <div class="ic-titles">
            <h3>{{ t('contact.phone') }}</h3>
            <p class="ic-text">{{ PHONE_DISPLAY }}</p>
          </div>
        </div>
        <div class="ic-actions">
          <Button size="small" icon="pi pi-copy" :label="t('contact.copy')" text @click="copy(PHONE_DISPLAY, t('contact.copied_phone'))" />
        </div>
      </article>

      <!-- Location -->
      <article class="info-card" data-key="loc">
        <div class="ic-head">
          <div class="ic-icon"><i class="pi pi-map-marker"></i></div>
          <div class="ic-titles">
            <h3>{{ t('contact.location') }}</h3>
            <p class="ic-text">{{ t('contact.location_val') }}</p>
          </div>
        </div>
        <div class="ic-actions">
          <a :href="MAP_URL" target="_blank" rel="noopener">
            <Button size="small" icon="pi pi-map" :label="t('contact.open_map')" />
          </a>
        </div>
      </article>

      <!-- Socials -->
      <article class="info-card socials-card">
        <div class="ic-head">
          <div class="ic-icon"><i class="pi pi-users"></i></div>
          <div class="ic-titles">
            <h3>{{ t('contact.social') }}</h3>
            <div class="socials">
              <a :href="LINKEDIN" target="_blank" rel="noopener" class="soc">
                <i class="pi pi-linkedin"></i> LinkedIn
              </a>
              <a :href="GITHUB" target="_blank" rel="noopener" class="soc">
                <i class="pi pi-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

/** --- Temel iletişim bilgileri --- */
const TO_EMAIL = 'bahribirerr@gmail.com'
const PHONE_DISPLAY = '+90 538 367 05 89'

/** --- Diğer linkler --- */
const MAP_URL = (import.meta as any).env?.VITE_CONTACT_MAPURL || 'https://maps.google.com/?q=Ankara'
const LINKEDIN = (import.meta as any).env?.VITE_LINKEDIN || 'https://www.linkedin.com/in/bahri-birer-02256a267//'
const GITHUB = (import.meta as any).env?.VITE_GITHUB || 'https://github.com/bahribirer/'

/** --- Yardımcılar --- */
const toast = useToast()
function copy(text: string, okMsg = 'Kopyalandı') {
  navigator.clipboard?.writeText(text).then(() => {
    toast.add({ severity: 'success', summary: okMsg, life: 1800 })
  })
}
</script>

<style scoped>
/* ---------- Canvas / energy ---------- */
.contact-neo {
  --t-mail:#3b82f6;  /* blue */
  --t-phone:#22c55e; /* green */
  --t-loc:#f59e0b;   /* amber */
  max-width: 980px; margin: 0 auto; padding: 1.25rem; display: grid; gap: 1.25rem;
  background:
    radial-gradient(1200px 600px at -10% -20%, color-mix(in srgb, var(--primary-200) 40%, transparent), transparent 60%),
    radial-gradient(900px 520px at 120% 10%, color-mix(in srgb, var(--primary-400) 20%, transparent), transparent 60%),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
}

/* ---------- Hero ---------- */
.hero {
  position: relative; border-radius: 18px; padding: 1.1rem 1.25rem; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--primary-50) 75%, var(--surface-card)), var(--surface-card));
  box-shadow: 0 14px 34px rgba(0,0,0,.08);
}
.hero-title { display:flex; align-items:center; gap:.65rem; }
.hero-title i { color: var(--primary-600); filter: drop-shadow(0 6px 12px color-mix(in srgb, var(--primary-400) 40%, transparent)); }
.hero-title h1{ margin:0; font-size:1.7rem; font-weight:900; letter-spacing:.2px; }
.hero-sub { margin:.35rem 0 0; color: var(--text-color-secondary); }
.hero-blob {
  position:absolute; right:-110px; top:-120px; width:340px; height:340px; border-radius:50%;
  background:
    radial-gradient(closest-side, color-mix(in srgb, var(--primary-300) 40%, transparent), transparent 70%),
    conic-gradient(from 200deg, color-mix(in srgb, var(--primary-200) 50%, transparent), transparent 60%);
  filter: blur(18px); opacity:.65; pointer-events:none;
}

/* ---------- Stack (alt alta) ---------- */
.stack {
  display: grid;
  gap: .85rem;
}

/* ---------- Cards ---------- */
.info-card{
  --tint: var(--primary-500);
  border: 1px solid color-mix(in srgb, var(--tint) 45%, var(--surface-border));
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--tint) 10%, transparent), transparent 70%),
    var(--surface-card);
  border-radius: 16px; padding: .95rem;
  box-shadow: 0 10px 26px color-mix(in srgb, var(--tint) 10%, transparent);
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
}
.info-card[data-key="mail"] { --tint: var(--t-mail); }
.info-card[data-key="phone"]{ --tint: var(--t-phone); }
.info-card[data-key="loc"]  { --tint: var(--t-loc); }

.info-card:hover{ transform: translateY(-2px); box-shadow:0 16px 36px color-mix(in srgb, var(--tint) 18%, transparent); }

.ic-head{ display:flex; align-items:center; gap:.75rem; }
.ic-icon{
  width: 46px; height: 46px; border-radius: 14px; display:grid; place-items:center;
  background: color-mix(in srgb, var(--tint) 20%, transparent);
  border: 1px solid color-mix(in srgb, var(--tint) 35%, var(--surface-border));
  color: var(--tint);
}
.ic-titles h3{ margin:0; font-size:1.05rem; font-weight:900; }
.ic-text{ margin:.2rem 0 0; font-weight:800; }
.ic-actions{ margin-top:.6rem; display:flex; gap:.5rem; flex-wrap:wrap; }

.socials-card { --tint: var(--primary-500); }
.socials{ display:flex; gap:.6rem; flex-wrap:wrap; margin-top:.25rem; }
.soc{
  display:inline-flex; align-items:center; gap:.45rem; font-weight:700; text-decoration:none;
  border:1px solid var(--surface-border);
  background: linear-gradient(180deg, var(--surface-0), var(--surface-card));
  padding:.35rem .6rem; border-radius:999px;
}
</style>
