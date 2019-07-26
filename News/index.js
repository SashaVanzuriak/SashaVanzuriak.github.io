const colums = document.querySelector(".col-sm")

fetch("https://dev.to/api/articles").then(data => data.json())
.then(data => {
    data.forEach(element => {
        const user = element.user

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

