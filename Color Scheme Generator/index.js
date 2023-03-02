let colors = []
let colorHtml;
let seedValue;
let selectedValue
let num = 0;
let seedColor = document.querySelector(".seed-color")
let colorsSection = document.querySelector(".section-scheme-colors")
let selectedOption = document.querySelector(".options-container")
let randomBtn = document.querySelector(".random-btn")
let optionsHtml;
let optionsArr = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"]

selectedOption.innerHTML = renderOptions()
/*seedValue = seedColor.value.substring(1)
selectedValue = selectedOption.value*/

function getRandomColor() {
    const random = setRandomColor()
    seedColor.value = random  
   scheme(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.substring(1)}&mode=${selectedOption.value}&count=5`)
   
  }

getRandomColor()
seedColor.addEventListener("change",() => {scheme(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.substring(1)}&mode=${selectedOption.value}&count=5`)})


selectedOption.addEventListener("change",() => {scheme(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.substring(1)}&mode=${selectedOption.value}&count=5`)})

randomBtn.addEventListener("click",() => {
  setTimeout(() => {
    randomBtn.disabled = false
    getRandomColor()
  },200)
  randomBtn.disabled = true

})

function renderOptions() {
  optionsHtml = ""
  optionsArr.map(option => {
    optionsHtml += `<option value=${option}>${option[0].toUpperCase()}${option.slice(1).toLowerCase()}</option>`
  })
  return optionsHtml
}
function setRandomColor() {
  let colorCharacters = '0123456789ABCDEF'
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += colorCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function RenderColors() {
  colorHtml = ""
  colors.map((element) => {
    colorHtml += 
      `<div class="color" id=color${num}>
        <div></div>
        <span class="color-hex">${element.value}</span>
        <span>${element.name}</span>
      </div>
      <style>
        #color${num}  {
          background-color:${element.value}
        }
      </style>`
      num++
  })
  return colorHtml
  
}
async function scheme(url) {
  seedValue = seedColor.value.substring(1)
  
  colors = []
 const res = await fetch(url) 
  const data = await res.json()
  return data.colors.forEach(item => {
    colors.push({value:item.hex.value,name:item.name.value})
    colorsSection.innerHTML = RenderColors()
  })
}


/*function myFunction() {
  // Get the text field
  var copyText = document.querySelector("option");

  // Select the text field
  //copyText.select();
  //copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
} */