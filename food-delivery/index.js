import { menuArray } from "./data.js"

function renderMenu() {
    let menuHtml = ""
    menuArray.forEach(item => {
        menuHtml +=  `
        <div class="item-container">
            <div class="item">
                <img src="imgs/bgimg.png">
            <div class="item-info">
                <div class="item-preview">
                    <h1 class="item-name">${item.name}</h1>
                    <p class="item-ingredients">${item.ingredients}</p>
                    <p class="item-description"></p>
                </div>
            <div class="item-price">$${item.price}</div>
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
document.querySelector(".menu-section").innerHTML += renderMenu()