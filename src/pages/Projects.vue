<template>
  <div class="projects-page">
    <!-- Modern Hero Header -->
    <header class="page-header">
      <div class="header-content">
        <div class="header-badge">
          <i class="pi pi-briefcase"></i>
        </div>
        <h1 class="header-title">{{ t('projects.title') }}</h1>
        <p class="header-subtitle">{{ t('projects.subtitle') }}</p>
      </div>
    </header>

    <!-- ServeR Project -->
    <section class="project-card server">
      <div class="project-head">
        <div class="icon-box">
          <i class="pi pi-server"></i>
        </div>
        <div class="head-content">
          <h3 class="project-title">{{ t('projects.serveR.title') }}</h3>
          <div class="project-tags">
            <Tag class="p-tag" value="Backend System" severity="info" rounded />
            <Tag class="p-tag" value="High Performance" severity="warning" rounded />
          </div>
        </div>
      </div>

      <div class="project-body">
        <p class="summary-text" v-html="t('projects.serveR.summary_desc')"></p>
        
        <div class="details-grid">
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-exclamation-circle"></i> {{ t('projects.serveR.problem') }}</h4>
            <p class="text-sm" v-html="t('projects.serveR.problem_desc')"></p>
          </div>
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-pencil"></i> {{ t('projects.serveR.design') }}</h4>
            <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.serveR.design_features')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
        </div>

        <div class="details-grid mt-4">
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-user"></i> {{ t('projects.serveR.role') }}</h4>
            <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.serveR.role_features')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-check-circle"></i> {{ t('projects.serveR.results') }}</h4>
             <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.serveR.results_features')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
        </div>

        <div class="tech-stack-section">
          <span class="stack-label">{{ t('projects.serveR.tech') }}</span>
          <div class="tech-grid">
            <div class="tech-item ts"><i class="pi pi-code"></i> TypeScript</div>
            <div class="tech-item node"><i class="pi pi-server"></i> Node.js</div>
            <div class="tech-item fastify"><i class="pi pi-bolt"></i> Fastify</div>
            <div class="tech-item socket"><i class="pi pi-sort-alt"></i> Socket.IO</div>
            <div class="tech-item gql"><i class="pi pi-share-alt"></i> GraphQL</div>
            <div class="tech-item docker"><i class="pi pi-box"></i> Docker</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Web Projects -->
    <section class="project-card web">
      <div class="project-head">
        <div class="icon-box">
          <i class="pi pi-globe"></i>
        </div>
        <div class="head-content">
          <h3 class="project-title">{{ t('projects.web.title') }}</h3>
          <div class="project-tags">
            <Tag class="p-tag" value="Frontend" severity="success" rounded />
            <Tag class="p-tag" value="SEO Focused" severity="info" rounded />
          </div>
        </div>
      </div>

      <div class="project-body">
        <p class="summary-text" v-html="t('projects.web.summary_desc')"></p>
        
        <div class="details-grid">
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-star"></i> {{ t('projects.web.features') }}</h4>
            <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.web.features_list')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-link"></i> {{ t('projects.web.featured') }}</h4>
            <div class="link-group">
              <a href="https://trnyapı.com" target="_blank" class="clean-link">trnyapı.com <i class="pi pi-external-link"></i></a>
              <a href="https://rmsyapigrubu.com" target="_blank" class="clean-link">rmsyapigrubu.com <i class="pi pi-external-link"></i></a>
              <a href="https://peralegal.com.tr" target="_blank" class="clean-link">peralegal.com.tr <i class="pi pi-external-link"></i></a>
            </div>
            
            <h4 class="col-title mt-4"><i class="pi pi-chart-line"></i> {{ t('projects.web.strategic') }}</h4>
            <ul class="clean-list">
              <li><strong>{{ t('projects.web.seo') }}</strong>: Analytics & Console.</li>
              <li><strong>{{ t('projects.web.performance') }}</strong>: Lighthouse 90+.</li>
              <li><strong>{{ t('projects.web.responsive') }}</strong>: Mobile-first.</li>
            </ul>
          </div>
        </div>

        <div class="details-grid mt-4">
           <div class="detail-col full-width">
            <h4 class="col-title"><i class="pi pi-check-circle"></i> {{ t('projects.web.results') }}</h4>
            <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.web.results_list')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
        </div>

        <div class="tech-stack-section">
          <span class="stack-label">{{ t('projects.web.tech') }}</span>
          <div class="tech-grid">
            <div class="tech-item vue"><i class="pi pi-desktop"></i> Vue 3</div>
            <div class="tech-item vite"><i class="pi pi-bolt"></i> Vite</div>
            <div class="tech-item ts"><i class="pi pi-code"></i> TypeScript</div>
            <div class="tech-item tailwind"><i class="pi pi-palette"></i> Tailwind</div>
            <div class="tech-item seo"><i class="pi pi-search"></i> SEO / Analytics</div>
          </div>
        </div>
      </div>
    </section>

    <!-- La Rosee -->
    <section class="project-card larosee">
      <div class="project-head">
        <div class="icon-box">
          <i class="pi pi-chart-bar"></i>
        </div>
        <div class="head-content">
          <h3 class="project-title">{{ t('projects.larosee.title') }}</h3>
          <div class="project-tags">
            <Tag class="p-tag" value="Full Stack" severity="danger" rounded />
            <Tag class="p-tag" value="Mobile First" severity="warning" rounded />
          </div>
        </div>
      </div>

      <div class="project-body">
        <div class="details-grid">
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-mobile"></i> {{ t('projects.larosee.mobile_title') }}</h4>
            <p class="text-sm">{{ t('projects.larosee.mobile_desc') }}</p>
            <ul class="clean-list mt-2">
              <li>{{ t('projects.larosee.mobile_features.ocr') }}</li>
              <li>{{ t('projects.larosee.mobile_features.scoreboard') }}</li>
              <li>{{ t('projects.larosee.mobile_features.aws') }}</li>
              <li>{{ t('projects.larosee.mobile_features.offline') }}</li>
            </ul>
          </div>
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-desktop"></i> {{ t('projects.larosee.admin_title') }}</h4>
            <p class="text-sm">{{ t('projects.larosee.admin_desc') }}</p>
            <ul class="clean-list mt-2">
              <li>{{ t('projects.larosee.admin_features.finance') }}</li>
              <li>{{ t('projects.larosee.admin_features.stock') }}</li>
              <li>{{ t('projects.larosee.admin_features.rep') }}</li>
              <li>{{ t('projects.larosee.admin_features.comm') }}</li>
            </ul>
          </div>
        </div>

        <div class="tech-stack-section">
          <span class="stack-label">{{ t('projects.larosee.tech') }}</span>
          <div class="tech-grid">
            <div class="tech-item flutter"><i class="pi pi-mobile"></i> Flutter</div>
            <div class="tech-item python"><i class="pi pi-ticket"></i> Python (FastAPI)</div>
            <div class="tech-item aws"><i class="pi pi-cloud"></i> AWS (EC2/RDS)</div>
            <div class="tech-item base"><i class="pi pi-database"></i> PostgreSQL</div>
            <div class="tech-item ai"><i class="pi pi-eye"></i> Google Vision AI</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tiki Taka Toe -->
    <section class="project-card tiki">
      <div class="project-head">
        <div class="icon-box">
          <i class="pi pi-th-large"></i>
        </div>
        <div class="head-content">
          <h3 class="project-title">{{ t('projects.tiki.title') }}</h3>
          <div class="project-tags">
            <Tag class="p-tag" value="Game Dev" severity="success" rounded />
            <Tag class="p-tag" value="Realtime" severity="info" rounded />
          </div>
        </div>
      </div>

      <div class="project-body">
        <p class="summary-text" v-html="t('projects.tiki.summary_desc')"></p>

        <div class="details-grid">
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-cog"></i> {{ t('projects.tiki.mechanics') }}</h4>
            <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.tiki.mechanics_list')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-sitemap"></i> {{ t('projects.tiki.architecture') }}</h4>
            <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.tiki.architecture_list')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
        </div>

        <div class="details-grid mt-4">
          <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-user"></i> {{ t('projects.tiki.role') }}</h4>
            <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.tiki.role_list')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
           <div class="detail-col">
            <h4 class="col-title"><i class="pi pi-book"></i> {{ t('projects.tiki.learnings') }}</h4>
            <ul class="clean-list">
              <li v-for="(feat, i) in tm('projects.tiki.learnings_list')" :key="i" v-html="rt(feat)"></li>
            </ul>
          </div>
        </div>

        <div class="tech-stack-section">
          <span class="stack-label">{{ t('projects.tiki.tech') }}</span>
          <div class="tech-grid">
            <div class="tech-item flutter"><i class="pi pi-mobile"></i> Flutter</div>
            <div class="tech-item dart"><i class="pi pi-code"></i> Dart</div>
            <div class="tech-item socket"><i class="pi pi-sort-alt"></i> WebSocket</div>
            <div class="tech-item python"><i class="pi pi-server"></i> Python Backend</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
</script>

<style scoped>
/* Page Layout */
.projects-page {
  max-width: 1050px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}

/* Modern Header */
.page-header {
  margin-bottom: 4rem;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, var(--surface-card), var(--surface-0));
  border: 1px solid var(--surface-border);
  border-radius: 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

/* Subtle decorative accent */
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
}
.header-badge i {
  font-size: 1.75rem;
}

.header-title {
  font-size: 2.75rem;
  font-weight: 800;
  margin: 0 0 0.75rem 0;
  letter-spacing: -1px;
  color: var(--text-color);
}

.header-subtitle {
  font-size: 1.15rem;
  color: var(--text-color-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Project Card - Clean & Professional */
.project-card {
  background: var(--surface-card);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  border: 1px solid var(--surface-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.08); /* More subtle shadow */
}

/* Accents per Project (Border Left) */
.project-card::before {
  content: "";
  position: absolute;
  top: 0; bottom: 0;
  left: 0; width: 6px;
  background: var(--accent);
}

.server { --accent: #6366f1; }  /* Indigo */
.web { --accent: #0ea5e9; }     /* Sky */
.larosee { --accent: #f43f5e; } /* Rose */
.tiki { --accent: #22c55e; }    /* Green */

/* Header Area */
.project-head {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--surface-border);
}

.icon-box {
  width: 64px;
  height: 64px;
  background: color-mix(in srgb, var(--accent) 8%, transparent);
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
}
.icon-box i { font-size: 2rem; }

.head-content {
  flex: 1;
}
.project-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}
.project-tags {
  display: flex; gap: 0.5rem; flex-wrap: wrap;
}

/* Body Content */
.summary-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-color-secondary);
  margin-bottom: 2.5rem;
  max-width: 900px;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 1.5rem;
}
.mt-4 { margin-top: 2.5rem; }
.full-width { grid-column: span 2; }

@media (max-width: 850px) {
  .details-grid { grid-template-columns: 1fr; gap: 2rem; }
  .full-width { grid-column: span 1; }
  .project-card { padding: 1.5rem; }
}

.col-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  display: flex; align-items: center; gap: 0.6rem;
  color: var(--text-color);
}
.col-title i { opacity: 0.8; color: var(--accent); font-size: 1.1rem; }

.clean-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.clean-list li {
  position: relative;
  padding-left: 1.4rem;
  margin-bottom: 0.6rem;
  font-size: 1rem;
  color: var(--text-color-secondary);
  line-height: 1.6;
}
.clean-list li::before {
  content: "•";
  position: absolute; left: 0; top: 0;
  color: var(--accent);
  font-weight: 900;
  font-size: 1.2rem;
  line-height: 1.6;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.clean-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--primary-600);
  font-weight: 600;
  transition: color 0.2s;
  font-size: 1rem;
}
.clean-link:hover {
  color: var(--primary-800);
  text-decoration: underline;
}

/* Tech Stack Section */
.tech-stack-section {
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px dashed var(--surface-border);
}
.stack-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--text-color-secondary);
  margin-bottom: 1rem;
  opacity: 0.7;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

/* Individual Tech Item Styling */
.tech-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.1rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  background: var(--surface-0);
  border: 1px solid var(--surface-border);
  color: var(--text-color);
  transition: all 0.2s ease;
  cursor: default;
}

.tech-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-color: var(--item-color);
  background: var(--surface-0);
}
.tech-item i {
  color: var(--item-color);
  font-size: 1.1rem;
}

/* Tech Colors Mapping */

/* Tech Item Colors */
.ts { --item-color: #3178c6; }
.node { --item-color: #339933; }
.fastify { --item-color: var(--text-color); }
.socket { --item-color: var(--text-color); }
.gql { --item-color: #e10098; }
.docker { --item-color: #2496ed; }

.vue { --item-color: #42b883; }
.vite { --item-color: #646cff; }
.tailwind { --item-color: #06b6d4; }
.seo { --item-color: #f59e0b; }

.flutter { --item-color: #02569b; }
.python { --item-color: #3776ab; }
.aws { --item-color: #ff9900; }
.base { --item-color: #336791; }
.ai { --item-color: #4285f4; }
.dart { --item-color: #0175c2; }

/* Dark Mode Adjustments */
@media (prefers-color-scheme: dark) {
  .project-card {
    background: var(--surface-card);
    border-color: var(--surface-border);
  }
  .tech-item {
    background: var(--surface-ground);
    border-color: var(--surface-border);
  }
  .fastify, .socket { --item-color: #ffffff; }
}
</style>
