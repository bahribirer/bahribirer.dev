<template>
  <div class="certs-v2">
    <!-- HERO / BANNER -->
    <header class="hero">
      <div class="hero-left">
        <div class="emblem">
          <i class="pi pi-certificate"></i>
        </div>
        <div>
          <h1>{{ t('certificates.title') }}</h1>
          <p>{{ t('certificates.subtitle') }}</p>
          <span class="title-accent"></span>
        </div>
      </div>

      <!-- dekoratif -->
      <span class="blob a"></span>
      <span class="blob b"></span>
    </header>

    <!-- STICKY CONTROLS (Search kaldırıldı) -->
    <nav class="controls">
      <div class="controls-inner">
        <!-- Sort -->
        <Dropdown
          v-model="sortKey"
          :options="sortOptions"
          optionLabel="label"
          optionValue="value"
          class="dropdown"
        />

        <!-- View toggle -->
        <div class="view-toggle">
          <Button :outlined="view!=='grid'" size="small" icon="pi pi-th-large" @click="view='grid'"/>
          <Button :outlined="view!=='list'" size="small" icon="pi pi-list" @click="view='list'"/>
          <Button size="small" icon="pi pi-sliders-h" :label="t('certificates.sort.reset')" severity="contrast" @click="reset"/>
        </div>
      </div>
    </nav>

    <!-- FEATURED -->
    <section v-if="sorted.length" class="featured">
      <article
        class="ticket"
        :style="issuerTint(sorted[0].issuer)"
        @click="open(sorted[0])"
      >
        <div class="ticket-ribbon" v-if="sorted[0].badges?.length">
          <i class="pi pi-star"></i> {{ sorted[0].badges[0] }}
        </div>
        <div class="ticket-head">
          <div class="issuer">
            <i class="pi pi-bookmark"></i>
            <span>{{ sorted[0].issuer }}</span>
          </div>
          <Tag rounded :value="sorted[0].year" />
        </div>
        <h3 class="ticket-title">{{ sorted[0].title }}</h3>
        <p class="ticket-desc">{{ sorted[0].description }}</p>
        <div class="ticket-meta">
          <span><i class="pi pi-calendar"></i> {{ formatDate(sorted[0].date) }}</span>
          <span v-if="sorted[0].ref"><i class="pi pi-verified"></i> {{ sorted[0].ref }}</span>
        </div>
        <div class="ticket-actions"></div>
      </article>
    </section>

    <!-- LIST / GRID -->
    <section :class="['cards', view]">
      <article
        v-for="c in rest"
        :key="c.id"
        class="card"
        :style="issuerTint(c.issuer)"
        @click="open(c)"
      >
        <div class="ribbon" v-if="c.badges?.length">
          <i class="pi pi-star"></i> {{ c.badges[0] }}
        </div>

        <div class="card-head">
          <div class="issuer">
            <i class="pi pi-bookmark"></i>
            <span>{{ c.issuer }}</span>
          </div>
          <Tag rounded :value="c.year" />
        </div>

        <h3 class="title">{{ c.title }}</h3>
        <p class="desc">{{ c.description }}</p>

        <div class="badges">
          <Tag v-for="b in c.badges" :key="b" severity="help" rounded :value="b" />
        </div>

        <div class="meta">
          <span class="when"><i class="pi pi-calendar"></i> {{ formatDate(c.date) }}</span>
          <span class="ref" v-if="c.ref"><i class="pi pi-verified"></i> {{ c.ref }}</span>
        </div>

        <div class="actions">
          <Button size="small" icon="pi pi-eye" :label="t('certificates.preview')" text />
          <a v-if="c.file" :href="c.file" target="_blank" rel="noopener" @click.stop>
            <Button size="small" icon="pi pi-download" :label="t('certificates.download')" text />
          </a>
        </div>
      </article>

    </section>

    <!-- PREVIEW DIALOG -->
    <Dialog
      v-if="show"
      :key="dialogKey"
      v-model:visible="show"
      modal
      :dismissableMask="true"
      :closable="true"
      :closeOnEscape="true"
      :header="selected?.title"
      style="max-width: 980px"
      @hide="onHide"
    >
      <div class="preview" v-if="selected">
        <div v-if="pdfSrc" class="frame-wrap">
          <!-- <object> yerine <iframe> ve cache-bust -->
          <iframe
            class="frame"
            :src="pdfSrc"
            title="certificate"
          ></iframe>
        </div>
        <div class="preview-meta">
          <Tag rounded :value="selected?.issuer" />
          <Tag rounded severity="warning" :value="selected?.year" />
        </div>
        <p class="preview-text">{{ selected?.long }}</p>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tag from 'primevue/tag'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

type Cert = {
  id: string
  title: string
  issuer: string
  year: number
  date: string // ISO
  description: string
  long?: string
  badges: string[]
  ref?: string
  file?: string
}

const formatDate = (iso: string) => {
  // locale.value 'tr' veya 'en' olabilir, bunu 'tr-TR' / 'en-US' formatına çevirebiliriz
  // veya direkt locale.value versek de çoğu tarayıcı 'en' için 'en-US' gibi davranır.
  return new Date(iso).toLocaleDateString(locale.value, { year: 'numeric', month: 'long' })
}

/** --- PDF doğrudan assets içinde --- */
import gdscCorePdf from '@/assets/bahribirer.pdf'

/** --- Veri (GDSC kurucu üye) --- */
const certs = computed<Cert[]>(() => [
  {
    id: 'gdsc-core-2023',
    title: t('certificates.gdsc_core_2023.title'),
    issuer: t('certificates.gdsc_core_2023.issuer'),
    year: 2023,
    date: '2023-06-30',
    description: t('certificates.gdsc_core_2023.desc'),
    long: t('certificates.gdsc_core_2023.long'),
    badges: [
      t('certificates.gdsc_core_2023.badges.founder'),
      t('certificates.gdsc_core_2023.badges.core'),
      t('certificates.gdsc_core_2023.badges.community')
    ],
    ref: t('certificates.gdsc_core_2023.ref'),
    file: gdscCorePdf
  }
])

/** --- Görünüm / Sıralama --- */
const view = ref<'grid' | 'list'>('grid')
const sortKey = ref<'year-desc' | 'year-asc' | 'title-az' | 'issuer-az'>('year-desc')
const sortOptions = computed(() => [
  { label: t('certificates.sort.year_desc'), value: 'year-desc' },
  { label: t('certificates.sort.year_asc'), value: 'year-asc' },
  { label: t('certificates.sort.title_az'), value: 'title-az' },
  { label: t('certificates.sort.issuer_az'), value: 'issuer-az' }
])

const sorted = computed(() => {
  const arr = [...certs.value]
  switch (sortKey.value) {
    case 'year-desc': return arr.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
    case 'year-asc':  return arr.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
    case 'title-az':  return arr.sort((a, b) => a.title.localeCompare(b.title))
    case 'issuer-az': return arr.sort((a, b) => a.issuer.localeCompare(b.issuer))
    default: return arr
  }
})

const rest = computed(() => sorted.value.slice(1))

/** --- Renk/Tint --- */
function issuerTint(issuer: string) {
  const g = /google|gdsc/i.test(issuer)
  const tint = g ? '#ea4335' : 'var(--primary-500)'
  return { '--tint': tint } as any
}

/** --- Dialog / Preview --- */
const show = ref(false)
const selected = ref<Cert | null>(null)
const dialogKey = ref(0) // her açılışta arttır → remount & cache-bust

const pdfSrc = computed(() => {
  if (!selected.value?.file) return ''
  // cache-bust ve sade görünüm (toolbar gizleme çoğu pdf görüntüleyicide desteklenir)
  const base = selected.value.file
  return `${base}?v=${dialogKey.value}#toolbar=0&navpanes=0`
})

function open(c: Cert) {
  selected.value = c
  dialogKey.value++   // mount’u tazele
  show.value = true
}

function onHide() {
  show.value = false
  selected.value = null
}

function reset() {
  sortKey.value = 'year-desc'
  view.value = 'grid'
}
</script>

<style scoped>
/* ============ Canvas ============ */
.certs-v2{
  max-width: 1100px; margin: 0 auto; padding: 1.25rem; display: grid; gap: 1.25rem;
  background:
    radial-gradient(1200px 600px at -12% -20%, color-mix(in srgb, var(--primary-200) 40%, transparent), transparent 60%),
    radial-gradient(900px 520px at 115% 12%, color-mix(in srgb, var(--primary-400) 18%, transparent), transparent 60%),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
}

/* ============ Hero (minimal & bold) ============ */
.hero{
  position: relative;
  display:grid; grid-template-columns: 1fr; gap:.8rem; align-items:center;
  border:1px solid var(--surface-border); border-radius:18px; padding:1.1rem 1.2rem;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--primary-50) 55%, var(--surface-card)), var(--surface-card));
  box-shadow: 0 12px 28px rgba(0,0,0,.06);
  overflow:hidden;
}
.hero-left{ display:flex; gap:.8rem; align-items:center; }
.emblem{
  width:72px; height:72px; border-radius:18px; display:grid; place-items:center;
  background: var(--surface-card); border:1px solid var(--surface-border);
}
.emblem i{ color: var(--primary-color); font-size:1.6rem; }
.hero-left h1{ margin:0; font-size:1.9rem; font-weight:900; letter-spacing:.2px; }
.hero-left p{ margin:.15rem 0 0; color: var(--text-color-secondary); }
.title-accent{
  display:block; height:6px; width:160px; margin-top:.6rem; border-radius:999px;
  background: linear-gradient(90deg, var(--primary-400), var(--primary-600));
  box-shadow: 0 6px 20px color-mix(in srgb, var(--primary-600) 25%, transparent);
}

/* dekoratif blur bloblar */
.blob{
  position:absolute; pointer-events:none; filter: blur(22px); opacity:.65; border-radius:50%;
}
.blob.a{ width:180px; height:180px; left:-60px; top:-60px; background: color-mix(in srgb, var(--primary-300) 55%, transparent); }
.blob.b{ width:240px; height:240px; right:-80px; bottom:-80px; background: color-mix(in srgb, var(--primary-200) 55%, transparent); }

/* ============ Sticky Controls (Search kaldırıldı) ============ */
.controls{ position: sticky; top: 12px; z-index: 5; }
.controls-inner{
  display:flex; align-items:center; justify-content:flex-end; gap:.7rem;
  padding:.6rem; border-radius: 14px;
  background: color-mix(in srgb, var(--surface-card) 70%, transparent);
  backdrop-filter: blur(8px);
  border: 1px solid color-mix(in srgb, var(--primary-400) 20%, var(--surface-border));
  box-shadow: 0 10px 24px rgba(0,0,0,.06);
}
.dropdown{ min-width: 220px; }
.view-toggle{ display:flex; align-items:center; gap:.45rem; }

/* ============ Featured Ticket ============ */
.featured{ display:grid; grid-template-columns: 1fr; }
.ticket{
  position: relative;
  border: 1px solid color-mix(in srgb, var(--tint, var(--primary-500)) 45%, var(--surface-border));
  background:
    radial-gradient(400px 200px at 10% 0%, color-mix(in srgb, var(--tint, var(--primary-500)) 12%, transparent), transparent 70%),
    linear-gradient(180deg, var(--surface-0), var(--surface-card));
  border-radius: 18px; padding: 1rem;
  box-shadow: 0 14px 34px color-mix(in srgb, var(--tint, var(--primary-500)) 16%, transparent);
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
  cursor: pointer;
}
.ticket:hover{ transform: translateY(-2px); box-shadow: 0 18px 40px color-mix(in srgb, var(--tint, var(--primary-500)) 22%, transparent); }
.ticket-ribbon{
  position:absolute; top:14px; right:-6px; transform: rotate(2deg);
  background: color-mix(in srgb, var(--tint, var(--primary-500)) 70%, white);
  color: #111; font-weight: 900; padding:.25rem .6rem; border-radius: 10px;
  box-shadow: 0 10px 22px rgba(0,0,0,.12);
}
.ticket-head{ display:flex; align-items:center; justify-content:space-between; margin-bottom:.35rem; }
.ticket-head .issuer{ display:flex; gap:.45rem; align-items:center; font-weight:800; }
.ticket-title{ margin:.15rem 0 .3rem; font-size:1.2rem; font-weight:900; }
.ticket-desc{ margin:0; color: var(--text-color-secondary); }
.ticket-meta{ display:flex; gap:.8rem; align-items:center; color: var(--text-color-secondary); font-size:.9rem; margin-top:.55rem; }
.ticket-actions{ display:flex; gap:.5rem; align-items:center; margin-top:.6rem; }

/* ============ Cards (Grid/List) ============ */
.cards.grid{
  display:grid; grid-template-columns: repeat( auto-fill, minmax(280px, 1fr) ); gap:.9rem;
}
.cards.list{
  display:grid; grid-template-columns: 1fr; gap:.8rem;
}
.card{
  position: relative; cursor: pointer;
  border:1px solid color-mix(in srgb, var(--tint, var(--primary-500)) 35%, var(--surface-border));
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--tint, var(--primary-500)) 8%, transparent), transparent 70%),
    var(--surface-card);
  border-radius:16px; padding:.85rem;
  box-shadow: 0 10px 26px color-mix(in srgb, var(--tint, var(--primary-500)) 10%, transparent);
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
}
.card:hover{ transform: translateY(-2px); box-shadow: 0 16px 36px color-mix(in srgb, var(--tint, var(--primary-500)) 18%, transparent); }
.ribbon{
  position:absolute; top:10px; right:-6px; transform: rotate(2deg);
  background: color-mix(in srgb, var(--tint, var(--primary-500)) 70%, white);
  color: #111; font-weight: 900; padding:.2rem .55rem; border-radius: 10px;
}
.card-head{ display:flex; align-items:center; justify-content:space-between; margin-bottom:.4rem; }
.issuer{ display:inline-flex; align-items:center; gap:.45rem; font-weight:800; }
.title{ margin:.15rem 0 .2rem; font-size:1.05rem; font-weight:900; }
.desc{ margin:0; color: var(--text-color-secondary); min-height: 2.4em; }
.badges{ display:flex; gap:.35rem; flex-wrap:wrap; margin:.55rem 0 .3rem; }
.meta{ display:flex; gap:.75rem; align-items:center; color: var(--text-color-secondary); font-size:.9rem; }
.actions{ display:flex; gap:.5rem; align-items:center; margin-top:.55rem; }

.empty{ text-align:center; color: var(--text-color-secondary); padding:2rem 0; }
.empty i{ display:block; font-size:1.6rem; margin-bottom:.5rem; }

/* ============ Preview ============ */
.preview{ display:grid; gap:.75rem; }
.frame-wrap{ border:1px solid var(--surface-border); border-radius:12px; overflow:hidden; }
.frame{ width:100%; height: 70vh; border: none; }
.preview-meta{ display:flex; gap:.5rem; align-items:center; }
.preview-text{ margin:0; color: var(--text-color-secondary); }

/* Responsive */
@media (max-width: 980px){
  .dropdown{ min-width: 160px; }
  .controls-inner{ flex-wrap: wrap; justify-content: space-between; }
}
</style>
