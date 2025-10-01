<template>
  <header class="surface-0 px-3 py-2 border-bottom-1 surface-border flex align-items-center justify-content-between">
    <div class="flex align-items-center gap-2">
      <Button class="md:hidden" text @click="$emit('toggle-sidebar')" icon="pi pi-bars" aria-label="Menu" />
      
    </div>

    <!-- ✅ router ekledik -->
    <Menubar class="hidden md:flex" :model="items" :router="true" />

    <div class="flex align-items-center gap-2">
      <a href="https://github.com/bahribirer" target="_blank" aria-label="GitHub"><i class="pi pi-github"></i></a>
      <a href="https://www.linkedin.com/in/bahri-birer-02256a267/" target="_blank" aria-label="LinkedIn"><i class="pi pi-linkedin"></i></a>
    </div>
  </header>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = [
  { label: 'Ana Sayfa', command: () => router.push({ name: 'home' }) },
  { label: 'Hakkımda', command: () => router.push({ name: 'about' }) },
  { label: 'Yetenekler', command: () => router.push({ name: 'skills' }) },
  { label: 'Deneyim', command: () => router.push({ name: 'experience' }) },
  { label: 'Projeler', command: () => router.push({ name: 'projects' }) },
  { label: 'Sertifikalar', command: () => router.push({ name: 'certificates' }) },
  { label: 'İletişim', command: () => router.push({ name: 'contact' }) },
]
</script>

