const box = document.querySelector(".box");
const Cheack = document.querySelector(".Todo");

function create() {
  const Imges = document.createElement("img");
  Imges.src = "./Img/NonClick.png";
  Cheack.appendChild(Imges);
  console.log(1);
}

function Box() {
  box.src = "./Img/Click.png";
}
