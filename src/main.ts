import './assets/main.css'

import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createRouter } from './router'

export default async function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  const router = createRouter()

  app.use(pinia)
  app.use(router)

  return { app, router, pinia }
}
