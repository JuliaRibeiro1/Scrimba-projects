import { setRandomColor , lightOrDark } from "./utils.js"

let colors = []
let colorHtml;
let seedValue;
let num = 0;
let seedColor = document.querySelector(".seed-color")
let colorsSection = document.querySelector(".section-scheme-colors")
let selectedOption = document.querySelector(".options-container")
let randomBtn = document.querySelector(".random-btn")
let optionsHtml;
let optionsArr = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"] // ACHEI INTERESSANTE COLOCAR OS VALORES DAS OPÇÕES DENTRO DO ARRAY PARA FICAR MAIS FÁCIL DE ADIONAR NOVOS VALORES

selectedOption.innerHTML = renderOptions()

function getRandomColor() {
    const random = setRandomColor()
    seedColor.value = random  
   scheme(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.substring(1)}&mode=${selectedOption.value}&count=5`) // IRÁ PEGAR O VALOR ATUAL DO INPUT DO TIPO COR E A OPÇÃO ATUAL SELECIONADO NO SELECT TODA VEZ QUE A FUNÇÃO FOR CHAMADA
   
  }
  
getRandomColor() // IRÁ GERAR UM SCHEME COM UMA COR BASE ALEATÓRIA ASSIM QUE A PÁGINA FOR CARREGADA

seedColor.addEventListener("change",() => {scheme(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.substring(1)}&mode=${selectedOption.value}&count=5`)})

selectedOption.addEventListener("change",() => {scheme(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.substring(1)}&mode=${selectedOption.value}&count=5`)})

randomBtn.addEventListener("click",() => { 
  setTimeout(() => {
    randomBtn.disabled = false //IRÁ IMPEDIR QUE O USÁRIO CLIQUE NO BOTÃO ENQUANTO A COR AINDA ESTÁ CARREGANDO, EVITANDO BUGS
    getRandomColor()
  },200)
  randomBtn.disabled = true

})

function renderOptions() {
  optionsHtml = ""
  optionsArr.map(option => {
    optionsHtml += `<option value=${option}>${option[0].toUpperCase()}${option.slice(1).toLowerCase()}</option>` //RENDERIZAR AS OPÇÕES E SEUS DETERMINADOS VALORES DENTRO DO SELECT
  })
  return optionsHtml
}

function RenderColors() { //IRÁ CRIAR UMA DIV PARA "ABRIGAR" A COR, VALOR E NOME DE CADA COR RETORNADA PELA API
  let checkSpanColor = lightOrDark(colors[0].value)?"#000":"#fff" // IRÁ CHECAR QUAL A COR DO TEXTO DEVE SER BASEADA NA COR DE FUNDO 
  colorHtml = ""
  colors.map((element) => {
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

      num++ //SEU OBJETIVO É DAR UMA ID DIFERENTE PARA CADA COR
  })
  return colorHtml
}

async function scheme(url) {
  seedValue = seedColor.value.substring(1)
  colors = []
  try{
  const res = await fetch(url) 
  if(!res.ok) {
    const message = `ERRO ${res.status}`
    throw Error(message)

  }
  const data = await res.json()
  return data.colors.forEach(item => {
    colors.push({value:item.hex.value,name:item.name.value}) //CRIEI UM OBJETO COM O VALOR E O NOME DA COR
    colorsSection.innerHTML = RenderColors()
  })
}catch(err) {alert(err.message)}
  
}
console.log(scheme(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.substring(1)}&mode=${selectedOption.value}&count=5`))
document.querySelector("article").addEventListener("click",(e) => {
  const root = document.querySelector(":root");
  let target = e.target
  if(target.className == "color-hex") {
    let colorHex =  e.target.textContent
    navigator.clipboard.writeText(`${colorHex}`);
    root.style.setProperty("--pseudo-opacity", 0.8); //ANIMAÇÕES COM O INTUITO DE AVISAR O USUÁRIO CADA VEZ QUE UMA COR FOR COPIADA
    root.style.setProperty("--pseudo-animation", 'fade 3s');

    setTimeout(() => {
      root.style.setProperty("--pseudo-animation", '');
      root.style.setProperty("--pseudo-opacity", 0)
    },1000)
  }
})