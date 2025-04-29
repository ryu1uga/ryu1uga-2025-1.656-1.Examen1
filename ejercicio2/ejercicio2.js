let AddImage = function()
{
    
    let url = document.getElementById("url")
    let image = document.createElement("img")
    let div = document.createElement("div")
    let images = document.getElementById("images")
    image.src = url.value
    div.appendChild(image)
    images.appendChild(div)
}

let main = function()
{
    let button = document.getElementById("button")
    button.addEventListener("click", AddImage)
}

main()