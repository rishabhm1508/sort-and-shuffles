"use strict";

const cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorCodes = ["#2B8EAD", "#6F98A8", "#BFBFBF", "#2F454E"];
let isShuffle = false;
let cardNumbersToShuffle = [];

function generateCards(cardNumbers) {
  let cardContainer = document.getElementById(
    screen.width > 449 ? "cardContainer" : "mobileCardContainer"
  );
  cardContainer.innerHTML = "";
  //if (screen.width > 449) {

  //   } else {

  //   }

  for (let i = 0; i < cardNumbers.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.id = `card_${i}`;
    cardDiv.innerText = +cardNumbers[i];
    cardDiv.classList.add("card");
    cardDiv.classList.add("col-d-4");
    if (screen.width > 449) {
      cardDiv.style.backgroundColor = getColor(+cardNumbers[i] - 1);
    } else {
      cardDiv.style.backgroundImage = `linear-gradient(90deg, ${getColor(
        +cardNumbers[i] - 1
      )} 2%, #EFEFEF 0%)`;
    }
    cardContainer.appendChild(cardDiv);
  }
}

function getColor(cardNumber) {
  if ([1, 3].includes(cardNumber)) {
    return colorCodes[0];
  } else if ([2, 4, 8].includes(cardNumber)) {
    return colorCodes[3];
  } else if ([5, 6].includes(cardNumber)) {
    return colorCodes[2];
  } else {
    return colorCodes[1];
  }
}

function shuffle() {
  cardNumbersToShuffle = [];
  while (cardNumbersToShuffle.length < cardNumbers.length) {
    let r = Math.floor(Math.random() * 10) + 1;
    if (cardNumbersToShuffle.indexOf(r) === -1 && r !== 10)
      cardNumbersToShuffle.push(r);
  }
  generateCards(cardNumbersToShuffle);
  isShuffle = true;
}

function sort() {
  generateCards(cardNumbers);
  isShuffle = false;
}

function main() {
  isShuffle ? generateCards(cardNumbersToShuffle) : generateCards(cardNumbers);
}
