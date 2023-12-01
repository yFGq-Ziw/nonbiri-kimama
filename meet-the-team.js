document.addEventListener("DOMContentLoaded", function() {
  let e = document.querySelectorAll(".about-tiles"),
    t = (e, t) => {
      e.forEach(e => {
        var a;
        e.isIntersecting && (a = e.target, document.querySelectorAll(".about-tiles:nth-child(2)").forEach(function(e) {
          e.classList.add("animate__animated", "animate__slideInLeft")
        }), document.querySelectorAll(".about-tiles:nth-child(3)").forEach(function(e) {
          e.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-1s")
        }), document.querySelectorAll(".about-tiles:nth-child(4)").forEach(function(e) {
          e.classList.add("animate__animated", "animate__slideInRight")
        }), t.unobserve(e.target))
      })
    },
    a = new IntersectionObserver(t, {
      threshold: [0, .5]
    });
  e.forEach(e => {
    a.observe(e)
  })
});
