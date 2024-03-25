// Fetching the HTML elements
const heading = document.querySelector(".title");
const timer = document.querySelector(".timer");
let button = document.querySelector("button");

heading.innerHTML = "<h1>" + "What time is it?!" + "</h1>";

// Building the real time clock with setTimeout() and setInterval()
function realTimeClock() {
  let currentTime = new Date().getTime();

  let seconds = Math.floor((currentTime / 1000) % 60);
  let minutes = Math.floor((currentTime / (1000 * 60)) % 60);
  let hours = Math.floor((currentTime / (1000 * 60 * 60)) % 24);

  document.querySelector("#seconds").innerHTML = seconds;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#hours").innerHTML = hours + 1;
  //not sure how to get correct timeZone, so added +1 for now

  setTimeout(realTimeClock, 1000);
}
realTimeClock();

//setInterval(realTimeClock, 1000);

// A button click will pause the clock until alert message is gone
button.onclick = function () {
  console.log("Button clicked!");
  alert("Button clicked!");
};

// onmouseover function - hover effect with setTimeout method
function hoverColor() {
  const button = document.getElementById("click-button");
  button.style.backgroundColor = "var(--hover-blue)";
  setTimeout(() => {
    button.style.backgroundColor = "var(--light-blue)";
  }, 1000);
}
