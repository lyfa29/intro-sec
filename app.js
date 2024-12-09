let homeScore = document.querySelector(".left-side h3");
let guestScore = document.querySelector(".right-side h3");

let homeButtons = [...document.querySelectorAll(".left-side button")];
let guestButtons = [...document.querySelectorAll(".right-side button")];

let newGame = document.querySelector(".new-game");

let homeNumber = 0;
let guestNumber = 0;

homeButtons[0].addEventListener("click", () => {
  homeNumber++;
  homeScore.textContent = homeNumber;
});

homeButtons[1].addEventListener("click", () => {
  homeNumber += 2;
  homeScore.textContent = homeNumber;
});

homeButtons[2].addEventListener("click", () => {
  homeNumber += 3;
  homeScore.textContent = homeNumber;
});

// =============================

guestButtons[0].addEventListener("click", () => {
  guestNumber++;
  guestScore.textContent = guestNumber;
});

guestButtons[1].addEventListener("click", () => {
  guestNumber += 2;
  guestScore.textContent = guestNumber;
});

guestButtons[2].addEventListener("click", () => {
  guestNumber += 3;
  guestScore.textContent = guestNumber;
});

// ===========================

newGame.addEventListener("click", () => {
  homeNumber = 0;
  guestNumber = 0;

  homeScore.textContent = homeNumber;
  guestScore.textContent = guestNumber;
});
