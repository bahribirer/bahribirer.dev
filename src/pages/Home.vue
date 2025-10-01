<template>
  <section class="home-hero grid align-items-center min-h-screen p-4 md:p-6 lg:p-8">
    <!-- Profil Fotoğrafı -->
    <div class="col-12 md:col-5 flex justify-content-center mb-6 md:mb-0">
      <div class="profile-wrapper">
        <img
          src="@/assets/images/bahri.jpg"
          alt="Bahri Birer"
          class="profile-img"
        />
      </div>
    </div>

    <!-- Tanıtım -->
    <div class="col-12 md:col-7 text-center md:text-left">
      <h1 class="hero-name">Bahri Birer</h1>
      <h2 class="hero-title">Yazılım Mühendisi</h2>
      <p class="hero-desc">
        Full-stack geliştirme, gerçek zamanlı sistemler ve modern web
        teknolojileri üzerine çalışıyorum. Yazılım geliştirmede kullanıcı
        deneyimini ön planda tutarak, güvenilir ve ölçeklenebilir çözümler
        üretmeyi hedefliyorum. Kendimi sürekli geliştirmekten ve yeni
        teknolojiler öğrenmekten keyif alıyorum.
      </p>

      <!-- Sosyal Linkler -->
      <div class="flex gap-5 justify-content-center md:justify-content-start mt-5">
        <a
          href="https://github.com/bahribirer"
          target="_blank"
          class="social-icon"
          aria-label="GitHub"
        >
          <i class="pi pi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/bahri-birer-02256a267//"
          target="_blank"
          class="social-icon"
          aria-label="LinkedIn"
        >
          <i class="pi pi-linkedin"></i>
        </a>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Fotoğrafın "src/assets/images/bahri.jpg" altında olduğundan emin ol
</script>

<style scoped>
/* ===== HERO BACKDROP: katmanlı renk + aurora + ince ızgara ===== */
.home-hero {
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  /* ana degrade */
  background:
    radial-gradient(1200px 600px at -10% -20%, color-mix(in srgb, var(--brand, #6366f1) 12%, transparent), transparent 60%),
    radial-gradient(900px 520px at 120% 10%, color-mix(in srgb, #42b883 18%, transparent), transparent 60%),
    linear-gradient(135deg, #f9fafb, #e9efff);
}

/* aurora bulutları */
.home-hero::before,
.home-hero::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: .55;
  pointer-events: none;
  animation: drift 18s ease-in-out infinite alternate;
}
.home-hero::before {
  width: 360px; height: 360px;
  background: color-mix(in srgb, #42b883 52%, transparent);
  top: -70px; left: -80px;
}
.home-hero::after {
  width: 420px; height: 420px;
  background: color-mix(in srgb, var(--brand, #6366f1) 58%, transparent);
  bottom: -100px; right: -100px;
}

/* ince ızgara dokusu (çok hafif) */
.home-hero :global(.grid-overlay) { display:none; } /* opsiyonel */
.home-hero::marker { content: none } /* safari bug guard */

@keyframes drift { to { transform: translate3d(12px, -10px, 0); opacity:.65; } }
@media (prefers-reduced-motion: reduce){
  .home-hero::before, .home-hero::after { animation: none; }
}

/* ===== PROFİL ===== */
.profile-wrapper{
  --ring: conic-gradient(from 0deg,
      var(--brand, #6366f1),
      #42b883,
      var(--brand, #6366f1));
  position: relative;
  padding: 10px; border-radius: 50%;
  background: transparent;
  isolation: isolate; /* efektlerin taşmaması için */
}
.profile-wrapper::before{
  /* animasyonlu gradient halka */
  content:""; position:absolute; inset:0; border-radius:50%;
  background: var(--ring);
  filter: blur(0.5px);
  animation: spin 18s linear infinite;
  z-index: -1;
}
.profile-wrapper::after{
  /* içe doğru cam etkisi */
  content:""; position:absolute; inset:6px; border-radius:50%;
  background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.55));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.7);
  z-index:-1;
}
@keyframes spin { to { transform: rotate(360deg); } }

.profile-img{
  width: 16rem; height: 16rem;
  border-radius:50%; object-fit: cover;
  box-shadow: 0 16px 38px rgba(0,0,0,.18), 0 2px 0 rgba(255,255,255,.6) inset;
  transition: transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s ease;
  will-change: transform;
}
.profile-wrapper:hover .profile-img{
  transform: translateY(-2px) scale(1.015);
  box-shadow: 0 22px 48px rgba(0,0,0,.22);
}
@media (min-width: 768px){
  .profile-img{ width: 20rem; height: 20rem; }
}

/* ===== METİN ===== */
.hero-name{
  margin: 0 0 .35rem 0;
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: .2px;

  /* hareketli degrade metin */
  background: linear-gradient(90deg,
    var(--brand, #6366f1),
    #42b883,
    var(--brand, #6366f1));
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 8s ease-in-out infinite alternate;
}
@keyframes shine { to { background-position: 100% 0; } }

.hero-title{
  display: inline-flex; align-items:center; gap:.5rem;
  font-size: 1.1rem; font-weight: 800;
  color: #0f172a; /* koyu metin */
  margin-bottom: 1rem;

  /* jel/pil görünümlü rozet */
  padding: .35rem .7rem; border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.6));
  border:1px solid color-mix(in srgb, var(--brand, #6366f1) 28%, #e5e7eb);
  box-shadow: 0 8px 20px color-mix(in srgb, var(--brand, #6366f1) 18%, transparent), inset 0 1px 0 rgba(255,255,255,.8);
}

.hero-desc{
  font-size: 1.05rem; line-height: 1.68; color: #374151;
  max-width: 42rem; margin: 0 auto;

  /* cam kart */
  display: inline-block;
  padding: .85rem 1rem; border-radius: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.55));
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 26px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.7);
}

/* ===== SOSYAL LİNKLER ===== */
.social-icon{
  --c: var(--brand, #6366f1);
  width: 3rem; height: 3rem;
  display: inline-grid; place-items: center;
  border-radius: 12px;
  color: #0f172a; font-size: 1.35rem;
  text-decoration: none;

  background:
    linear-gradient(180deg, rgba(255,255,255,.95), rgba(255,255,255,.7));
  border: 1px solid color-mix(in srgb, var(--c) 28%, #e5e7eb);
  box-shadow: 0 10px 22px color-mix(in srgb, var(--c) 16%, transparent), inset 0 1px 0 rgba(255,255,255,.8);
  transition: transform .2s ease, box-shadow .2s ease, color .2s ease, border-color .2s ease;
}
.social-icon:hover{
  transform: translateY(-2px) scale(1.05);
  border-color: color-mix(in srgb, var(--brand, #6366f1) 60%, #e5e7eb);
  box-shadow: 0 16px 34px color-mix(in srgb, var(--brand, #6366f1) 22%, transparent);
  color: var(--brand, #6366f1);
}

/* spacing */
@media (max-width: 768px){
  .hero-desc{ margin-top: .6rem; }
}
</style>
