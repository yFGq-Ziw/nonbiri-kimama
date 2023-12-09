// Intersection Observer
$(document).ready(function() {
  const $slider = $('.slider');
  $slider.each(function(index, slider) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          slider.classList.add('animate__animated', 'animate__zoomInRight');
          observer.unobserve(slider);
        }
      });
    }, { threshold: [0, .5] });
    observer.observe(slider);
  });
});

// GSAP Slider
(function($) {
  $(document)
    .ready(function() {
      var s = $('.slider'),
        sWrapper = s.find('.slider-wrapper'),
        sItem = s.find('.slide'),
        btn = s.find('.slider-link'),
        sWidth = sItem.width(),
        sCount = sItem.length,
        slide_date = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text = s.find('.slide-text'),
        slide_more = s.find('.slide-more'),
        slide_image = s.find('.slide-image'),
        sTotalWidth = sCount * sWidth;
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      var clickCount = 0;
      btn.on('click', function(e) {
        e.preventDefault();
        if ($(this)
          .hasClass('next')) {
          (clickCount < (sCount - 1)) ? clickCount++ : clickCount =
            0;
        } else if ($(this)
          .hasClass('prev')) {
          (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
        }
        TweenMax.to(sWrapper, .4, {
          x: '-' + (sWidth * clickCount)
        })
        var fromProperties = {
          autoAlpha: 0,
          x: '-50',
          y: '-10'
        };
        var toProperties = {
          autoAlpha: .8,
          x: '0',
          y: '0'
        };
        TweenLite.fromTo(slide_image, 1, {
          autoAlpha: 0,
          y: '40'
        }, {
          autoAlpha: 1,
          y: '0'
        });
        TweenLite.fromTo(slide_date, .4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, .6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, .8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
      });
    });
})(jQuery);
