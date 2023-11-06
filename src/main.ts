import { createSSRApp } from 'vue'
// 导入pinia实例
import pinia from './stores'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
// 使用pinia
  app.use(pinia)
  return {
    app,
  }
}
