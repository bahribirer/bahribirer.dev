<template>
  <section class="home-neo">
    <!-- Immersive Background Layers -->
    <div class="aurora-wrap">
      <div class="aurora a"></div>
      <div class="aurora b"></div>
      <div class="aurora c"></div>
    </div>
    
    <div class="grid-overlay"></div>

    <div class="content-container">
      <!-- Left: Content Card -->
      <div class="hero-card fade-in">
        <div class="badge-row">
          <span class="status-badge">
            <span class="pulse"></span> {{ t('home.status') }}
          </span>
        </div>
        
        <h1 class="hero-name">Bahri Birer</h1>
        <div class="hero-title-wrap">
          <span class="title-accent"></span>
          <h2 class="hero-title">{{ t('home.title') }}</h2>
        </div>
        
        <p class="hero-desc" v-html="t('home.desc')"></p>

        <div class="cta-row">
          <Button :label="t('home.cta')" icon="pi pi-arrow-right" iconPos="right" @click="$router.push('/projects')" class="p-button-glow" />
          <div class="social-links">
            <a href="https://github.com/bahribirer" target="_blank" class="s-link" aria-label="GitHub">
              <i class="pi pi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/bahri-birer-02256a267//" target="_blank" class="s-link" aria-label="LinkedIn">
              <i class="pi pi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Right: Visual / Profil -->
      <div class="hero-visual fade-in-delayed">
        <div class="image-orb">
          <div class="orb-bg"></div>
          <img src="@/assets/images/bahri.jpg" alt="Bahri Birer" class="hero-img" />
          
          <!-- Floating Tech Icons -->
          <div class="tech-floater f-1"><i class="pi pi-vue"></i></div>
          <div class="tech-floater f-2"><i class="pi pi-code"></i></div>
          <div class="tech-floater f-3"><i class="pi pi-server"></i></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.home-neo {
  position: relative;
  min-height: calc(100vh - 80px); /* Adjust for navbar if exists */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

/* ---- Aurora Background ---- */
.aurora-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
  filter: blur(80px);
  opacity: 0.6;
}
.aurora {
  position: absolute;
  border-radius: 50%;
  animation: drift 20s infinite alternate ease-in-out;
}
.aurora.a { width: 40vw; height: 40vw; background: #6366f1; top: -10%; left: -10%; }
.aurora.b { width: 35vw; height: 35vw; background: #42b883; bottom: -5%; right: -5%; animation-delay: -5s; }
.aurora.c { width: 30vw; height: 30vw; background: #ec4899; top: 40%; left: 30%; opacity: 0.4; animation-delay: -2s; }

@keyframes drift {
  0% { transform: translate(0, 0) scale(1.0); }
  100% { transform: translate(10%, 15%) scale(1.1); }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 1;
}

/* ---- Layout ---- */
.content-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

/* ---- Content Card ---- */
.hero-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 32px;
  padding: 3.5rem;
  box-shadow: 
    0 24px 48px rgba(0, 0, 0, 0.06),
    inset 0 1px 1px rgba(255, 255, 255, 1);
}

.badge-row { margin-bottom: 1.5rem; }
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 999px;
  color: #4f46e5;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.pulse {
  width: 8px; height: 8px;
  background: #4f46e5;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(79, 70, 229, 0.4);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
  100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
}

.hero-name {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 950;
  line-height: 1.1;
  margin: 0;
  background: linear-gradient(135deg, #0f172a 30%, #4f46e5);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-title-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0 2rem;
}
.title-accent {
  width: 40px; height: 4px;
  background: #42b883;
  border-radius: 2px;
}
.hero-title {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #374151;
  letter-spacing: -0.02em;
}

.hero-desc {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #4b5563;
  max-width: 500px;
  margin-bottom: 2.5rem;
}
.hero-desc strong { color: #1f2937; }

.cta-row {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.p-button-glow {
  padding: 1rem 2rem !important;
  border-radius: 16px !important;
  background: #4f46e5 !important;
  border: none !important;
  font-weight: 700 !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  box-shadow: 0 8px 16px rgba(79, 70, 229, 0.25) !important;
}
.p-button-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.4) !important;
}

.social-links { display: flex; gap: 1rem; }
.s-link {
  width: 48px; height: 48px;
  display: flex; align-items: center; justify-content: center;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  color: #374151;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.2s ease;
}
.s-link:hover {
  background: #f9fafb;
  border-color: #6366f1;
  color: #6366f1;
  transform: scale(1.05);
}

/* ---- Visual ---- */
.hero-visual {
  display: flex;
  justify-content: center;
  position: relative;
}
.image-orb {
  position: relative;
  width: 320px; height: 320px;
}
.orb-bg {
  position: absolute;
  inset: -20px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(66, 184, 131, 0.2));
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  animation: morph 8s infinite alternate ease-in-out;
}
@keyframes morph {
  0% { border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

.hero-img {
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  position: relative;
  z-index: 2;
  border: 4px solid white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: morph 8s infinite alternate ease-in-out;
}

.tech-floater {
  position: absolute;
  width: 54px; height: 54px;
  background: white;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  z-index: 3;
  animation: float 6s infinite ease-in-out;
}
.f-1 { color: #42b883; top: -10%; left: -10%; animation-delay: 0s; }
.f-2 { color: #3776ab; bottom: 0%; right: -15%; animation-delay: -2s; }
.f-3 { color: #6366f1; top: 50%; right: -20%; animation-delay: -4s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

/* ---- Entrance Animations ---- */
.fade-in { animation: fadeIn 1s ease-out forwards; }
.fade-in-delayed { opacity: 0; animation: fadeIn 1s ease-out 0.4s forwards; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .content-container { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
  .hero-card { padding: 2.5rem; }
  .hero-desc { margin-left: auto; margin-right: auto; }
  .cta-row { justify-content: center; flex-direction: column; gap: 1.5rem; }
  .hero-title-wrap { justify-content: center; }
  .hero-visual { grid-row: 1; }
}
</style>
