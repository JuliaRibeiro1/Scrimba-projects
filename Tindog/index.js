import {dogs} from "./data.js"
let dogsProfiles = dogs

let likeBtn = document.querySelector(".like-btn")
let div = document.createElement("section")
let profilesSection = document.querySelector(".profiles-section")
let profilesHtml = document.querySelector(".profiles")
let c ;

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
let i = 0

let currentProfile;
renderProfile(dogsProfiles)

function a(profile) {
    document.querySelector(".current-img").src = profile[0].avatar[i]
}


function renderProfile(profile) {
  let imgsDots =""
  if(profile[0].avatar.length > 1) {
   profile[0].avatar.map(img => {
       imgsDots += `<button class="dot"></button>`
   })
}
/*let a = document.querySelector(".dots-container")
    a.children[i].style.cssText = "background-color:white"*/
  
//  let span =  `<span class="dots-container">${imgsDots}</span>`
  let currentImg = profile[0].avatar.length > 1 ? profile[0].avatar[i]: profile[0].avatar[0]
  
   // div.innerHTML = ""
    div.innerHTML = `
    <span class="dots-container">${imgsDots}</span>
    <img class="current-img" src=${currentImg} alt="user-profile"></img>
    <div class="user-information-container">
    <h1>${profile[0].name}, ${profile[0].age}</h1>
    <p>${profile[0].bio}</p>
    </div>`
    
    profilesHtml.append(div)
  /*  c = Array.from(document.querySelector(".dots-container").children)
    c[i].classList.toggle("toggle-dot") */
    
   
    return  profilesHtml.innerHTML = div.innerHTML
}


document.querySelector("body").addEventListener("click",(e) => {
    
if(e.target.className == "dot") {
    i = Array.from(e.target.parentNode.children).indexOf(e.target)
    a(dogsProfiles)
    e.target.classList.toggle("toggle-dot")
   // renderProfile(dogsProfiles)
    //console.log(i)
  /*  let a = document.querySelector(".dots-container")
    a.children[i].style.cssText = "background-color:white"*/
   // c[i].classList.toggle("toggle-dot")
  //  e.target.style.cssText = "background-color:white"

   
    
    
    
}
    // 
})
function oi() {
    c[i].classList.toggle("toggle-dot") 
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