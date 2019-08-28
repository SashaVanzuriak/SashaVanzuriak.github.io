const now = new Date();
const today = document.querySelector(".h3");
const plus = document.querySelector(".plus");
const text = document.querySelector(".add");
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

today.innerHTML +=
  "Today" +
  " " +
  DayWeeks[now.getDay()] +
  " " +
  now.getDate() +
  " " +
  Months[now.getMonth() + 1];

plus.onclick = function Add() {
  plus.remove();
  text.remove();
};
