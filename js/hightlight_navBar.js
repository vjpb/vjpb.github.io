const links = document.querySelectorAll(".link-nav");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {
    
  }
  links.forEach((link) => link.classList.remove("highlight-nav"));
  links[index].classList.add("highlight-nav");
}

window.addEventListener("scroll", changeLinkState);
