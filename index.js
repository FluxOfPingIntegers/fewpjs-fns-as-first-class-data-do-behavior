/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeNum = Number(time.substring(0, 2));
  if (timeNum > 17) {
    return "Good Evening";
  } else if (timeNum >= 12 && timeNum <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Morning";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerHTML = string;
}
