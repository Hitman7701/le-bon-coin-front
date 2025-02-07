import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import de FontAwesome Core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import du composant vue-fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icône
import { faPlusSquare, faHeart, faClock, faUser } from '@fortawesome/free-regular-svg-icons'

import {
  faCheckDouble,
  faMapMarkerAlt,
  faCircle,
  faSearch,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

// Ajout de l'icône à la bibliothèque
library.add(
  faPlusSquare,
  faHeart,
  faCheckDouble,
  faClock,
  faMapMarkerAlt,
  faUser,
  faCircle,
  faSearch,
  faAngleLeft,
  faAngleRight,
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
