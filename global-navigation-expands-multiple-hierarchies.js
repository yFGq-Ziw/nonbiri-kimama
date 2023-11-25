$(document).ready(function() {
  var prevDisplayState = 'none'; // 前の状態でのdisplayを記録

  $('.openbtn1').click(function() {
    if ($('#g-navi').is(':hidden')) {
      // '#g-navi' の高さを0からautoに変更
      $('#g-navi').css('height', 'auto');
      // '#g-navi' をスライドダウンで表示する
      $('#g-navi').slideDown();
      $('#g-navi').css('display', 'block');
      $(this).toggleClass('active');
      prevDisplayState = 'block';
    } else {
      // '#g-navi' が表示されている場合
      // '#g-navi' をスライドアップで非表示にする（アニメーション付き）
      $('#g-navi').slideUp('slow');
      // '.openbtn1' から 'active' クラスを削除する
      $(".openbtn1").removeClass('active');
      // スライドアップ時に高さを0に変更
      $('#g-navi').css('height', 0);
      prevDisplayState = 'none';
    }
  });

  var beforePos = 0;

  function ScrollAnime() {
    var scroll = $(window).scrollTop();

    if ($(window).width() > 767) {
      if (scroll == beforePos) {} else if (100 > scroll || 0 > scroll - beforePos) {
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

  // 最初にも一度実行
  mediaQueriesWin();
  applyResponsiveStyles();
});
