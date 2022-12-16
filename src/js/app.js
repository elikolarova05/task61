import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});


window.addEventListener("DOMContentLoaded", () => {
  let hotPrice = document.querySelectorAll(".price");

  for (let i = 0; i < hotPrice.length; i++){
      if(hotPrice[i].classList.contains('hot')){
          hotPrice[i].append("🔥");
      }
  }
});