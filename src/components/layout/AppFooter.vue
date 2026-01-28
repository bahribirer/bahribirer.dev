<template>
  <footer class="surface-0 border-top-1 surface-border p-3 text-center text-600 text-sm">
    © {{ new Date().getFullYear() }} Bahri Birer — {{ t('footer.rights') }}
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
