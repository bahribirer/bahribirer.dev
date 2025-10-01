import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/pages/Home.vue') },
  { path: '/about', name: 'about', component: () => import('@/pages/About.vue') },
  { path: '/skills', name: 'skills', component: () => import('@/pages/Skills.vue') },
  { path: '/experience', name: 'experience', component: () => import('@/pages/Experience.vue') },
  { path: '/projects', name: 'projects', component: () => import('@/pages/Projects.vue') },
  { path: '/certificates', name: 'certificates', component: () => import('@/pages/Certificates.vue') },
  { path: '/contact', name: 'contact', component: () => import('@/pages/Contact.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})
