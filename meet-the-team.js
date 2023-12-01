document.addEventListener( 'DOMContentLoaded', function() {
  /** animate.cssアニメーション */
  // ターゲットの定義
  const targetElements = document.querySelectorAll( "#Meet-The-Team, .about-tiles" );
  const observer = new IntersectionObserver( ( entries, observer ) => {
    // {}内をループ
    entries.forEach( entry => {
      // 要素がビューポートに入った時 & 閾値を指定
      if ( entry.isIntersecting || entry.intersectionRatio >= 0.9 ) {
        if ( entry.target.matches( "img.post-thumb.lazy-yard" ) ) {
          entry.target.classList.add( 'animate__animated', 'animate__rubberBand' );
        }
        // 指定の条件に合致する場合に指定のターゲット要素にクラスを追加
        if ( entry.target.classList.contains( 'about-tiles' ) ) {
          var targetElements4 = document.querySelectorAll( ".about-tiles:nth-child(2)" );
          targetElements4.forEach( function( element ) {
            element.classList.add( 'animate__animated', 'animate__slideInLeft' );
          } );
          var targetElements3 = document.querySelectorAll( ".about-tiles:nth-child(3)" );
          targetElements3.forEach( function( element ) {
            element.classList.add( 'animate__animated', 'animate__fadeInUp', 'animate__delay-1s' );
          } );
          var targetElements3 = document.querySelectorAll( ".about-tiles:nth-child(4)" );
          targetElements3.forEach( function( element ) {
            element.classList.add( 'animate__animated', 'animate__slideInRight' );
          } );
        }
        // Intersection Observerの監視を解除
        observer.unobserve( entry.target );
      }
    } );
  }, {
    threshold: [ 0, 0.5 ]
  } );
  // 要素を監視
  targetElements.forEach( element => {
    observer.observe( element );
  } );
} );
