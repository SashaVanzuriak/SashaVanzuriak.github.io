const box = document.querySelector(".box");
const CenterDiv = document.querySelector(".CenterDiv");

function create() {
  const Cheack = document.createElement("div");
  Cheack.className = "Cheack";
  CenterDiv.appendChild(Cheack);

  const Imges = document.createElement("img");
  Imges.className = "Img";
  Imges.src = "./Img/NonClick.png";
  Imges.onclick = function click() {
    Imges.src = "./Img/Click.png";
  };
  Cheack.appendChild(Imges);

  const Input = document.createElement("input");
  Input.className = "Input";
  Cheack.appendChild(Input);

  const OkImg = document.createElement("img");
  OkImg.className = "OkImg";
  OkImg.onclick = function clear() {
    OkImg.remove();
    Input.remove();
  };
  OkImg.src = "./Img/Ok.png";
  Cheack.appendChild(OkImg);
}
