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
  let checkSpanColor = lightOrDark(colors[0].value)?"#000":"#fff"
  colorHtml = ""
  colors.map((element) => {
   // lightOrDark(element.value)?"#000":"#fff"
    colorHtml += 
      `<div class="color" id=color${num}>
        <span class="color-hex">${element.value}</span>
        <span class="color-name">${element.name}</span>
      </div>
      <style>
        #color${num}  {
          background-color:${element.value};
          color:${checkSpanColor};
          
          
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
var str = window.getComputedStyle(document.querySelector('article'), ':after') .getPropertyValue('content');
document.querySelector("article").addEventListener("click",(e) => {
  const root = document.querySelector(":root");
  let target = e.target
  if(target.className == "color-hex") {
    let colorHex =  e.target.textContent
    navigator.clipboard.writeText(`${colorHex}`);
    root.style.setProperty("--pseudo-opacity", 0.8);
    root.style.setProperty("--pseudo-animation", 'fade 3s');

    setTimeout(() => {
      root.style.setProperty("--pseudo-animation", '');
      root.style.setProperty("--pseudo-opacity", 0)
    },1000)
  }
})
let r;
let g;
let b;
let hsp;
function lightOrDark(color) { //https://gist.github.com/krabs-github/ec56e4f1c12cddf86ae9c551aa9d9e04


     color = +("0x" + color.slice(1).replace( 
      color.length < 5 && /./g, '$&$&'
    )
             )
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
 // }
  // HSP equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  );

  // Using the HSP value, determine whether the color is light or dark
  if (hsp>127.5) {

    return true;
  } 
  else {

    return false;
  }
}
