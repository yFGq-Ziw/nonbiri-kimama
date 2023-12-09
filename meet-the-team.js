$(document).ready(function () {
  const $elements = $('.top-banner1, .about-tiles');
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Meet The Team
        if (entry.target.classList.contains('about-tiles')) {
          entry.target.classList.add('animate__animated');
          if ($(entry.target).is(':nth-child(1)')) {
            entry.target.classList.add('animate__slideInLeft');
          } else if ($(entry.target).is(':nth-child(2)')) {
            entry.target.classList.add('animate__fadeInUp');
          } else if ($(entry.target).is(':nth-child(3)')) {
            entry.target.classList.add('animate__slideInRight');
          }
        // Main Category, Contact
        } else {
          entry.target.classList.add('animate__animated', 'animate__bounceInLeft');
        }
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, {
    threshold: [0, .5], // Corrected threshold value
  });
  $elements.each((index, element) => observer.observe(element));
});
