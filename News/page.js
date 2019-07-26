let href = window.location.href
let id = href.split("?")[1].split("=")[1]

fetch('https://dev.to/api/articles/' + id).then(data => data.json()).then(data => {
    const colums = document.querySelector(".col-sm")

    const imgFluid = document.createElement("img")
    imgFluid.src = data.cover_image
    imgFluid.className = "img-fluid"
    imgFluid.alt = "Responsive image"
    colums.appendChild(imgFluid)
    
    const title = document.createElement("p")
    title.className = "title"
    title.innerHTML = data.title
    colums.appendChild(title)

    const bodyhtml = data.body_html
    const text = document.createElement("p")
    text.innerHTML += bodyhtml
    colums.appendChild(text)
})
