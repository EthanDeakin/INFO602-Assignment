//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHouse);

const app = createApp(App)

app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')

