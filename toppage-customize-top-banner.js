$(document).ready(function() {
  const $banners = $('.top-banner4, .top-banner4.hai, .top-banner3, .top-banner2');
  $banners.each(function(index, banner) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          banner.classList.add('animate__animated', 'animate__bounceIn');
          if (banner.classList.contains('top-banner4')) {
            banner.classList.add('animate__bounceInLeft');
          } else {
            banner.classList.add('animate__bounceInRight');
          }
          observer.unobserve(banner);
        }
      });
    }, { threshold: [0, .5] });
    observer.observe(banner);
  });
});
