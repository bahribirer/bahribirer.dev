<template>
  <div class="projects-neo">
    <!-- HERO -->
    <header class="hero">
      <div class="hero-left">
        <div class="emblem"><i class="pi pi-server"></i></div>
        <div>
          <h1>Projeler</h1>
          <span class="title-accent"></span>
        </div>
      </div>
      <span class="blob a"></span>
      <span class="blob b"></span>
    </header>

    <!-- ServeR -->
    <section class="sheet">
      <header class="sheet-head">
        <div class="sheet-title">
          <i class="pi pi-bolt"></i>
          <h2>ServeR — Frontend için Backend’siz Test Ortamı</h2>
        </div>
        <div class="sheet-tags">
          <Tag rounded severity="success" value="REST" />
          <Tag rounded severity="info" value="GraphQL" />
          <Tag rounded severity="warning" value="WebSocket/SocketIO" />
          <Tag rounded severity="warning" value="Vue" />
        </div>
      </header>

      <div class="rows">
        <article class="card">
          <h3>Özet</h3>
          <p>
            ServeR; <strong>frontend ekiplerinin</strong> gerçek backend hazır olmasa bile
            geliştirme ve <strong>test otomasyonunu</strong> sürdürebilmesi için tasarladığım
            bir <em>mock/virtual backend</em> çözümüdür. Kurumsal süreçlerde sık yaşanan
            “API bekleme” problemini azaltmayı hedefler, tutarlı ve tekrarlanabilir yanıtlarla
            arayüz geliştirmeyi hızlandırır.
          </p>
        </article>

        <article class="card">
          <h3>Problem & Amaç</h3>
          <p>
            Dağıtık takımlarda UI geliştirme, API sözleşmeleri tamamlanana kadar yavaşlar.
            ServeR; <strong>sözleşme odaklı</strong> (contract-first) yaklaşımı destekleyerek
            <em>beklemeyi en aza indirme</em>, edge-case’leri önceden görme ve
            <strong>takım içi paralel çalışma</strong> hedefleriyle geliştirildi.
          </p>
        </article>

        <article class="card">
          <h3>Çözüm Tasarımı</h3>
          <ul class="bullets">
            <li>Senaryo tabanlı yanıt üretimi (başarılı, boş veri, hata, gecikme vb.).</li>
            <li>REST ve GraphQL için <strong>şema/sözleşmeden</strong> mock üretimi.</li>
            <li>Gerçek zamanlı <strong>event akışlarını</strong> canlandırma (WebSocket / Socket.IO).</li>
            <li>Profil/ortam izolasyonu (takım veya branch bazlı çalışma).</li>
            <li>CLI & hafif yönetim katmanı ile hızlı geçiş ve sıfırlama.</li>
            <li>Docker imajı ve <strong>CI/CD</strong> hattıyla taşınabilir kurulum.</li>
          </ul>
        </article>

        <article class="card">
          <h3>Rolüm & Sorumluluklar</h3>
          <ul class="bullets">
            <li>Temel <strong>senaryo motorunun</strong> tasarımı ve geliştirilmesi.</li>
            <li>REST/GraphQL <strong>adaptörlerinin</strong> yazılması ve sözleşme içeri aktarımı.</li>
            <li>Socket.IO tabanlı gerçek zamanlı olay yayın/abonelik altyapısı.</li>
            <li>Test otomasyonuna uygun <strong>fixture/seed</strong> akışının kurgulanması.</li>
            <li>Kurulum, kullanım ve entegrasyon <strong>dokümantasyonu</strong>.</li>
          </ul>
        </article>

        <article class="card">
          <h3>Teknik Yığın</h3>
          <div class="chips">
            <Tag rounded value="TypeScript" />
            <Tag rounded value="Node.js" />
            <Tag rounded value="Fastify" />
            <Tag rounded value="Socket.IO" />
            <Tag rounded value="OpenAPI / Swagger" />
            <Tag rounded value="GraphQL Schema" />
            <Tag rounded value="Docker" />
            <Tag rounded value="GitLab CI/CD" />
          </div>
        </article>

        <article class="card">
          <h3>Sonuç & Öğrenimler</h3>
          <ul class="bullets">
            <li>UI geliştirme süreci, gerçek backend’den <strong>daha az bağımlı</strong> hâle geldi.</li>
            <li>Edge-case senaryolar ve bağlantı sorunları <strong>erken görünür</strong> oldu.</li>
            <li>Gerçek zamanlı sistemler, test kültürü ve <strong>kurumsal kod standartları</strong> konusunda pratik kazanımı.</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Web Projects -->
<section class="sheet websites">
  <header class="sheet-head">
    <div class="sheet-title">
      <i class="pi pi-globe"></i>
      <h2>Vue Web Siteleri — Modern Kurumsal Arayüzler</h2>
    </div>
    <div class="sheet-tags">
      <Tag rounded severity="success" value="Vue" />
      <Tag rounded severity="info" value="TypeScript" />
      <Tag rounded severity="warning" value="Vite" />
      <Tag rounded value="Responsive Design" />
      <Tag rounded value="SEO" />
    </div>
  </header>

  <div class="rows">
    <article class="card">
      <h3>Özet</h3>
      <p>
        Kurumsal müşteriler için <strong>tamamen Vue 3 ve Vite</strong> tabanlı modern web siteleri geliştiriyorum.
        Bu projelerde <em>yüksek performanslı, SEO uyumlu ve mobil öncelikli</em> yapılar hedefleniyor.
        Örnek: <a href="https://rmsyapigrubu.com" target="_blank">rmsyapigrubu.com</a>
      </p>
    </article>

    <article class="card">
      <h3>Genel Özellikler</h3>
      <ul class="bullets">
        <li>Vue 3 Composition API ve TypeScript ile modüler bileşen mimarisi.</li>
        <li>Vite ile <em>hızlı derleme ve geliştirme ortamı</em>.</li>
        <li>PrimeVue ve Tailwind CSS kullanılarak estetik ve uyumlu arayüzler.</li>
        <li>SEO optimizasyonu ve meta etiket yönetimi.</li>
        <li>Form işlemleri ve veri gönderimi için Axios entegresi.</li>
      </ul>
    </article>

    <article class="card">
      <h3>Rolüm & Katkılar</h3>
      <ul class="bullets">
        <li>Site mimarisi, bileşen tasarımı ve frontend altyapısının tamamı.</li>
        <li>Responsive arayüz ve mobil uyumlu tasarım optimizasyonları.</li>
        <li>Form validasyonları, meta yönetimi ve SEO iyileştirmeleri.</li>
        <li>Hosting ve domain yönetimi süreçlerinin takibi ve kurulumu.</li>
      </ul>
    </article>

    <article class="card">
      <h3>Teknik Yığın</h3>
      <div class="chips">
        <Tag rounded value="Vue 3" />
        <Tag rounded value="Vite" />
        <Tag rounded value="TypeScript" />
        <Tag rounded value="PrimeVue" />
        <Tag rounded value="Tailwind CSS" />
        <Tag rounded value="Axios" />
        <Tag rounded value="Netlify / cPanel" />
      </div>
    </article>

    <article class="card">
      <h3>Sonuç & Öğrenimler</h3>
      <ul class="bullets">
        <li>Kurumsal markalar için hızlı ve hafif Vue altyapısı standartlaştırıldı.</li>
        <li>SEO ve performans ölçümlerinde yüksek puanlar elde edildi.</li>
        <li>Birden fazla müşteri sitesi için ortak bileşen kitaplığı oluşturuldu.</li>
      </ul>
    </article>
  </div>
</section>


    <!-- Tiki Taka Toe -->
    <section class="sheet tiki">
      <header class="sheet-head">
        <div class="sheet-title">
          <i class="pi pi-th-large"></i>
          <h2>Tiki Taka Toe — Futbol Bilgisiyle 3x3 Strateji</h2>
        </div>
        <div class="sheet-tags">
          <Tag rounded severity="success" value="Flutter" />
          <Tag rounded severity="info" value="Dart" />
          <Tag rounded severity="warning" value="Python Backend" />
          <Tag rounded severity="success" value="WebSocket" />
          <Tag rounded value="Mobile" />
        </div>
      </header>

      <div class="rows">
        <article class="card">
          <h3>Özet</h3>
          <p>
            <strong>Tiki Taka Toe</strong>, futbol bilgisini ve stratejiyi birleştiren çok oyunculu bir mobil oyundur.
            4x4’lük tahtanın kenarlarında <em>milli takımlar</em> ve <em>kulüpler</em> listelenir; merkezdeki 3x3
            kesişim alanlarına her iki kriteri de sağlayan futbolcular yazılır. Doğru seçimler,
            o anki oyuncuya <strong>X/O</strong> işareti kazandırır; amaç, bilgi doğruluğunu korurken
            üçlü dizilişi (XXX/OOO) tamamlamaktır.
          </p>
        </article>

        <article class="card">
          <h3>Oynanış Mekaniği</h3>
          <ul class="bullets">
            <li>Tahtanın kenarları: üst/soldaki başlıklarda milli takım ve kulüp isimleri.</li>
            <li>Merkez 3x3 hücre: ilgili satır ve sütundaki iki koşulu da sağlayan bir futbolcu girilir.</li>
            <li>Hamle doğrulanınca hücre, hamleyi yapan oyuncunun <strong>X</strong> veya <strong>O</strong> işaretiyle kilitlenir.</li>
            <li>Kazanım: dikey/yatay/çapraz üçlü oluşturmak; beraberlikte bilgi doğruluğu önceliklidir.</li>
          </ul>
        </article>

        <article class="card">
          <h3>Mimari & Altyapı</h3>
          <ul class="bullets">
            <li><strong>Flutter (Dart)</strong> istemci: tahta durumu, sıra yönetimi ve doğrulama geri bildirimleri.</li>
            <li><strong>Python tabanlı backend</strong>: futbolcu–kulüp–milli takım eşleştirme doğrulama motoru.</li>
            <li><strong>WebSocket</strong> lobi: oda açma/katılma, gerçek zamanlı eşleşme ve sıra güncellemeleri.</li>
            <li>Oyun kuralları sunucu tarafında saklanır; geçersiz hamleler anında reddedilir.</li>
          </ul>
        </article>

        <article class="card">
          <h3>Rolüm & Katkılar</h3>
          <ul class="bullets">
            <li>Flutter arayüzü ve oyun döngüsünün (turn, geçerlilik, bitiş) kurgulanması.</li>
            <li>Python doğrulama servisi ve WebSocket tabanlı <strong>lobi/oda</strong> mimarisinin geliştirilmesi.</li>
            <li>Gerçek zamanlı senkronizasyon ve yarışma akışında hata/kenar durumlarının yönetimi.</li>
          </ul>
        </article>

        <article class="card">
          <h3>Teknik Yığın</h3>
          <div class="chips">
            <Tag rounded value="Flutter" />
            <Tag rounded value="Dart" />
            <Tag rounded value="Python" />
            <Tag rounded value="WebSocket" />
            <Tag rounded value="State Management (UI)" />
            <Tag rounded value="Lobby/Rooms" />
          </div>
        </article>

        <article class="card">
          <h3>Öğrenimler</h3>
          <ul class="bullets">
            <li>Gerçek zamanlı oda yapıları ve sıra yönetiminde <strong>tutarlılık</strong> ve <strong>gecikme toleransı</strong>.</li>
            <li>Bilgi doğrulama kuralları için <strong>esnek şema</strong> ve ağ gecikmelerine karşı kullanıcı deneyimi.</li>
            <li>Mobil-sunucu iletişiminde hata senaryolarını sadeleştirerek oyun akışını koruma.</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag'
</script>

<style scoped>

.sheet.websites { --tint: #0ea5e9; } /* Vue Web Siteleri için mavi ton */

/* ---- Canvas (katmanlı renk + doku) ---- */
.projects-neo{
  max-width: 1100px; margin: 0 auto; padding: 1.25rem; display:grid; gap:1.25rem;
  background:
    radial-gradient(1200px 600px at -12% -20%, color-mix(in srgb, var(--primary-200) 46%, transparent), transparent 60%),
    radial-gradient(900px 520px at 115% 12%, color-mix(in srgb, var(--primary-400) 22%, transparent), transparent 60%),
    repeating-linear-gradient(135deg,
      color-mix(in srgb, var(--primary-50) 18%, transparent) 0 14px,
      transparent 14px 28px),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
}

/* ---- Hero (daha doygun arka plan + highlight) ---- */
.hero{
  position:relative; display:grid; grid-template-columns: 1fr; gap:.8rem; align-items:center;
  border:1px solid color-mix(in srgb, var(--primary-500) 22%, var(--surface-border));
  border-radius:18px; padding:1.15rem 1.25rem; overflow:hidden;
  background:
    radial-gradient(420px 220px at 8% 0%, color-mix(in srgb, var(--primary-400) 18%, transparent), transparent 70%),
    linear-gradient(135deg, color-mix(in srgb, var(--primary-50) 72%, var(--surface-card)), var(--surface-card));
  box-shadow: 0 14px 32px rgba(0,0,0,.08);
}
.hero::after{
  content:""; position:absolute; inset:-40%;
  background: conic-gradient(from 200deg,
    transparent 0 35%,
    color-mix(in srgb, var(--primary-300) 22%, transparent) 35% 48%,
    transparent 48% 100%);
  filter: blur(24px); opacity:.55; pointer-events:none;
}
.hero-left{ display:flex; gap:.9rem; align-items:center; }
.emblem{
  width:72px; height:72px; border-radius:18px; display:grid; place-items:center; position:relative;
  background: linear-gradient(180deg, var(--surface-0), var(--surface-card));
  border:1px solid color-mix(in srgb, var(--primary-500) 28%, var(--surface-border));
  box-shadow: 0 10px 22px color-mix(in srgb, var(--primary-400) 16%, transparent);
}
.emblem::before{
  content:""; position:absolute; inset:-2px; border-radius:20px;
  background: linear-gradient(135deg, var(--primary-400), var(--primary-600));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude; padding:2px;
}
.emblem i{ color:#fff; font-size:1.35rem; filter: drop-shadow(0 6px 12px color-mix(in srgb, var(--primary-400) 65%, transparent)); }
.hero-left h1{ margin:0; font-size:1.95rem; font-weight:900; }
.title-accent{
  display:block; height:6px; width:220px; margin-top:.6rem; border-radius:999px;
  background: linear-gradient(90deg, var(--primary-400), var(--primary-600));
  box-shadow: 0 6px 22px color-mix(in srgb, var(--primary-600) 26%, transparent);
}

/* dekoratif blur bloblar (hafif hareket) */
.blob{ position:absolute; pointer-events:none; filter: blur(22px); opacity:.65; border-radius:50%;
  animation: floaty 12s ease-in-out infinite alternate; }
.blob.a{ width:180px; height:180px; left:-60px; top:-60px; background: color-mix(in srgb, var(--primary-300) 60%, transparent); }
.blob.b{ width:240px; height:240px; right:-80px; bottom:-80px; background: color-mix(in srgb, var(--primary-200) 60%, transparent); }
@keyframes floaty { to { transform: translate3d(8px, -6px, 0); opacity:.7; } }
@media (prefers-reduced-motion: reduce){ .blob{ animation:none; } }

/* ---- Project Sheets (tint tabanlı canlı renkler) ---- */
.sheet{
  --tint: var(--primary-500);
  --tint-10: color-mix(in srgb, var(--tint) 10%, transparent);
  --tint-16: color-mix(in srgb, var(--tint) 16%, transparent);
  --tint-40: color-mix(in srgb, var(--tint) 40%, transparent);

  border:1px solid var(--tint-40); border-radius:18px; padding:1rem;
  background:
    radial-gradient(520px 220px at 10% 0%, var(--tint-16), transparent 70%),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
  box-shadow: 0 16px 36px var(--tint-10), inset 0 1px 0 color-mix(in srgb, var(--tint) 18%, white);
}
.sheet:first-of-type{ --tint:#6366f1; } /* ServeR için mor/indigo tatlı bir tint */
.sheet.tiki{ --tint:#22c55e; }          /* Tiki Taka Toe için taze yeşil */

/* sheet başlığı altında renkli vurgu çizgisi */
.sheet-head{
  display:flex; align-items:center; justify-content:space-between; gap:.8rem; flex-wrap:wrap; margin-bottom:.65rem;
}
.sheet-title{ position:relative; display:flex; align-items:center; gap:.55rem; }
.sheet-title::after{
  content:""; position:absolute; left:0; bottom:-8px; height:4px; width:160px; border-radius:999px;
  background: linear-gradient(90deg, var(--tint), color-mix(in srgb, var(--tint) 50%, var(--primary-400)));
  opacity:.9;
}
.sheet-title i{ color: var(--tint); text-shadow: 0 8px 18px var(--tint-10); }
.sheet-title h2{ margin:0; font-size:1.25rem; font-weight:900; }

/* Tag’lere jel görünümü */
.sheet-tags{ display:flex; gap:.4rem; flex-wrap:wrap; }
.sheet-tags :deep(.p-tag){
  border:none; font-weight:800; color:#0f172a;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--tint) 40%, white), color-mix(in srgb, var(--tint) 16%, white));
  box-shadow: 0 6px 14px var(--tint-10), inset 0 1px 0 rgba(255,255,255,.6);
}

/* ---- Grid & Cards (sol renk şeridi + hover parlaması) ---- */
.rows{ display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:.9rem; }

.card{
  position:relative;
  border:1px solid color-mix(in srgb, var(--tint) 28%, var(--surface-border));
  border-radius:14px; padding:.95rem .95rem .95rem 1rem;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--tint) 12%, transparent), transparent 72%),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
  box-shadow: 0 12px 28px var(--tint-10);
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;
}
.card::before{
  content:""; position:absolute; left:-1px; top:-1px; bottom:-1px; width:6px; border-radius:14px 0 0 14px;
  background: linear-gradient(180deg, var(--tint), color-mix(in srgb, var(--tint) 60%, var(--primary-400)));
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--tint) 40%, var(--surface-border));
}
.card:hover{
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--tint) 65%, var(--surface-border));
  box-shadow: 0 18px 40px var(--tint-16);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--tint) 16%, transparent), transparent 70%),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
}
.card h3{ margin:.1rem 0 .4rem; font-size:1.06rem; font-weight:900; letter-spacing:.2px; }
.card p{ margin:0; color: var(--text-color-secondary); }

/* bullets: küçük gradient nokta */
.bullets{ margin:.1rem 0 0; padding-left:0; list-style:none; color: var(--text-color-secondary); }
.bullets li{ margin:.28rem 0; padding-left:1.1rem; position:relative; }
.bullets li::before{
  content:""; position:absolute; left:.2rem; top:.45rem; width:8px; height:8px; border-radius:999px;
  background: linear-gradient(180deg, var(--tint), color-mix(in srgb, var(--tint) 40%, var(--primary-400)));
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--tint) 15%, white);
}

/* teknik yığın tag’leri de renklendir */
.chips{ display:flex; gap:.4rem; flex-wrap:wrap; }
.chips :deep(.p-tag){
  border:none; font-weight:800; color:#0f172a;
  background: linear-gradient(180deg, color-mix(in srgb, var(--tint) 30%, white), color-mix(in srgb, var(--tint) 12%, white));
  box-shadow: 0 6px 14px var(--tint-10), inset 0 1px 0 rgba(255,255,255,.6);
}

/* ---- Responsive tweaks ---- */
@media (max-width: 640px){
  .sheet-head{ align-items:flex-start; }
  .sheet-title::after{ width:120px; }
}
</style>
