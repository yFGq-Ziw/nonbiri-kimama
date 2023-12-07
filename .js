$(document).ready(function() {
  const $postgriditem = $('.post-grid-item');
  $postgriditem.each(function(index, postgriditem) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          postgriditem.classList.add('animate__animated', 'animate__flipInX');
          observer.unobserve(postgriditem);
        }
      });
    }, { threshold: [0, .5] });
    observer.observe(postgriditem);
  });
});
