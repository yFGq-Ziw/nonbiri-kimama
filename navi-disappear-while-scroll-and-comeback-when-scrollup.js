$( document )
  .ready( function() {
    $( '.openbtn1' )
      .click( function() {
        if ( $( '#g-navi' )
          .is( ':hidden' ) ) {
          // '#g-navi' の高さを0からautoに変更
          $( '#g-navi' )
            .css( 'height', '45px' );
          // '#g-navi' をスライドダウンで表示する
          $( '#g-navi' )
            .slideDown();
          $( '#g-navi' )
            .css( 'display', 'flex' );
          $( this )
            .toggleClass( 'active' );
        } else {
          // '#g-navi' が表示されている場合
          // '#g-navi' をスライドアップで非表示にする（アニメーション付き）
          $( '#g-navi' )
            .slideUp( 'slow' ); // 'slow'はアニメーションの速度を指定する例です。他にも'fast'やミリ秒単位の数値も指定可能です。
          // '.openbtn1' から 'active' クラスを削除する
          $( ".openbtn1" )
            .removeClass( 'active' );
          // スライドアップ時に高さを0に変更
          $( '#g-navi' )
            .css( 'height', 0 );
        }
      } );
  } );
var beforePos = 0;

function ScrollAnime() {
  var scroll = $( window )
    .scrollTop();
  // スマートフォン画面の場合はスクリプトを実行しない
  if ( $( window )
    .width() > 767 ) {
    if ( scroll == beforePos ) {} else if ( 1000 > scroll || 0 > scroll - beforePos ) {
      $( '#header' )
        .removeClass( 'UpMove' );
      $( '#header' )
        .addClass( 'DownMove' );
    } else {
      $( '#header' )
        .removeClass( 'DownMove' );
      $( '#header' )
        .addClass( 'UpMove' );
    }
    beforePos = scroll;
  }
}
$( window )
  .scroll( function() {
    ScrollAnime();
  } );
$( window )
  .on( 'load', function() {
    ScrollAnime();
  } );
