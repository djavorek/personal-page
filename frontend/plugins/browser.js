import Vue from 'vue';
import _throttle from 'lodash/throttle';
import {
  resizeHandler,
  mutationHandler,
  addObserverIfNavBarAvailable,
} from '~/plugins/dom-handlers';
import Intersect from '~/directives/intersect';

// plugin
export default ({ store, route }, inject) => {
  require('intersection-observer');
  require('string.prototype.includes');

  Vue.directive('intersect', Intersect);

  // setup dom listeners
  // ~16ms is 60fps
  window.addEventListener(
    'resize',
    _throttle(() => resizeHandler(store), 16)
  );

  // setup navigation mutation observer
  // @link: https://stackoverflow.com/questions/40398054/observe-on-mutationobserver-parameter-1-is-not-of-type-node

  const mutObserver = new MutationObserver(mCallback);

  function mCallback(mutations) {
    for (const mutation of mutations) {
      mutationHandler(store, mutation);
    }
  }

  // start
  resizeHandler(store);
  addObserverIfNavBarAvailable(mutObserver);
};
