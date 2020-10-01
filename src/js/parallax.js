const parallax = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;

  parallax.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });


})
