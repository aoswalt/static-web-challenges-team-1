"use strict";

function buildCard(text) {
  return "" +
    "<input type='color' class='bg-color'>" +
    "<input type='color' class='fg-color'>" +
    "<input type='button' class='delete-button' value='Delete'>" +
    `<p>${text}</p>`;
}

function addCard(text) {
  var cardWrapper = document.getElementById("card-wrapper");
  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML += buildCard(text);
  cardWrapper.appendChild(card);

  card.getElementsByClassName("bg-color")[0].onchange = setBgColor;
  card.getElementsByClassName("fg-color")[0].onchange = setFgColor;
  card.getElementsByClassName("delete-button")[0].onclick = deleteCard;
}

function setBgColor(event) {
  //NOTE(adam): change event for color picker
  event.srcElement.parentElement.style.backgroundColor = event.srcElement.value;
}

function setFgColor(event) {
  //NOTE(adam): change event for color picker
  event.srcElement.parentElement.style.color = event.srcElement.value;
}

function deleteCard(event) {
  var cardContainer = document.getElementById("card-wrapper");
  var card = event.srcElement.parentElement;
  cardContainer.removeChild(card);
}

document.getElementById("create-button").onclick = function() {
  var textArea = document.getElementById("card-text");
  addCard(textArea.value);
  textArea.value = "";
};
