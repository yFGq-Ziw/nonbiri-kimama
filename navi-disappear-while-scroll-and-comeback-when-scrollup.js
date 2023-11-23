$(document).ready(function(){
  $(".openbtn1").click(function(){  // トグルボタンがクリックされた時
    // メニューが非表示の場合
    if ($("#g-navi").is(":hidden")) {
      $("#g-navi").css("height", "45px");  // メニューの高さを45pxに設定
      $("#g-navi").slideDown();  // メニューをスライドダウンで表示
      $("#g-navi").css("display", "flex"); // メニューをflexボックスとして表示
      $(this).toggleClass("active");  // トグルボタンにactiveクラスを付与
    // メニューが表示されている場合  
    } else {
      $("#g-navi").slideUp("slow");  // メニューをスライドアップで非表示（アニメーション付き）
      $(".openbtn1").removeClass("active");  // トグルボタンからactiveクラスを削除
      $("#g-navi").css("height", 0);  // スライドアップ時にメニューの高さを0に変更
    }
  });
});

// スクロールアニメーション関数
var beforePos = 0;

function ScrollAnime() {
  var scroll = $(window).scrollTop();

  // スマートフォン画面の場合はスクリプトを実行しない
  if ($(window).width() > 767) {
    if (scroll == beforePos || (1000 > scroll || 0 > scroll - beforePos)) {
      // スクロール位置が変わっていないか、またはスクロールアップしている場合
      $("#header").removeClass("UpMove");
      $("#header").addClass("DownMove");
    } else {
      // スクロールダウンしている場合
      $("#header").removeClass("DownMove");
      $("#header").addClass("UpMove");
    }
    beforePos = scroll;
  }
}

// スクロールイベントにScrollAnime関数をバインド
$(window).scroll(function() {
  ScrollAnime();
});

// ページの読み込み時にもScrollAnime関数を実行
$(window).on("load", function() {
  ScrollAnime();
});
