let colors = []
let colorHtml;
let seedValue;
let num = 0;
let seedColor = document.querySelector(".seed-color")
let colorsSection = document.querySelector(".section-scheme-colors")
let selectedOption = document.querySelector(".options-container")

document.body.addEventListener("click",(e) => {
  // e.preventDefault()
})
document.querySelector(".submit-btn").addEventListener("click",() => {
    
    seedValue = seedColor.value.substring(1)
    let selectedValue = selectedOption.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${selectedValue}&count=5`) //id?rbg(12322,554,33)
    .then(res => res.json())
    .then(data => data.colors.forEach(item => colors.push(item.hex.value)))
    RenderColors()
})
function RenderColors() {
  colorHtml = ""
  colors.map((element) => {
    colorHtml += 
      `<div class=color id=color${num}>
        <div ></div>
        <span>${element}</span>
      </div>
      <style>
        #color${num}  {
          background-color:${element}
        }
      </style>`
      num++
  })
  colors = []
  return colorsSection.innerHTML = colorHtml
}
