$(document).ready(function() {
  const $carousel = $('.carousel');
  $carousel.each(function(index, carousel) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          carousel.classList.add('animate__animated', 'animate__zoomInUp');
          observer.unobserve(carousel);
        }
      });
    }, { threshold: [0, .5] });
    observer.observe(carousel);
  });
});
