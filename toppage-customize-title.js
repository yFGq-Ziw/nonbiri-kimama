$(document).ready(function() {
/**タイピング*/
  "use strict";
  var options = {
    strings: ["Blog Customize", "Web Design", "Code Tips", "Idle Talk"],
    typeSpeed: 35, // タイピングの速さ（ミリ秒）
    backSpeed: 35, // バックスペースの速さ（ミリ秒）
    backDelay: 2000, // テキストを全て表示した後、バックスペースが始まるまでの遅延時間（ミリ秒）
    startDelay: 1000, // アニメーションが開始されるまでの遅延時間（ミリ秒）
    loop: true
  };
  var typed = new Typed(".header-logo-desc p", options);
});
