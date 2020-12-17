import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
// import emui from '../modules/em-ui'
// app.use(emui)

import { EmButton } from '../modules/em-ui'
app.use(EmButton)

app.use(store).use(router).mount('#app')
