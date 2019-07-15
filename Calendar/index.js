let month = document.querySelector('.month')
let Year = document.querySelector('.Year')
let days = document.querySelector('#day')
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let thisDay = [".one", ".two", ".tree", ".four", ".five", ".six", ".seven", ".eight", ".nine", ".ten", ".eleven", ".twelve", ".thirteen", ".fourteen", ".fiveteen", ".sixteen", ".seventeen", ".eightteen",
".nineteen",".twenty", ".twenty-one", ".twenty-two", ".twenty-tree", ".twenty-four", ".twenty-five", ".twenty-six", ".twenty-seven", ".twenty-eight", ".twenty-nine", ".thirty", ".thirty-one", ".thirty-two", ".thirty-tree", ".thirty-four", ".thirty-five",
".thirty-six", ".thirty-seven", ".thirty-eight", ".thirty-nine", ".fourteen", ".fourteen-one", "fourteen-two"]
const now = new Date();
const Months = monthNames[now.getMonth()]
let Years = now.getFullYear()
const MonthNumber = now.getMonth()
let firstDay = new Date(Years, MonthNumber, 1).getDay()
let dayInMonth = thisMonth((Number(MonthNumber) + 1), now.getFullYear());
let OneButton = document.querySelector(".oneButton")
let MonthDate = now.getMonth()
let Numbers = Number(MonthNumber) + 1;
let NewMonth = MonthNumber;

function thisMonth (month, year) {
  return new Date(year, month, 0).getDate()
}
console.log(MonthNumber)

month.innerHTML = Months
Year.innerHTML = Years



for(let i=0; i < dayInMonth; i++) {
  let Monthdays = document.querySelector(thisDay[i + firstDay])
  Monthdays.innerHTML = i + 1;
}

function one() {
  if (MonthDate === 0) {
    MonthDate = 12
    Years = Years - 1
    Year.innerHTML = Years 
  } 
  for(let i=0; i < dayInMonth; i++) {
    let Monthdays = document.querySelector(thisDay[i + firstDay])
    Monthdays.innerHTML = "";
  }
  MonthDate = MonthDate - 1
  month.innerHTML = monthNames[MonthDate]
  if (Numbers <= 0) {
    Numbers = 12;
  }
  if (NewMonth <= 0) {
    NewMonth = 12;
  }
  Numbers = Numbers - 1;
  NewMonth = NewMonth - 1;
  dayInMonth = thisMonth(Numbers, now.getFullYear())
  firstDay = new Date(Years, NewMonth, 1).getDay()
  for(let i=0; i < dayInMonth; i++) {
    let Monthdays = document.querySelector(thisDay[i + firstDay])
    Monthdays.innerHTML = i + 1;
  }
}
function two() {
 
  if (MonthDate >= 11) {
    MonthDate = -1
    Years = Years + 1
    Year.innerHTML = Years 
  }
  MonthDate = MonthDate + 1
  month.innerHTML = monthNames[MonthDate]
  for(let i=0; i < dayInMonth; i++) {
    let Monthdays = document.querySelector(thisDay[i + firstDay])
    Monthdays.innerHTML = "";
  }
  
  if (Numbers >= 11) {
    Numbers = -1;
  }
  if (NewMonth >= 11) {
    NewMonth = -1;
  }
  Numbers = Numbers + 1;
  NewMonth = NewMonth + 1;
  dayInMonth = thisMonth(Numbers, now.getFullYear())
  firstDay = new Date(Years, NewMonth, 1).getDay()
  
  for(let i=0; i < dayInMonth; i++) {
    let Monthdays = document.querySelector(thisDay[i + firstDay])
    Monthdays.innerHTML = i + 1;
  }
}
