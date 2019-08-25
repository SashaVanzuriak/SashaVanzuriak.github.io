const now = new Date();
const today = document.querySelector(".h3");
const DayWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

today.innerHTML += " " + now.getDate() + " " + DayWeeks[now.getDay()];
