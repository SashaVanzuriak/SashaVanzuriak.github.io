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

    const a = document.createElement("a")
    if(tagList[0] === undefined) {
        tagList[0] = " "
                
    } else {
         tagList[0] =  " #" + tagList[0]        
    }
    a.innerHTML = tagList[0]
    a.onclick = function tegs() {
      window.location.href = "./teg.html?" + tagList[0]
    }
    colums.appendChild(a)

    const a1 = document.createElement("a")
    if(tagList[1] === undefined) {
        tagList[1] = " "
                
     } else {
         tagList[1] =  " #" + tagList[1]        
    }
    a1.innerHTML = tagList[1]
    a1.onclick = function tegs() {
      window.location.href = "./teg.html?" + tagList[1]
     }
    colums.appendChild(a1)

    const a2 = document.createElement("a")
    if(tagList[2] === undefined) {
        tagList[2] = " "
                
     } else {
         tagList[2] =  " #" + tagList[2]        
    }
    a2.innerHTML = tagList[2]
    a2.onclick = function tegs() {
      window.location.href = "./teg.html?" + tagList[2]
    }
    colums.appendChild(a2)

    const a3 = document.createElement("a")
    if(tagList[3] === undefined) {
       tagList[3] = " "
                
      } else {
       tagList[3] =  " #" + tagList[3]        
      }
    a3.innerHTML = tagList[3]
    a3.onclick = function tegs() {
        window.location.href = "./teg.html?" + tagList[0]
     }
    colums.appendChild(a3)

    const bodyhtml = data.body_html
    const text = document.createElement("p")
    text.innerHTML += bodyhtml
    colums.appendChild(text)

})
