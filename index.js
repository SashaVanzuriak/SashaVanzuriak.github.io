const buttons = document.querySelectorAll('.button')
const display = document.querySelector("#number")
let oneNumber = 0
const plus = document.querySelector('.plus')
const result = document.querySelector('.result')
let action = ""
const delet = document.querySelector('.delete')
const minus = document.querySelector('.minus')
const product = document.querySelector('.product')
const division = document.querySelector('.division')
for (let i = 0; i < buttons.length; i++) {
   const button = buttons[i]

   button.onclick = function() {
      display.value += button.value;
   }
   
}
plus.onclick = function () {
   oneNumber = display.value;
   display.value = "";
   action = "plus";
}
minus.onclick = function () {
   oneNumber = display.value;
   display.value = "";
   action = "minus"
}
product.onclick = function () {
   oneNumber = display.value;
   display.value = "";
   action = "product";
}
division.onclick = function () {
   oneNumber = display.value;
   display.value = "";
   action = "division";
}
delet.onclick = function () {
   display.value = "";
   action = "";
}
result.onclick = function () {
   if (action === "plus") {
      display.value = Number(display.value) + Number(oneNumber);
      action = "";
   } else if (action === "minus") {
      display.value = Number(oneNumber) - Number(display.value);
      action = "";
   } else if (action === "product") {
      display.value = Number(display.value) * Number(oneNumber);
      action = "";
   } else if (action === "division") {
      display.value = Number(oneNumber) / Number(display.value);
      action = "";
   }
} 


