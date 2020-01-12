const toggle = document.querySelector(".toggle");
const menuBar = document.querySelector(".nav-bar");

function toggleClicked() {
  const parent = this.parentNode.parentNode;
  this.classList.toggle("active");
  parent.classList.toggle("active-toggle");
}

toggle.addEventListener("click", toggleClicked);
