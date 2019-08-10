const data = window.location.href;
const datas = data.split("#")[1];
console.log(datas);
fetch("https://dev.to/api/users/by_username?url=" + datas)
  .then(element => element.json())
  .then(element => {
    card = document.createElement("div");
    card.className = "card";
    document.body.appendChild(card);

    image = document.createElement("img");
    image.className = "img";
    image.src = element.profile_image;
    card.appendChild(image);

    userName = document.createElement("p");
    userName.className = "userName";
    userName.innerHTML = element.name;
    card.appendChild(userName);

    summary = document.createElement("p");
    summary.innerHTML = element.summary;
    summary.className = "summery";
    card.appendChild(summary);
  });
