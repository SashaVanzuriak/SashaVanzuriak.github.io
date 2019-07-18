//fetch("https://dev.to/api/articles")
//.then(data => data.json())
//.then(data => {
    //data.forEach(el => {
        //const titleDiv = document.createElement("div");
        //titleDiv.innerHTML = el.title;
        //document.body.appendChild(titleDiv)
    //})
//})
// console.log("A")

// setTimeout(function() {
//     console.log("C")
// }, 0)

// setTimeout(function() {
//     console.log("G")
// }, 0)


// console.log("B")
fetch("https://dev.to/api/articles ")
.then(data => data.json())
.then(data => {
    data.forEach(element => {
        const user = element.user
        const colons = document.querySelector(".col-sm")
        const div = document.createElement("div")
        div.className = "card-deck"
        colons.appendChild(div)

        const divs = document.createElement("div")
        divs.className = "card"
        div.appendChild(divs)

        const image = document.createElement("img")
        image.src = element.cover_image
        image.class = "card-img-top"
        divs.appendChild(image)

        const TreeDiv = document.createElement("div")
        TreeDiv.className = "card-body"
        divs.appendChild(TreeDiv)

        const h5 = document.createElement("h5")
        h5.innerHTML = element.title
        h5.className = "card-title"
        TreeDiv.appendChild(h5)

        const p = document.createElement("p")
        p.className = "card-text"
        TreeDiv.appendChild(p)

        const card = document.createElement("img")
        card.className = "image"
        card.src = user.profile_image
        TreeDiv.appendChild(card)

        const small = document.createElement("small")
        small.className = "text-muted"
        small.innerHTML = element.published_at
        card.appendChild(small)


    })
})

