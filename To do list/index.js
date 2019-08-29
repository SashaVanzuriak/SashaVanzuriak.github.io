const now = new Date();
const today = document.querySelector(".h3");
const plus = document.querySelector(".plus");
const text = document.querySelector(".add");
const box = document.querySelector(".box");
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

  const Input = document.createElement("input");
  Input.className = "textInput";
  Input.value = "Print text";
  Input.placeholder = "text";
  box.appendChild(Input);

  const InputDate = document.createElement("input");
  InputDate.className = "dateInput";
  InputDate.value = now.getDate();
  box.appendChild(InputDate);
};
