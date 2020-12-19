import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
// import emui from '../modules/em-ui'
// app.use(emui)

import { EmButton, EmCell, EmCellGroup } from '../modules/em-ui'
app.use(EmButton).use(EmCell).use(EmCellGroup)

app.use(store).use(router).mount('#app')
