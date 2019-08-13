const data = window.location.href;
const datas = data.split("#")[1];
console.log(datas);
fetch("https://dev.to/api/users/by_username?url=" + datas)
  .then(element => element.json())
  .then(element => {
    Div = document.createElement("div");
    Div.className = "Div";
    document.body.appendChild(Div);

    imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    Div.appendChild(imgDiv);

    image = document.createElement("img");
    image.className = "img";
    image.src = element.profile_image;
    imgDiv.appendChild(image);

    userNameDiv = document.createElement("div");
    userNameDiv.className = "userNameDiv";
    Div.appendChild(userNameDiv);

    userName = document.createElement("p");
    userName.className = "userName";
    userName.innerHTML = element.name;
    userNameDiv.appendChild(userName);

    summary = document.createElement("p");
    summary.innerHTML = element.summary;
    summary.className = "summary";
    userNameDiv.appendChild(summary);

    join = document.createElement("p");
    join.className = "join";
    join.innerHTML = "" + element.joined_at;
    userNameDiv.appendChild(join);
  });
