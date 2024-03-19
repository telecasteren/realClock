console.log("We have connection");

// Fetching the HTML element and making a page heading
const heading = document.querySelector(".title");

heading.innerHTML = "<h1>" + "What time is it?!" + "</h1>";

// Building the real time clock counting up towards 24 hours (0-23)

const timer = document.querySelector(".timer");

function realTimeClock() {
  let currentTime = new Date().getTime();
  let timeDifference = currentTime;

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

  document.querySelector("#seconds").innerHTML = seconds;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#hours").innerHTML = hours + 1;
  //not sure how to get correct timeZone, so added +1 for now
}

realTimeClock();

setInterval(realTimeClock, 1000);

// TO DO

// 1. Find a way to implement the setTimeout() method
// 2. Update the design - make it look like a real clock
// 3. Local time - EX: let s= new Date().toLocaleString();

let button = document.querySelector("button");

// Testing button function
// A button click will pause the clock until alert message is gone
button.onclick = function () {
  //setTimeout(realTimeClock, 6000);
  console.log("Button clicked!");
  alert("Button clicked!");
};

// Button styles -------------------------
button.style.backgroundColor = "var(--light-blue)";
button.style.color = "black";
button.style.borderColor = "var(--light-blue)";
button.style.borderRadius = "12px";
button.style.border = "1px";
button.style.width = "200px";
button.style.height = "50px";
button.style.marginTop = "10%";
button.style.fontWeight = "bolder";
button.style.fontSize = "25px";
button.style.justifySelf = "center";
button.style.cursor = "pointer";
//----------------------------------------

// onmouseover function - hover effect with setTimeout method
function hoverColor() {
  const button = document.getElementById("click-button");
  button.style.backgroundColor = "var(--hover-blue)";
  setTimeout(() => {
    button.style.backgroundColor = "var(--light-blue)";
  }, 1000);
}
