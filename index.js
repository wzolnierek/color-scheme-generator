const paletteContainer = document.getElementById("palette-container")
const colorInput = document.getElementById("color-picker")
const modeInput = document.getElementById("mode-picker")
const getBtn = document.getElementById("get-btn")

const COLOR_COUNT = 5

function fetchScheme(hex,mode,count){
    return fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=${count}`)
        .then(x => x.json())
        .then(data => data.colors.map(color => color.hex.value))
}

function renderColors(colors){
    const palette = colors.map((hex, i) => `<div style="background-color:${hex}"></div><p id="hex-${i}">${hex}</p>`).join("")

    paletteContainer.innerHTML = palette
}

function getScheme(){
    const hex = colorInput.value.slice(1)
    const mode = modeInput.value

    fetchScheme(hex,mode,COLOR_COUNT)
        .then(colors => renderColors(colors))   
}

getBtn.addEventListener("click", function(e){
    e.preventDefault()
    getScheme()
})

getScheme()

paletteContainer.addEventListener('click', function(e){
    if (e.target.tagName=="P"){
        navigator.clipboard.writeText(e.target.innerText);
        alert("Copied the hex: " + e.target.innerText)
    }
})