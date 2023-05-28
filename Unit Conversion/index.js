
let convertBtn = document.querySelector(".convertBtn")
let displayResult = document.querySelectorAll(".result")
let inputDiv = document.querySelector(".inputDiv")
let i = 0;
let inputEl = document.querySelector("input")

inputEl.addEventListener("input",() => {
        let width = inputEl.offsetWidth
       let checkharacter = isNumber(inputEl.value)
   
            if (checkharacter)  {
                error() // irá alertar o erro que o digito é invalido
                convertBtn.disabled = true  
                                           
            }
            else {
                normalize()
                convertBtn.disabled = false

if(inputEl.value > 1000) {

        let windowWidth = window.innerWidth
            if(windowWidth > 600 && width < windowWidth - 100) {
                inputEl.style.cssText = `width:${width + 50}px` // serve para aumentar o espaço do input para que o usuário veja o número que está diigitando inteiro
            }
            if(windowWidth < 600 && width < windowWidth - 100) {
                inputEl.style.cssText = `width:${width + 30}px`
            }
            if(ASCIICode == 66) {
               if(width > 180) {
                inputEl.style.cssText = `width:${width - 50}px`
               }
            }
        }
    normalize() // Se o usuário digir um caractere válido essa função irá remover a mensagem de alerta e as borda vermleha
  //  return true
}
})

function isNumber(n){
     return isNaN(n) ;
}
convertBtn.addEventListener("click",() => { 
   
        displayResult.forEach(element => { // Irá "pegar" todas as divs que mostrará o resultado ao usuário
            
            element.textContent = resultArr[i](inputEl.value) // irá chamar a função com o atual valor do input 
            i++
            })
            i = 0
        })

let resultArr = [function(num) { // array de funções que irá retornar uma função para cada div
    let metersToFeet = num * 3.2808399 
    let feetToMeters = num / 3.2808399 
    return`${num} meters = ${metersToFeet.toFixed(3)} | ${num} feet = ${feetToMeters.toFixed(3)}`
},
function(num) {
    let litersToGallons = num * 0.264172052358
    let gallonsToLiters = num / 0.264172052358
    return `${num} liters = ${litersToGallons.toFixed(3)} | ${num} gallons = ${gallonsToLiters.toFixed(3)}`
},
function(num) {
    let kiloToPounds = num *  2.20462262185
    let poundsToKilo = num /  2.20462262185
    return `${num} kilogram = ${kiloToPounds.toFixed(3)} | ${num} pounds = ${poundsToKilo.toFixed(3)}`
}
]

function error() {
    inputDiv.setAttribute("content","Invalid character")
    inputEl.classList.add("redBorder")
}
function normalize() { // irá "normalizar" o input tirando a mensagem de alerta e as borda vermelha
     inputDiv.setAttribute("content","")
     inputEl.classList.remove("redBorder")
}