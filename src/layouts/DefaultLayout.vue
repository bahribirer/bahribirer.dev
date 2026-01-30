<template>
  <div class="min-h-screen flex flex-column">
    <AppHeader @toggle-sidebar="sidebarOpen = true" />
    <AppSidebar v-model:open="sidebarOpen" />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const sidebarOpen = ref(false)
</script>
