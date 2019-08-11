const data = window.location.href;
const datas = data.split("#")[1];
console.log(datas);
fetch("https://dev.to/api/users/by_username?url=" + datas)
  .then(element => element.json())
  .then(element => {
    image = document.createElement("img");
    image.className = "img";
    image.src = element.profile_image;
    document.body.appendChild(image);

    userName = document.createElement("p");
    userName.className = "userName";
    userName.innerHTML = element.name;
    document.body.appendChild(userName);

    summary = document.createElement("p");
    summary.innerHTML = element.summary;
    summary.className = "summery";
    document.body.appendChild(summary);
  });
