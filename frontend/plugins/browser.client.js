// import { defineNuxtPlugin } from 'nuxt/plugins';

// import _throttle from 'lodash/throttle';
// import {
//   resizeHandler,
//   mutationHandler,
//   addObserverIfNavBarAvailable,
// } from '~/plugins/dom-handlers';

// export default defineNuxtPlugin((nuxtApp) => {
//   require('string.prototype.includes');

//   // setup dom listeners
//   // ~16ms is 60fps
//   window.addEventListener(
//     'resize',
//     _throttle(() => resizeHandler(nuxtApp.vueApp.store), 16)
//   );

//   // setup navigation mutation observer
//   // @link: https://stackoverflow.com/questions/40398054/observe-on-mutationobserver-parameter-1-is-not-of-type-node

//   const mutObserver = new MutationObserver(mCallback);

//   function mCallback(mutations) {
//     // eslint-disable-next-line prefer-const
//     for (let mutation of mutations) {
//       mutationHandler(store, mutation);
//     }
//   }

//   // start
//   resizeHandler(nuxtApp.vueApp.store);
//   addObserverIfNavBarAvailable(mutObserver);
// });
