const now = new Date();
const today = document.querySelector(".h3");
const DayWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Months = [
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

today.innerHTML += " " + now.getDate() + " " + DayWeeks[now.getDay()];
