import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

// PrimeVue Theme Preset
import Lara from '@primevue/themes/lara'

import '@/assets/styles/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Lara,  // Tema burada seçiliyor
  },
})

app.use(ToastService)
app.use(ConfirmationService)

app.mount('#app')
