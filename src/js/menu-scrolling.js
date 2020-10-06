isVisible = (el) =>  {
  console.log(el);
  let elementBoundary = el.getBoundingClientRect;

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}

window.addEventListener("scroll", () => {
  for (let i=0; i<blockId.length; i++) {
    if (isVisible(`block${i}`)) {
      console.log(i)
      document.getElementsByClassName("anchor-js").classList.remove(".menu__item--active");
      document.getElementById("anchor"+i).classList.add(".menu__item--active");
    } else {
      continue
    }
  }
})
