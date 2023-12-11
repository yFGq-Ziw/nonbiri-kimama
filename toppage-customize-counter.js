$(function() {
  $('.counter-value, .skill-percent').each(function() {
    const target = parseInt($(this).data('target'), 10);
    const animateFn = $(this).hasClass('counter-value') ? animateCounter : animateWidth;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateFn(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: .5
    });
    observer.observe(this);
  });

  function animateWidth(element, target) {
    let currentWidth = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      currentWidth += step;
      $(element).width(`${currentWidth}%`);
      if (currentWidth >= target) {
        clearInterval(interval);
        $(element).width(`${target}%`);
      }
    }, 30);
  }

  function animateCounter(element, target) {
    let currentValue = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      currentValue += step;
      $(element).text(currentValue);
      if (currentValue >= target) {
        clearInterval(interval);
        $(element).text(target);
      }
    }, 30);
  }
});
