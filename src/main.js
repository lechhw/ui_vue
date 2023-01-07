import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add({ faArrowRight, faArrowsRotate })

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
