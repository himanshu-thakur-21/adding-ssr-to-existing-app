import createApp from './main'

const { app, router } = await createApp()

router.isReady().then(() => {
  app.mount('#app');
})
