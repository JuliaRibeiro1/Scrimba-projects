let colors = []
let colorHtml;
let seedValue;
let selectedValue
let num = 0;
let seedColor = document.querySelector(".seed-color")
let colorsSection = document.querySelector(".section-scheme-colors")
let selectedOption = document.querySelector(".options-container")
let optionsHtml;
let optionsArr = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"]

selectedOption.innerHTML = renderOptions()

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


function renderOptions() {
  optionsHtml = ""
  optionsArr.map(option => {
    optionsHtml += `<option value=${option}>${option[0].toUpperCase()}${option.slice(1).toLowerCase()}</option>`
  })
  return optionsHtml
}
function RenderColors() {
  colorHtml = ""
  colors.map((element) => {
    colorHtml += 
      `<div class="color flex" id=color${num}>
        <div></div>
        <span class="color-hex">${element}</span>
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

document.querySelector(".section-scheme-colors").addEventListener("click",myFunction)

function myFunction() {
  // Get the text field
  var copyText = document.querySelector("option");

  // Select the text field
  //copyText.select();
  //copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
} 