let btn = document.querySelectorAll(".btn");
let absText = document.querySelectorAll(".abs-text");

function openAbstract(n) {
  absText[n].classList.toggle("show");
  btn[n].classList.toggle("minus");
}
