const links = document.querySelectorAll(".active-nav");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("highlight-nav"));
  links[index].classList.add("highlight-nav");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);
