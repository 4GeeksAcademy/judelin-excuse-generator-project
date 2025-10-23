import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car', 'the tv'];
let when = [
  'before the class', 'when I was sleeping',
  'while I was exercising', 'during my lunch', 'while I was praying'
];

function getRandomAleatorio(allArray) {
  let random = Math.floor(Math.random() * allArray.length);
  return allArray[random]
}

window.onload = function () {
  //write your code here
  document.querySelector("#excuse").innerHTML = getRandomAleatorio(who)
    + " " + getRandomAleatorio(action) + " " + getRandomAleatorio(what)
    + " " + getRandomAleatorio(when);


};
