const data = window.location.href;
const datas = data.split("#")[1];
console.log(datas);
fetch("https://dev.to/api/users/by_username?url=" + datas)
  .then(element => element.json())
  .then(element => {
    body = document.createElement("div");
    body.className = "card";
    document.body.appendChild(body);

    image = document.createElement("img");
    image.className = "img";
    image.src = element.profile_image;
    body.appendChild(image);

    userName = document.createElement("p");
    userName.className = "userName";
    userName.innerHTML = element.name;
    body.appendChild(userName);
  });
