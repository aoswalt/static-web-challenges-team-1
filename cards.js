"use strict";

function buildCard(text) {
  return "" +
    "<div class='card'>" +
      "<input type='color' class='bg-color'>" +
      "<input type='color' class='fg-color'>" +
      "<input type='button' class='delete-button' value='Delete'>" +
      `<p>${text}</p>` +
    "</div>";
}

function addCard(text) {
  var cardWrapper = document.getElementById("card-wrapper");
  cardWrapper.innerHTML += buildCard(text);

  var card = cardWrapper.children[cardWrapper.children.length - 1];
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
