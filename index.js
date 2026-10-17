const colorScheme = document.getElementById("color-scheme")
let colorPicker = document.getElementById("color-picker").value.slice(1)
let palettePicker = document.getElementById("palette-picker").value

const getBtn = document.getElementById("get-btn")
let col = 5

function renderColors(col){
    let html = ""
    for(let i=0; i < col; i++){
        html += `<div id=col${i}></div>`
    }
    
    
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${palettePicker}&count=${col}`)
    .then(x => x.json())
    .then( data => {
        for(let i=0; i < col; i++){
            html += `<p>${test}</p>`
        }
    })
    .then(
        function(data){
            for(let i=0; i<col; i++){
                document.getElementById(`col${i}`).style.backgroundColor = `${data.colors[i].hex.value}`
            }
        }
    )

    colorScheme.innerHTML = html
}
getBtn.addEventListener("click", function(e){
    e.preventDefault()
    colorPicker = document.getElementById("color-picker").value.slice(1)
    palettePicker = document.getElementById("palette-picker").value

    renderColors(col)
})

