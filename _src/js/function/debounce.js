/**
 * リサイズイベントやスクロールイベントで関数が短時間で何度も呼び出されるのを防ぐ
 * @param {Function} func 遅延実行される関数
 * @param {Number} timeout 遅延時間
 * @see https://www.freecodecamp.org/news/javascript-debounce-example/
 */
export default (func, wait = 100) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}