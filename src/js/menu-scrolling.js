isVisible = (el) =>  {

  let target          = document.getElementById(el),
      targetBoundary  = target.getBoundingClientRect(),
      top             = targetBoundary.top,
      bottom          = targetBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}

let blocksAmount = document.getElementsByClassName('blocks-js').length;


window.addEventListener("scroll", () => {
  for (let i=0; i<blocksAmount; i++) {
    if (isVisible(`block${i+1}`)) {

      activeMenuItem = document.getElementsByClassName("menu__item--active");
      activeMenuItem[0].classList.remove("menu__item--active");
      
      document.getElementById(`anchor${i+1}`).classList.add("menu__item--active");
    } else {
      continue
    }
  }
})
