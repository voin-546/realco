AOS.init({
  duration: 1200
})
let dropBtn = document.querySelector(".dropbtn");
var dropdown = document.querySelector(".dropdown");
dropBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
})
document.addEventListener("click", (e) => {
  const click = e.composedPath().includes(dropdown);
  if (!click) {
    dropdown.classList.remove("show");
  }
})
header = document.querySelector("header");
burger = document.querySelector(".burger");
burger.onclick = function () {
    header.classList.toggle("show")
}
close = document.querySelector(".close");
dream = document.querySelector(".dream");
close.addEventListener("click", () => {
    header.style.top = "0";
    setTimeout(() => {
        dream.remove();
    }, 300)
})
let backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    backToTop.classList.remove("scrolled");
  } 
  else {
    backToTop.classList.add("scrolled");
  }
})