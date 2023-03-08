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
    dogsProfiles.shift()
    swiped(dogsProfiles)
    setTimeout(() => {
    renderProfile(dogsProfiles)
    },500)
}))

let currentProfile;
renderProfile(dogsProfiles)
function renderProfile(profile) {
    currentProfile = ""
    console.log(profile.length)
    if(profile.length > 0) {
    currentProfile = `
    <img src=${profile[0].avatar} alt="user-profile">
    <div class="user-information-container">
    <h1>${profile[0].name}, ${profile[0].age}</h1>
    <p>${profile[0].bio}</p>
    </div>
`}
else {
    currentProfile = endProfiles()
}

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
        <p>That's it for now! Come back later for more matches</p>
    `
    return endText
}