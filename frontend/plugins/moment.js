const moment = require('moment');
require('moment/locale/hu');

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(require('vue-moment'), { moment })
})
