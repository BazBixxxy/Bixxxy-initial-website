// Get elements from DOM
const closeButton = document.querySelector(".close-btn");
const menuButton = document.querySelector(".menu-btn");
const backdropElement = document.querySelector(".backdrop");
const asideElement = document.querySelector(".aside-elem");
const menuLinks = [...document.querySelectorAll(".menu-links")];

function closeMenu() {
  backdropElement.style.display = "none";
  asideElement.style.display = "none";
}

// Define event handlers
menuButton.addEventListener("click", () => {
  // backdrop and aside appear
  backdropElement.style.display = "initial";
  asideElement.style.display = "initial";
});

closeButton.addEventListener("click", () => {
  closeMenu();
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    closeMenu();
  });
});
