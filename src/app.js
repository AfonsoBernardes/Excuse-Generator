/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let whoArray = ["The dog", "My grandma", "His turtle", "My bird"];
let actionArray = ["ate", "peed", "crushed", "broke"];
let whatArray = ["my homework", "the keys", "the car"];
let whenArray = [
  "before the class.",
  "right on time.",
  "when I finished.",
  "during my lunch.",
  "while I was praying."
];

window.onload = function() {
  let randomWho = whoArray[Math.floor(Math.random() * whoArray.length)];
  let randomAction =
    actionArray[Math.floor(Math.random() * actionArray.length)];
  let randomWhat = whatArray[Math.floor(Math.random() * whatArray.length)];
  let randomWhen = whenArray[Math.floor(Math.random() * whenArray.length)];

  document.getElementById("excuse").innerHTML =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
};
