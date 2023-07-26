/**
 * スムーススクロールを実行するクラス
 * @see https://www.to-r.net/media/smooth_scrolling_2019/
 */

// モダンブラウザ用のポリフィル
import smoothscroll from 'smoothscroll-polyfill';

export default class SmoothScroll {
  constructor(_parm) {
    // スムーススクロールの対象となる要素
    this.arrayElmLinks = [...document.querySelectorAll(_parm.targets)];
    // 固定ヘッダーの場合はヘッダー要素を指定することで、ヘッダーの高さ分スクロール位置をずらす
    this.elmFixHeader = document.querySelector(_parm.fixHeader) || false;
    this.addGap = _parm.addGap || 0;
  }

  /**
   * 任意の位置までスクロールする
   * @param {EventObject} event イベントオブジェクト
   */
  scroll(_elmLink) {
    smoothscroll.polyfill();
    const elmTarget = document.querySelector(_elmLink.getAttribute('href'));
    const targetOffset = elmTarget.getBoundingClientRect().top;
    const nowOffset = window.pageYOffset;
    const gap = this.elmFixHeader ? this.elmFixHeader.clientHeight : 0;
    const finishOffset = targetOffset + nowOffset - gap - this.addGap;
    window.scrollTo({
      top: finishOffset,
      behavior: 'smooth',
    });
  }

  /**
   * スムーススクロールの対象となる要素にイベント付与
   */
  addEvent() {
    this.arrayElmLinks.forEach((_elmLink) => {
      _elmLink.addEventListener('click', (ev) => {
        ev.preventDefault();
        this.scroll(_elmLink);
      });
    });
  }

  init() {
    if (!this.arrayElmLinks.length) return;
    this.addEvent();
  }
}
