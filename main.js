// create elements in container
let container = document.querySelector(".container");
const myCorrectWords = [
  "map",
  "translate",
  "drive",
  "chrome",
  "photos",
  "gmail",
  "traduction",
];

for (let i = 0; i < myCorrectWords.length; i++) {
  container.innerHTML += `
  <div>
    <i class="fa-solid fa-magnifying-glass searchIcon"></i>
    <span class="words">...</span>
    <span class="correct">${myCorrectWords[i]}</span>
  </div>
  `;
}
//=====================================================================
// create question and suggestions
let question = document.querySelector(".question");
// question
question.innerHTML = "The top search in google ?";

let theWord = document.getElementById("theMainWord");
let theWords = document.querySelectorAll(".words");

// suggestion
theWord.innerHTML = "google";
theWords.forEach((w) => {
  w.innerHTML = theWord.innerHTML;
});

//================================================================
// game rules
let input = document.getElementById("search");
let delButton = document.getElementById("del");
let corrs = document.querySelectorAll(".correct");
const audio = new Audio();
audio.src = "./win.mp3";

input.oninput = function () {
  if (input.value.length != 0) {
    delButton.style.display = "inline";
  } else {
    delButton.style.display = "none";
  }
  check();
};

delButton.onclick = function () {
  input.value = "";
  delButton.style.display = "none";
};

function check() {
  corrs.forEach((corr) => {
    if (
      corr.innerHTML === input.value.toLowerCase() &&
      corr.className !== "done"
    ) {
      corr.className = "done";
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      input.value = "";
      delButton.style.display = "none";
    }
  });
}

//===================================================

// theme mode

let btn = document.querySelector(".mode");
let span = document.querySelector(".mode span");

let store = document.querySelector(":root");
var root = getComputedStyle(store);

btn.onclick = function () {
  if (span.className === "dark") {
    span.className = "light";
    light();
  } else {
    span.className = "dark";
    dark();
  }
};

const dark = function () {
  store.style.setProperty("--bgColor-main", "#202124");
  store.style.setProperty("--bgColor", "#303134");
  store.style.setProperty("--txtColor", "#fff");
  store.style.setProperty("--hover", "#3c4043");
  store.style.setProperty("--bar", "#5f6368");
};

const light = function () {
  store.style.setProperty("--bgColor-main", "#fff");
  store.style.setProperty("--bgColor", "#fff");
  store.style.setProperty("--txtColor", "#212121");
  store.style.setProperty("--hover", "transparent");
  store.style.setProperty("--bar", "#dadce0");
};
