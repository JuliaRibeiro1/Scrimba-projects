import { rangesHtml,profilesSection } from "./index.js"

function liked(profile) {
    return profile[0].hasBeenLiked = true
}
function swiped(profile) {
    return profile[0].hasBeenSwiped = true
}
function endProfiles() {
    document.querySelector(".btns-container").style.display = "none"
    let endText = ""
    endText = `
    <div class="message-container">
    <svg class="heart" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg> 
        <p class="endMessage">Oops, that's it for now, come back later or change the settings for new more matches!</p>
    </div>
    `
    return endText
}

function notFound() {
    document.querySelector(".btns-container").style.display = "none"
    let endText = ""
    endText = `
    <div class="message-container">
    <svg class="heart" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg> 
        <p class="endMessage">Sorry! We couldn't find anyone, try changing the settings to view more profiles</p>
    </div>
    `
    return endText
}

function renderSettings() {
    rangesHtml.innerHTML = `

      <li> 
        <div class="range-container">
            <fieldset class="field5">
                <legend>Distance</legend>
                <div class="minmax-distance"><span class="min-range-value">${localStorage.getItem("distanceMin")}</span> - <span class="max-range-value">${localStorage.getItem("distanceMax")}</span> km</div>
                <div class="inputs">
                    <input type="range" min=0 max=15 value=${localStorage.getItem("distanceMin")} id=distance-min >
                    <input type="range" min=0 max=15 value=${localStorage.getItem("ageMax")} id=distance-max >
                </div>
            </fieldset>
            </li>
            <li>
            <fieldset class="field">
            <legend>Age</legend>
                <div class="minmax-distance"><span class="min-range-value">${localStorage.getItem("ageMin")}</span> - <span class="max-range-value">${localStorage.getItem("ageMax")}</span></div>
                <div class="inputs2">
                    <input type="range" min=18 max=100 value=${JSON.parse(localStorage.getItem("ageMin"))} id=age-min >
                    <input type="range" min=18 max=100 value=${JSON.parse(localStorage.getItem("ageMax"))} id=age-max >
                </div>
        </fieldset>
        </div>
        </li>
        <button class="save-settings-btn">Save</button>
    `
    profilesSection.append(rangesHtml)
    return rangesHtml.innerHTML
}


export {swiped,liked,endProfiles,notFound,renderSettings}