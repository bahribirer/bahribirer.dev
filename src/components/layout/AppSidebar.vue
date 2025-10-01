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

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['update:open'])
const visible = ref(props.open)

watch(() => props.open, v => visible.value = v)
watch(visible, v => emit('update:open', v))

const items = [
  { label: 'Ana Sayfa', to: { name: 'home' } },
  { label: 'Hakkımda', to: { name: 'about' } },
  { label: 'Yetenekler', to: { name: 'skills' } },
  { label: 'Deneyim', to: { name: 'experience' } },
  { label: 'Projeler', to: { name: 'projects' } },
  { label: 'Sertifikalar', to: { name: 'certificates' } },
  { label: 'İletişim', to: { name: 'contact' } },
]
</script>
