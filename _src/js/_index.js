// Funtion
import adjustViewport from './function/adjustViewport'

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

};

window.addEventListener('DOMContentLoaded', () => {
  adjustViewport();
  init();
});