<template>
  <section class="exp-page">
    <!-- Başlık -->
    <header class="exp-top text-center">
      <i class="pi pi-briefcase" style="font-size:3rem; color: var(--brand)"></i>
      <h2 class="title">Deneyimler</h2>
      <p class="subtitle">Profesyonel iş deneyimlerim boyunca edindiğim tecrübeler:</p>
    </header>

    <!-- HAVELSAN -->
    <section class="exp-section">
      <div class="exp-head">
        <img src="@/assets/images/havelsan.png" alt="HAVELSAN" class="exp-logo" />
        <div class="exp-head-text">
          <h3 class="exp-company">HAVELSAN</h3>
          <div class="exp-meta">
            <span class="role">Uzun Dönem Stajyer / Ortak Eğitim Programı</span>
            <span class="dot">•</span>
            <span class="where">Ankara</span>
            <span class="dot">•</span>
            <span class="when">08.07.2024 – 10.01.2025</span>
          </div>
        </div>
      </div>

      <p class="exp-summary">
        Kurumsal yazılım geliştirme süreçlerinde görev aldım. TypeScript kullanarak modül geliştirmelerine
        katkı verdim; ekip iş akışlarına uyum sağlayarak kurumsal kod standartlarını benimsedim. Bitirme projem
        <strong>ServR</strong> kapsamında gerçek zamanlı sistemler ve test otomasyon ortamları üzerinde çalıştım.
      </p>

      <div class="exp-columns">
        <div class="exp-col">
          <h4 class="col-title">Sorumluluklar</h4>
          <ul class="bullets">
            <li>TypeScript ve YAML yapısı beraber ön yüz tarafında ise Vue.js ile kurumsal modüllerde ekran ve komponent geliştirme, state ve form yönetimi.</li>
            <li>TypeScript / JavaScript tabanlı servislerde endpoint ekleme, DTO/mapper düzenlemeleri ve testler.</li>
            <li>SQL sorgu düzenlemeleri ve <span class="nowrap">MongoDB</span> üzerinde temel optimizasyonlar.</li>
            <li>Git akışıyla çalışma (branch stratejisi, code review) ve CI/CD sürecine entegrasyon.</li>
          </ul>
        </div>
        <div class="exp-col">
          <h4 class="col-title">Öne Çıkanlar</h4>
          <ul class="bullets">
            <li><strong>ServR</strong> ile frontend ekiplerinin <em>backend’siz</em> test yapabilmesini sağlayan
                ortamların kurgulanması (REST, GraphQL, WebSocket / Socket.IO).</li>
            <li>Takım içi sprint seremonilerine katılım; görev takibi ve raporlama.</li>
            <li>Kurumsal kod standartlarına uygun, okunabilir ve test edilebilir kod üretimi.</li>
          </ul>
        </div>
      </div>

      <div class="stack">
        <span class="stack-title">Kullanılan Teknolojiler:</span>
        <div class="chips">
          <Chip label="TypeScript" /><Chip label="JavaScript" /><Chip label="Vue.js" />
          <Chip label="MongoDB" /><Chip label="REST API" /><Chip label="GraphQL" />
          <Chip label="WebSocket" /><Chip label="Socket.IO" /><Chip label="GitLab CI/CD" />
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
            <span class="role">Stajyer</span>
            <span class="dot">•</span>
            <span class="when">05.07.2023 – 28.07.2023</span>
          </div>
        </div>
      </div>

      <p class="exp-summary">
        Java ve Angular teknolojileriyle modül geliştirme süreçlerine destek verdim. Profesyonel çalışma ortamında
        ekip içi iş akışlarını, code review ve görev planlaması gibi süreçleri deneyimledim.
      </p>

      <div class="exp-columns">
        <div class="exp-col">
          <h4 class="col-title">Sorumluluklar</h4>
          <ul class="bullets">
            <li>Angular ile sayfa/komponent oluşturma, servis entegrasyonları ve temel validasyonlar.</li>
            <li>Java tarafında basit servis fonksiyonları, model/DTO düzenlemeleri.</li>
            <li>SQL sorgularıyla veri okuma/yazma ve raporlama ihtiyaçlarının karşılanması.</li>
          </ul>
        </div>
        <div class="exp-col">
          <h4 class="col-title">Öğrendiklerim</h4>
          <ul class="bullets">
            <li>Kurumsal Git akışları, issue takibi ve code review disiplinleri.</li>
            <li>Frontend–Backend entegrasyon sürecinde iş birliği ve iletişim pratikleri.</li>
          </ul>
        </div>
      </div>

      <div class="stack">
        <span class="stack-title">Kullanılan Teknolojiler:</span>
        <div class="chips">
          <Chip label="Java" /><Chip label="Angular" /><Chip label="SQL" /><Chip label="Git" />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import Chip from 'primevue/chip'
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

/* Section shell (kart değil!) */
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

/* Tech stack chips */
.stack {
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.stack-title {
  font-weight: 700;
  color: #374151;
  margin-top: 0.25rem;
}
.chips :deep(.p-chip) { font-weight: 600; }

@media (min-width: 768px) {
  .exp-columns { grid-template-columns: 1fr 1fr; }
}
</style>
