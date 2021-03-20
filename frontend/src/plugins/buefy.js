import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
  customIconPacks: {
    fas: {
      sizes: {
        default: "lg",
        "is-small": "2x",
        "is-medium": "10x",
        "is-large": "10x"
      },
      iconPrefix: ""
    }
  }
});