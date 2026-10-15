const colorPicker = document.getElementById("color-picker").value.slice(1)
const colorScheme = document.getElementById("color-scheme")
const getBtn = document.getElementById("get-btn")


function renderColors(col){
    let html = ""
    for(let i=0; i < col; i++){
        html += `<div class=col-${i+1}></div>`
    }
    for(let i=0; i < col; i++){
        html += `<p>${(i+1)*100000}</p>`
    }
    
    colorScheme.innerHTML = html
}

getBtn.addEventListener("click", function(e){
    e.preventDefault()
    renderColors(5)
    console.log(colorPicker)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=analogic&count=5`)
        .then(x => x.json())
        .then(data => console.log(data))
})

