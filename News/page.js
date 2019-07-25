let href = window.location.href
let id = href.split("?")[1].split("=")[1]

fetch('https://dev.to/api/articles/' + id).then(data => data.json()).then(data => {
    console.log(data)
})
