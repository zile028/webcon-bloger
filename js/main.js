const btnShow = document.querySelector(".btnShow");
const widget = document.getElementById("widget");
btnShow.addEventListener("click", (el) => {
  widget.classList.toggle("showAside");
});
