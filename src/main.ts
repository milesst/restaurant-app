import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
// import store from './store'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faUserCircle, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping, faUserCircle, faPlus, faMinus)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
// .use(store)
.use(createPinia())
.mount('#app')
