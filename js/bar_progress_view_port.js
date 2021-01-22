
const isOutOfViewport = function (elem) {
  // Get element's bounding
  const bounding = elem.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  const out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom =
    bounding.bottom >
    (window.innerHeight || document.documentElement.clientHeight);
  out.right =
    bounding.right >
    (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;

  return out;
};

const elem = document.querySelector("#skills");
const logViewport = function () {
  const isOut = isOutOfViewport(elem);
  if (isOut.any) {
    elem.classList.remove("animation-progress");
  } else {
    elem.classList.add("animation-progress");
  }
};

logViewport();
window.addEventListener("scroll", logViewport, false);

