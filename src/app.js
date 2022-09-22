/* eslint-disable */
import "bootstrap";
import "./style.css";

function generarteValue() {
  let numberList = [
    "K",
    "Q",
    "J",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  let valueNumber = Math.floor(Math.random() * numberList.length);
  return valueNumber;
}
function generarteSuit() {
  let suitList = ["	&#9824;", "	&#9829;", "	&#9827;", "&#9830;"];
  let suitType = Math.floor(Math.random() * suitList.length);
  return suitType;
}
