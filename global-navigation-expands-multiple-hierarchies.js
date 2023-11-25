$(document).ready(function() {
  var prevDisplayState = 'none'; // メニューのdisplay状態を'none'に設定（スマホ用）

  $('.openbtn1').click(function() {
    if ($('#g-navi').is(':hidden')) {
    
      $('#g-navi').css('height', 'auto');  // '#g-navi'の高さを0からautoに変更
      $('#g-navi').slideDown();  // '#g-navi'をスライドダウンで表示する
      $('#g-navi').css('display', 'block');
      $(this).toggleClass('active');
      prevDisplayState = 'block'; // メニューのdisplay状態を'block'に設定（スマホ用）
    }
    else {  // '#g-navi'が表示されている場合
    
      $('#g-navi').slideUp('slow');  // '#g-navi'をスライドアップで非表示にする（アニメーション付き）
      $(".openbtn1").removeClass('active');  // '.openbtn1'から'active'クラスを削除する
      $('#g-navi').css('height', 0);  // スライドアップ時に高さを0に変更
      prevDisplayState = 'none'; // メニューのdisplay状態を'none'に設定（スマホ用）
    }
  });

  var beforePos = 0;

  function ScrollAnime() {
    var scroll = $(window).scrollTop();

    if ($(window).width() > 767) { // デスクトップ画面の時
      if (scroll == beforePos) {} else if (100 > scroll || 0 > scroll - beforePos) { // スクロールが100より小さいか、前回のスクロール位置から下向きにスクロールしている場合
        $('#header').removeClass('UpMove');
        $('#header').addClass('DownMove');
      } else {
        $('#header').removeClass('DownMove');
        $('#header').addClass('UpMove');
      }
      beforePos = scroll;
    }
  }

  $(window).scroll(function() {
    ScrollAnime();
  });

  $(window).on('load', function() {
    ScrollAnime();
  });

  // ドロップダウンの設定を関数でまとめる
  function mediaQueriesWin() {
    var width = $(window).width();
    if (width <= 768) {
      $(".has-child>a").off('click');
      $(".has-child>a").on('click', function() {
        var parentElem = $(this).parent();
        $(parentElem).toggleClass('active');
        $(parentElem).children('ul').stop().slideToggle(500);
        return false;
      });
    } else {
      $(".has-child>a").off('click');
      $(".has-child").removeClass('active');
      $('.has-child').children('ul').css("display", "");
    }
  }

  // ページがリサイズされたら動かしたい場合の記述
  $(window).resize(function() {
    mediaQueriesWin();
    applyResponsiveStyles();
  });

  // レスポンシブなスタイルを適用する関数
  function applyResponsiveStyles() {
    var width = $(window).width();
    if (width <= 768) {
      $('#g-navi').css('display', prevDisplayState);
    } else {
      $('#g-navi').css('display', 'flex');
    }
  }

  // 初期状態を正しく設定
  mediaQueriesWin();
  applyResponsiveStyles();
});
