import { menuArray } from "./data.js"

let menuHtml = ""
let optionHtml = ""

let quantityHtml = document.querySelector(".quantity")
let quantity = 0

let sumBtn = document.querySelector(".sum-btn")
let subBtn = document.querySelector(".sub-btn")

document.querySelector(".menu-container").innerHTML = renderMenu()

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
            <div class="option" >
                <div class="option-item">
                <h1>${item.optionName}</h1>
                <p>${item.optionsDescription}</p>
                <div>$${item.optionPrice}  </div>
                </div>
            <div>
                <input type="checkbox" class="option-checkbox">
                <label for="checkbox"></label>
            </div>
            </div>

         `
    }
        return optionHtml
    
}
function calculateTotalOptions() {
    
}


document.querySelectorAll(".add-item-btn").forEach(btn => btn.addEventListener("click", () => {
    
    let id = btn.parentElement.parentElement.id
    menuArray.forEach(item => {
        if(item.id == id) {
            console.log(item)
            document.querySelector(".options-section").style.display = "inline"
                document.querySelector(".options").innerHTML = renderMenuOptions(item)
        }
    })
}))

document.querySelector(".close-options-btn").addEventListener("click",(e) => {
    document.querySelector(".options-section").style.display = "none"
})

document.querySelector("input").addEventListener("change",(e) => {
    console.log(e)
})

subBtn.addEventListener("click",()=> {
    if(quantity > 0) {
        quantity--
        quantityHtml.textContent = quantity
    }

})

sumBtn.addEventListener("click",() => {
    quantity++
    quantityHtml.textContent = quantity
    
    
})

