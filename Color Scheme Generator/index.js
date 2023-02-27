let colors = []
let colorHtml;
let seedValue;
let selectedValue
let num = 0;
let seedColor = document.querySelector(".seed-color")
let colorsSection = document.querySelector(".section-scheme-colors")
let selectedOption = document.querySelector(".options-container")

document.body.addEventListener("click",(e) => {
  // e.preventDefault()
})
seedValue = seedColor.value.substring(1)
  selectedValue = selectedOption.value

   scheme(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${selectedValue}&count=5`)

seedColor.addEventListener("change",() => {
  seedValue = seedColor.value.substring(1)
  selectedValue = selectedOption.value

   scheme(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${selectedValue}&count=5`)
})

selectedOption.addEventListener("change",() => {
 
  seedValue = seedColor.value.substring(1)
  selectedValue = selectedOption.value
 
   scheme(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${selectedValue}&count=5`)
})

document.querySelector(".submit-btn").addEventListener("click",() => {
 
 seedValue = seedColor.value.substring(1)
 selectedValue = selectedOption.value
 
   scheme(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${selectedValue}&count=5`)
  
   
    
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
  return colorHtml
  
}
function scheme(url) {
  colors = []
  fetch(url) //id?rbg(12322,554,33)
  .then(res => res.json())
  .then(data => data.colors.forEach(item => {
   colors.push(item.hex.value)
   colorsSection.innerHTML = RenderColors()
  }))
}
