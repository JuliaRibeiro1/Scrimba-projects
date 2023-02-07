
import { menuArray } from "./data.js"

const addOptionBtn = document.querySelector(".add-option-btn")


let menuHtml = ""
let optionHtml = ""

let quantityHtml = document.querySelector(".quantity")
let quantity = 0

let sumBtn = document.querySelector(".sum-btn")
let subBtn = document.querySelector(".sub-btn")


document.querySelector(".menu-container").innerHTML += renderMenu()
function renderMenu() {
    menuArray.forEach(item => {
        menuHtml += `
        <div class="item-container" id="${item.id}">
            
            <div class="item">
                    <h1 class="item-name">${item.name}</h1>
                    <p class="item-ingredients">${item.ingredients}</p>
                    
                <div class="item-price">${item.price}</div>
            </div>
            <button class="add-item-btn">+</button> 
      
   
    </div>
        
        `
    })
    return menuHtml
}
function renderMenuOptions(item) {
    
    for(item of item.options) {
            optionHtml += `
            <div class="option" id="${item.optionId}">
                <div class="option-item">
                <h1>${item.optionName}</h1>
                <p>${item.optionsDescription}</p>
                <div class="price">$<span id="price-${item.optionId}">${item.optionPrice}</span>  </div>
                </div>
            <div>
                <input type="radio" class="option-radio" name="radio" >
                <label for="radio"></label>
            </div>
            </div>

         `
        
   }

        
    
        return optionHtml
}
function calculateTotalOptions() {
    
}


document.querySelectorAll(".add-item-btn").forEach(btn => btn.addEventListener("click", (e) => {
    
    let id = e.target.parentElement.id
    
   
    menuArray.forEach(option => {
        console.log(option.id)
        if(id == option.id) {
           
                document.querySelector(".options-section").style.display = "inline"
                document.querySelector(".options").innerHTML = renderMenuOptions(option)
        }
       
    })
   
    
}))

document.querySelector(".close-options-btn").addEventListener("click",(e) => {
    document.querySelector(".options-section").style.display = "none"
})


let element;
let parentEl;
let priceOption;
let radioSelected;
document.querySelector("body").addEventListener("click",(e) => {
    element = e.target
    
    
    if(element.className == "option-radio") {
        radioSelected = e.target
        parentEl = radioSelected.parentElement.parentElement.id
        priceOption = document.getElementById(`price-${parentEl}`)

        addTotalOption(element,priceOption,quantity)
       
    }
    else if(element.className == "sum-btn") {
        console.log(radioSelected)
        sumQuantity()
        if(quantity > 1) {
            addTotalOption(element,priceOption,quantity)
        }
        
       // addTotalOption(element,quantity)
    }
})
let spanPriceOption = document.querySelector(".total-option-price")
function sumQuantity() {
    quantity++
    quantityHtml.textContent = quantity
    
    
    
}
function addTotalOption(el,price,quantity) {
    
    console.log(quantity)
   

    addOptionBtn.style.cssText = "opacity:1"
    if(quantity <= 1) {
        sumQuantity()
        spanPriceOption.textContent = price.textContent 
    }
    else {
        spanPriceOption.textContent = price.textContent * quantity

   }
}


subBtn.addEventListener("click",()=> {
    if(quantity > 0) {
        quantity--
        quantityHtml.textContent = quantity
    }

})

/*sumBtn.addEventListener("click",() => {
  
   // spanPriceOption.textContent = priceOption.textContent * quantity
//    spanPriceOption.textContent = priceOption.textContent
    
    
    
})*/

