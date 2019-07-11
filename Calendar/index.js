let month = document.querySelector('.month')
let Year = document.querySelector('.Year')
let days = document.querySelector('#day')
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let thisDay = [".one", ".two", ".tree", ".four", ".five", ".six", ".seven", ".eight", ".nine", ".ten", ".eleven", ".twelve", ".thirteen", ".fourteen", ".fiveteen", ".sixteen", ".seventeen", ".eightteen",
".nineteen",".twenty", ".twenty-one", ".twenty-two", ".twenty-tree", ".twenty-four", ".twenty-five", ".twenty-six", ".twenty-seven", ".twenty-eight", ".twenty-nine", ".thirty", ".thirty-one", ".thirty-two", ".thirty-tree", ".thirty-four", ".thirty-five"]
const now = new Date();
const Months = monthNames[now.getMonth()]
let Years = now.getFullYear()
const MonthNumber = now.getMonth()
const firstDay = new Date(Years, MonthNumber, 1).getDay()
let dayInMonth = thisMonth((Number(now.getMonth()) + 1), now.getFullYear())
let OneButton = document.querySelector(".oneButton")
let MonthDate = now.getMonth()
function thisMonth (month, year) {
  return new Date(year, month, 0).getDate()
}
function one() {
  MonthDate = MonthDate - 1
  month.innerHTML = monthNames[MonthDate] 
  if (MonthDate === 0) {
    MonthDate = 11
    Years = Years - 1
    Year.innerHTML = Years 
  }
}


month.innerHTML = Months
Year.innerHTML = Years



for(let i=0; i < dayInMonth; i++) {
  let Monthdays = document.querySelector(thisDay[i + firstDay])
  Monthdays.innerHTML = i + 1;
}