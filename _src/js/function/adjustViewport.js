/**
 * 画面幅が任意の値を下回ったら、画面全体の表示比率を縮小する（<meta>のviewportで比率を制御）
 * 実装イメージ: https://liginc.co.jp/451892
 * @param {Number} triggerWindowWidth 表示比率を縮小する時の画面幅
 */
export default (_triggerWindowWidth = 370) => {
  const elmMetaViewport = document.querySelector('meta[name="viewport"]');
  const viewportValue =
    window.outerWidth < _triggerWindowWidth
      ? `width=${_triggerWindowWidth}, user-scalable=no, target-densitydpi=device-dpi`
      : 'width=device-width, initial-scale=1';
  elmMetaViewport.setAttribute('content', viewportValue);
  return;
};
