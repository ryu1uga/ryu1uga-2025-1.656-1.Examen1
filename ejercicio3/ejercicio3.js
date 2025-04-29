let SaveData = function()
{
    let nombre = document.getElementById("nombre")
    let edad = document.getElementById("edad")
    let mensaje = document.getElementById("mensaje")
    mensaje.innerText = ""

    if (nombre.value == "" || edad.value == "")
    {
        mensaje.innerText = "Error, debe llenar todos los campos."
    }
    else
    {
        mensaje.innerText = "Se guardó con éxito."
    }
}

let main = function()
{
    let button = document.getElementById("button")
    button.addEventListener("click", SaveData)
}

main()