const buttons = document.querySelectorAll('.button')
const display = document.querySelector("#number")

for (let i = 0; i < buttons.length; i++) {
   const button = buttons[i]

   button.onclick = function() {
      display.value += button.value;
   }
   
}