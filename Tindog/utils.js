import { rangesHtml, profilesHtml} from "./index.js"

let isSettingsOpen = false
const get = element => document.querySelector(element)
let profilesSection = get(".profiles-section")
let currentProfileHtml = document.createElement("div")
function liked(profile) {
    return profile.hasBeenLiked = true
}
function swiped(profile) {
    return profile.hasBeenSwiped = true
}
function ageConditions(obj) {
    return obj.age >= localStorage.getItem("ageMin") && obj.age <= localStorage.getItem("ageMax")
 }
 function distanceConditions(obj) {
     return obj.distance/1000 >= localStorage.getItem("distanceMin") && obj.distance/1000 <= localStorage.getItem("distanceMax")
 }
 function removeFadeAnimation(direction) {
    setTimeout(()=> { 
        get(".profiles").classList.remove(`active-fade-${direction}`)  
        },500)
}
function renderProfile(profile) {
    get(".btns-container").classList.add("open")
    const {avatar,name,bio,age,distance,id} = profile[0]
    let checkDistance = distance >= 1000 ? `${distance / 1000}km away` : `${distance} metres away`
    let imgsDots = ""
    avatar.map((dot,index) => {
        if(index == 0) {
            imgsDots += `<button class="dot white" ></button>`
        }
        else {
            imgsDots += `<button class="dot"></button>`
        }
    })
    currentProfileHtml.innerHTML = `
    ${avatar.length > 1? `<span class="dots-container">${imgsDots}</span>`:""}
    <img class="current-img" src=${avatar[0]}></img>
    <div class="user">
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
        <span class="user-location"><img id=location-icon src=images/icons8-location-50.png>${checkDistance}</span>
    </div>`
    profilesHtml.append(currentProfileHtml)
    return profilesHtml.innerHTML = currentProfileHtml.innerHTML
}

function updateSettingsDisplay() {
    console.log("OI")
    if(!isSettingsOpen) {
        rangesHtml.classList.add("open")
            renderSettings()
            isSettingsOpen = true
       }
       else {
            rangesHtml.classList.remove("open")
            isSettingsOpen = false
        }
}
function endProfiles() {
    get(".btns-container").classList.remove("open")
    let endProfileWarning = ""
    endProfileWarning  = `
    <div class="message-container">
    <svg class="heart" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg> 
        <p class="endMessage">Oops, that's it for now, come back later or change the settings for new more matches!</p>
    </div>
    `
    return endProfileWarning
}

function notFound() {
    get(".btns-container").classList.remove("open")
    let notFoundWarning = ""
    notFoundWarning = `
    <div class="message-container">
    <svg class="heart" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg> 
        <p class="endMessage">Sorry! you have viewed all profiles,try changing the settings or come back later to view more</p>
    </div>
    `
    return notFoundWarning
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
function setCurrentSettings() {
    localStorage.setItem("ageMin", get("#age-min").value)
    localStorage.setItem("ageMax",get("#age-max").value)
    localStorage.setItem("distanceMin",get("#distance-min").value)
    localStorage.setItem("distanceMax", get("#distance-max").value)

}

function updateLocalStorageArr(filter,dogsProfiles) {
    localStorage.setItem("doggos",JSON.stringify(filter))          
    localStorage.setItem("dogsArr",JSON.stringify(dogsProfiles))
}
export {swiped,liked,removeFadeAnimation,updateSettingsDisplay,renderProfile,endProfiles,notFound,renderSettings,ageConditions,distanceConditions,setCurrentSettings,updateLocalStorageArr}