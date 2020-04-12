// Glitch section
let bg = document.getElementById("image-container");
let greyFox = document.querySelector(".grey-fox");
let count = 18;

for (let i = 0; i < count; i++) {
  let glitchBox = document.createElement("div");
  glitchBox.classList.add("box");
  bg.appendChild(glitchBox);
}

// glitch 1
setInterval(() => {
  greyFox.classList.add("transparent");
  greyFox.style.left = "45%";
  setTimeout(() => {
    greyFox.classList.remove("transparent");
    setTimeout(() => {
      greyFox.style.left = "60%";
      setTimeout(() => {
        greyFox.style.left = "50%";
      }, 50);
    }, 50);
  }, 60);
}, 3000);

// glitch 2

setInterval(() => {
  greyFox.classList.add("transparent");
  greyFox.style.left = "49%";
  greyFox.style.top = "-5%";

  setTimeout(() => {
    greyFox.classList.remove("transparent");
    setTimeout(() => {
      greyFox.style.left = "40%";
      setTimeout(() => {
        greyFox.style.top = "0%";
        greyFox.style.left = "50%";
      }, 50);
    }, 50);
  }, 60);
}, 4000);

let glitch = document.querySelectorAll(".box");
setInterval(() => {
  for (let i = 0; i < glitch.length - 10; i++) {
    glitch[i].style.left = Math.floor(Math.random() * 900) + "px";

    glitch[i].style.top = Math.floor(Math.random() * 1000) + "px";

    glitch[i].style.width = Math.floor(Math.random() * 200) + "px";

    glitch[i].style.height = Math.floor(Math.random() * 5) + "px";
    glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + "px";
  }
}, 100);

// Time section

const currentTime = document.querySelector(".time");

function addZero(n) {
  return n < 10 ? `0${n}` : n;
}

function getTime() {
  let cTime = new Date();
  let timeString = `${addZero(cTime.getHours())}:${addZero(
    cTime.getMinutes()
  )}:${addZero(cTime.getSeconds())}`;

  currentTime.innerHTML = timeString;

  setTimeout(getTime, 1000);
}

getTime();

// Cursor

const pointer = document.querySelector(".pointer");

document.addEventListener("mousemove", e => {
  pointer.style.left = e.clientX + "px";
  pointer.style.top = e.clientY + "px";
});

// Gun Noise

const gunShot = document.querySelector(".gun-shot");
const soundBar = document.querySelector(".sound-bar");
const ball = document.querySelector(".ball");

soundBar.addEventListener("click", () => {
  console.log("hello");
  ball.classList.toggle("off");
});

document.addEventListener("click", () => {
  if (ball.classList.contains("off")) {
    return;
  }
  gunShot.classList.add("active");
  new Audio("./gunshot.mp3").play();
  setTimeout(() => {
    gunShot.classList.remove("active");
  }, 50);
});

// Weather
const weatherLocation = document.querySelector(".location");
const temperature = document.querySelector(".temperature");
const status = document.querySelector(".status");
const weatherSearch = document.querySelector(".weather-search");
const search = document.querySelector(".search");

search.addEventListener("click", getWeather);

let apiKey = "6dafd285803162612ccd76ec335d85ce";
let city = "Chelmsford";

function getWeather() {
  weatherSearch.value != ""
    ? (city = weatherSearch.value)
    : (city = "Chelmsford");

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}`;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      weatherLocation.innerText = data.name;
      temperature.innerText = `${Math.floor(data.main.temp - 273.15)}°C`;
      status.innerText = data.weather[0].description;
      console.log(data.name);
    })
    .catch(err => {
      console.log(err);
    });
}

getWeather();
