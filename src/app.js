/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let icons = { "♣️": "black", "♥️": "red", "♦️": "red", "♠️": "black" };
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let keys = Object.keys(icons);

const rand = number => {
  let res = Math.floor(Math.random() * number);
  return res;
};

function generate() {
  let icon = keys[rand(4)];
  let color = icons[icon];
  let number = numbers[rand(13)];

  document.getElementById("card").innerHTML = `
  <div class="icon ${color} top">${icon}</div>
      <div class="center">
        <div class="number">
          ${number}
        </div>
      </div>
      <div class="icon ${color} bottom">${icon}</div>
    `;
}
document.getElementById("generar").addEventListener("click", generate);

window.onload = generate();
window.onload = timer();
window.onload = setInterval(timer, 11000);

function timer() {
  generate();
  var timeleft = 0;
  var downloadTimer = setInterval(function() {
    if (timeleft >= 10) {
      clearInterval(downloadTimer);
    }
    document.getElementById("timer").innerHTML = `${10 - timeleft}`;
    timeleft += 1;
  }, 1000);
}
