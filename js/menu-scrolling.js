let blockId = ["block1","block2","block3","block4"];
let anchorId = ["anchor1","anchor2","anchor3","anchor4"];

isVisible = (el) =>  {

  let target = document.getElementById(`${el}`),
      targetBoundary = target.getBoundingClientRect();

  return ((targetBoundary.top >= 0) && (targetBoundary.bottom <= window.innerHeight));
}

window.addEventListener("scroll", () => {
  for (let i=0; i<blockId.length; i++) {
    if (isVisible(`block${i+1}`)) {
      let activeMenuItem = document.getElementsByClassName("menu__item--active"),
          activeMenuItemId = activeMenuItem[0].id,
          newActiveMenuItem = document.getElementById(`anchor${i+1}`);

      document.getElementById(activeMenuItemId).classList.remove("menu__item--active");
      document.getElementById(`anchor${i+1}`).classList.add("menu__item--active");
    } else {
      continue
    }
  }
})
