$(document)
  .ready(function() {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Meet The Team
          $(".about-tiles:nth-child(2)")
            .addClass("animate__animated animate__slideInLeft");
          $(".about-tiles:nth-child(3)")
            .addClass("animate__animated animate__fadeInUp");
          $(".about-tiles:nth-child(4)")
            .addClass("animate__animated animate__slideInRight");
          // Contact
          if (entry.target.id === "Contact") {
            $(".top-banner1.hai")
              .addClass('animate__animated animate__bounceInLeft');
          }
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, .5] // Corrected threshold value
    });
    const elements = $("#Contact, .about-tiles");
    elements.each((index, element) => observer.observe(element));
  });
