import { defineNuxtPlugin } from '#app'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // eslint-disable-line import/named
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons'

library.add(faAngleDoubleDown, faLinkedin, faFacebook, faDiscord)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
