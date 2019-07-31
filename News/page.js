let href = window.location.href
let id = href.split("?")[1].split("=")[1]


function home() {
    window.location.href = "./index.html"
}

fetch('https://dev.to/api/articles/' + id).then(data => data.json()).then(data => {
    const user = data.user
    const colums = document.querySelector(".col-sm")
    const tagList = data.tags

    const imgFluid = document.createElement("img")
    imgFluid.src = data.cover_image
    imgFluid.className = "img-fluid"
    imgFluid.alt = "Responsive image"
    colums.appendChild(imgFluid)
    
    const title = document.createElement("p")
    title.className = "title"
    title.innerHTML = data.title
    colums.appendChild(title)

    const profileImage = document.createElement("img")
    profileImage.src = user.profile_image
    profileImage.className = "profileImage"
    colums.appendChild(profileImage)

    const userName = document.createElement("p")
    userName.innerHTML = user.name 
    userName.className = "userName"
    colums.appendChild(userName)

    const h2 = document.createElement("h2")
    for(let i=0; i<5; i++){
     if(tagList[i] === undefined){
        tagList[i] = " "
                     
     } else {
              tagList[i] =  " #" + tagList[i]
         }
       }
     h2.innerHTML = tagList[0] + tagList[1] + tagList[2] + tagList[3] + tagList[4]
     h2.onclick = function tegs() {
           window.location.href = "./teg.html?" + tagList[0]
       }
    colums.appendChild(h2)

    const bodyhtml = data.body_html
    const text = document.createElement("p")
    text.innerHTML += bodyhtml
    colums.appendChild(text)

})
