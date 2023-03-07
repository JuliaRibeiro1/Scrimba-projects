import {dogs} from "./data.js"
let dogsProfiles = dogs

let likeBtn = document.querySelector(".like-btn")

let profilesSection = document.querySelector(".profiles-section")
let profilesHtml = document.querySelector(".profiles")
likeBtn.addEventListener("click",function () {
        dogsProfiles.shift()
        renderProfile(dogsProfiles)
        
    })
renderProfile(dogsProfiles)
function renderProfile(profile) {
    profilesHtml.innerHTML = `
    <img src=${profile[0].avatar} alt="user-profile">
    <div class="user-information-container">
    <h1>${profile[0].name}, ${profile[0].age}</h1>
    <p>${profile[0].bio}</p>
    </div>
    
    
`
}