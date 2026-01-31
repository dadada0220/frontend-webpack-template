// Funtion
import adjustViewport from './function/adjustViewport'
import debounce from './function/debounce';

// Module
import SmoothScroll from './module/SmoothScroll';

const init = () => {

  (() => {
    const smoothScroll = new SmoothScroll({
      targets: 'a[href^="#"]',
      fixHeader: '#js-header',
    });
    smoothScroll.init();
  })();

  (() => {
    const debouncedFunction = debounce(() => {
      adjustViewport();
    });
    window.addEventListener('resize', debouncedFunction, false);
    adjustViewport();
  })();

};

window.addEventListener('DOMContentLoaded', () => {
  init();
});