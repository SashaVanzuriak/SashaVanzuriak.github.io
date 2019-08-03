let href = window.location.href;
let id = href.split("?")[1].split("=")[1];

function home() {
  window.location.href = "./index.html";
}

fetch("https://dev.to/api/articles/" + id)
  .then(data => data.json())
  .then(data => {
    const user = data.user;
    const colums = document.querySelector(".col-sm");
    const tagList = data.tags;

    const imgFluid = document.createElement("img");
    imgFluid.src = data.cover_image;
    imgFluid.className = "img-fluid";
    imgFluid.alt = "Responsive image";
    colums.appendChild(imgFluid);

    const title = document.createElement("p");
    title.className = "title";
    title.innerHTML = data.title;
    colums.appendChild(title);

    const profileImage = document.createElement("img");
    profileImage.src = user.profile_image;
    profileImage.className = "profileImage";
    colums.appendChild(profileImage);

    const userName = document.createElement("p");
    userName.innerHTML = user.name;
    userName.className = "userName";
    colums.appendChild(userName);

    const date = document.createElement("p");
    date.innerHTML = data.readable_publish_date;
    date.className = "publicatonDate";
    colums.appendChild(date);

    tagList.forEach(tag => {
      const a = document.createElement("a");
      a.innerHTML = " #" + tag;
      a.className = "button";
      a.onclick = function tags() {
        window.location.href = "./teg.html" + "#" + tag;
      };
      colums.appendChild(a);
    });

    const bodyhtml = data.body_html;
    const text = document.createElement("p");
    text.innerHTML += bodyhtml;
    colums.appendChild(text);
  });
