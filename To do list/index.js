const ThisDate = document.querySelector(".date");
const DayinMonth = document.querySelector(".DayinMonth");
const now = new Date();

const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

DayinMonth.innerHTML = Days[now.getDay()] + ", " + now.getDate();
