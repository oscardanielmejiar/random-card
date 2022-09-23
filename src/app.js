/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  randomSuit();
};

let numarray = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let suitArr = ["&#9829;", "&#9830;", "&#9824;", "&#9827;"];

function getValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cardNumber = document.querySelector(".card-value");
let topSuit = document.querySelector(".top-suit");
let bottomSuit = document.querySelector(".bottom-suit");
cardNumber.innerHTML = numarray[getValue(0, numarray.length - 1)];

function randomSuit() {
  let suit = suitArr[getValue(0, suitArr.length - 1)];
  topSuit.innerHTML = suit;
  bottomSuit.innerHTML = suit;
}
