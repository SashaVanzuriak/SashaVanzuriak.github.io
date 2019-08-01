const colums = document.querySelector(".col-sm")
const teg = window.location.href
const tegs = teg.split("#")[1]


function home() {
    window.location.href = "./index.html"
}

fetch("https://dev.to/api/articles?tag=" + tegs).then(data => data.json())
.then(data => {
    data.forEach(element => {
        const user = element.user
        const tagList = element.tag_list

        const blogCard = document.createElement("div")
        blogCard.className = "blog-card"
        colums.appendChild(blogCard)

        const meta = document.createElement("div")
        meta.className = "meta"
        blogCard.appendChild(meta)

        const photo = document.createElement("div")
        photo.style = "background-image: url(" + element.cover_image + ")"
        photo.id = element.id
        photo.className = "photo"
        meta.appendChild(photo)

        const details = document.createElement("ul")
        details.className = "details"
        meta.appendChild(details)

       const author = document.createElement("li")
       author.className = "author"
       details.appendChild(author)

       const authorName = document.createElement("a")
       authorName.innerHTML = user.name
       author.appendChild(authorName)

       const description = document.createElement("div")
       description.className = "description"
       blogCard.appendChild(description)

       const a = document.createElement("a")
       if(tagList[0] === undefined) {
           tagList[0] = " "
                   
      } else {
            tagList[0] =  " #" + tagList[0]        
       }
       a.innerHTML = tagList[0]
       a.onclick = function tegs() {
         window.location.href = "./teg.html?" + tagList[0]
         window.location.reload()
       }
       description.appendChild(a)

       const a1 = document.createElement("a")
       if(tagList[1] === undefined) {
           tagList[1] = " "
                   
        } else {
            tagList[1] =  " #" + tagList[1]        
        }
       a1.innerHTML = tagList[1]
       a1.onclick = function tegs() {
         window.location.href = "./teg.html?" + tagList[1]
         window.location.reload()
       }
        description.appendChild(a1)

       const a2 = document.createElement("a")
       if(tagList[2] === undefined) {
           tagList[2] = " "
                   
         } else {
             tagList[2] =  " #" + tagList[2]        
          }
       a2.innerHTML = tagList[2]
       a2.onclick = function tegs() {
          window.location.href = "./teg.html?" + tagList[2]
          window.location.reload()
        }
       description.appendChild(a2)

       const a3 = document.createElement("a")
       if(tagList[3] === undefined) {
         tagList[3] = " "
                   
        } else {
        tagList[3] =  " #" + tagList[3]        
         }
       a3.innerHTML = tagList[3]
       a3.onclick = function tegs() {
         window.location.href = "./teg.html?" + tagList[3]
         window.location.reload()
         }
       description.appendChild(a3)

       const hed = document.createElement("p")
       hed.innerHTML = element.title
       hed.onclick = function all(){
        window.location.href = "./page.html?id=" + photo.id
        
       }
       description.appendChild(hed)
       
       const p = document.createElement("p")
       p.className = "read-more"
       description.appendChild(p)

       const readMore = document.createElement("a")
       readMore.innerHTML = "Read more"
       readMore.onclick = function all(){
        window.location.href = "./page.html?id=" + photo.id
        
    }
       p.appendChild(readMore)
       
    })
})