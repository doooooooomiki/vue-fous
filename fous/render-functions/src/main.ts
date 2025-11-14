import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { plugin as formkitPlugin, defaultConfig as formkitDefaultConfig } from '@formkit/vue'
import formkitConfig from '@/formkit/formkit.config'

const app = createApp(App)
app.use(PrimeVue)
app.use(formkitPlugin, formkitDefaultConfig(formkitConfig))
app.mount('#app')
