import { menuArray } from "./data.js"

let menuHtml = ""
let optionHtml = ""

document.querySelector(".menu-container").innerHTML = renderMenu()

function renderMenu() {
    menuArray.forEach(item => {
        menuHtml += `
        <div class="item-container" id="${item.id}">
        <div class="item">
            <img src="imgs/bgimg.png">
            <div class="item-info">
                <div class="item-preview">
                    <h1 class="item-name">${item.name}</h1>
                    <h2 class="item-ingredients">${item.ingredients}</h2>
                    <p class="item-description"></p>
                </div>
                <div class="item-price">${item.price}</div>
            </div>
        </div>
      <div>
            <button class="add-item-btn">+</button>
        </div>
    </div>
        
        `
    })
    return menuHtml
}
function renderMenuOptions(item) {
    for(item of item) {
            optionHtml += `
            <div class="option" >
                <div class="option-item">
                <h1>${item.optionName}</h1>
                <p>${item.optionsDescription}</p>
                </div>
            <div>
                <input type="checkbox">
                <label for="checkbox"></label>
            </div>
            </div>

         `
    }
        return optionHtml

}

document.querySelectorAll(".add-item-btn").forEach(btn => btn.addEventListener("click", () => {
    
    let id = btn.parentElement.parentElement.id
    menuArray.forEach(item => {
        if(item.id == id) {
            console.log(item)
            document.querySelector(".options-section").style.display = "inline"
         /*  item.options.forEach(option => {
            console.log(option)*/
                document.querySelector(".options-section").innerHTML += renderMenuOptions(item.options)
          // })*/
        }
    })
}))