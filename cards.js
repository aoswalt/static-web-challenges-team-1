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
