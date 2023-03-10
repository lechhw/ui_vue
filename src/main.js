import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import './assets/scss/main.scss';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowsRotate, faFile } from '@fortawesome/free-solid-svg-icons';

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add({ faArrowRight, faArrowsRotate, faFile });

new Vue({
    render: (h) => h(App),
    router,
}).$mount('#app');
