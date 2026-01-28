<template>
  <Sidebar v-model:visible="visible" position="left" :dismissable="true" class="w-18rem">
    <ul class="list-none p-0 m-0 flex flex-column gap-2">
      <li v-for="item in items" :key="item.label">
        <RouterLink :to="item.to" class="p-2 block" @click="visible=false">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </Sidebar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Sidebar from 'primevue/sidebar'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['update:open'])
const visible = ref(props.open)
const { t } = useI18n()

watch(() => props.open, v => visible.value = v)
watch(visible, v => emit('update:open', v))

const items = computed(() => [
  { label: t('nav.home'), to: { name: 'home' } },
  { label: t('nav.about'), to: { name: 'about' } },
  { label: t('nav.skills'), to: { name: 'skills' } },
  { label: t('nav.experience'), to: { name: 'experience' } },
  { label: t('nav.projects'), to: { name: 'projects' } },
  { label: t('nav.certificates'), to: { name: 'certificates' } },
  { label: t('nav.contact'), to: { name: 'contact' } },
])
</script>
