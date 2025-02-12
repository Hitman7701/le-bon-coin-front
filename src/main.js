import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

// Import de FontAwesome Core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import du composant vue-fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icône
import {
  faPlusSquare,
  faHeart,
  faClock,
  faUser,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-regular-svg-icons'

import {
  faCheckDouble,
  faMapMarkerAlt,
  faCircle,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'

// Ajout de l'icône à la bibliothèque
library.add(
  faSignOutAlt,
  faArrowRight,
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
  faEyeSlash,
  faEye,
)

const userToken = ref('')

const changeToken = (token) => {
  userToken.value = token
}

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.provide('GlobalStore', { userToken: userToken, changeToken: changeToken })

app.mount('#app')
