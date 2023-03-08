import {dogs} from "./data.js"
let dogsProfiles = dogs

let likeBtn = document.querySelector(".like-btn")

let profilesSection = document.querySelector(".profiles-section")
let profilesHtml = document.querySelector(".profiles")

document.querySelectorAll(".btns-container button").forEach(button => button.addEventListener("click",(e) => {
    if(button.className == "like-btn") {
        liked(dogsProfiles)
        profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
    }
    else if(button.className == "pass-btn") {
        profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`
    }
    
    
    if(dogsProfiles.length > 1) {
    setTimeout(() => {
        dogsProfiles.shift()
        swiped(dogsProfiles)
    renderProfile(dogsProfiles)
    },500)
}
else {
   profilesSection.innerHTML = endProfiles()
}
}))

let currentProfile;
renderProfile(dogsProfiles)
function renderProfile(profile) {
   // dogsProfiles.shift()
   let imgsDots = ""
   if(profile[0].avatar.length > 1) {
    profile[0].avatar.map(img => {
        imgsDots += `<button class="dot"></button>`
    })
        
   }
    currentProfile = ""
   
  
    currentProfile = `
    <span class="dots-container">${imgsDots}</span>
    <img src=${profile[0].avatar[0]} alt="user-profile">
    <div class="user-information-container">
    <h1>${profile[0].name}, ${profile[0].age}</h1>
    <p>${profile[0].bio}</p>
    </div>`

return profilesHtml.innerHTML = currentProfile

}
function liked(profile) {
    return profile[0].hasBeenLiked = true
}
function swiped(profile) {
    return profile[0].hasBeenSwiped = true
}
function endProfiles() {
    let endText = ""
    endText = `
    <div class="end-message-container">
    <svg class="heart" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg> 
        <p class="endMessage">Oops, that's it for now, come back later for new more matches!</p>
    </div>
    `
    return endText
}