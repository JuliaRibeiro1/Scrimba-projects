import {dogsArr} from "./data.js"
import {liked,swiped,endProfiles} from "./utils.js"
//let dogsProfiles = dogsArr[0]

//localStorage.clear()
localStorage.setItem("isFirstTime",true)
let dogsProfiles = dogsArr
console.log(dogsProfiles)
if(localStorage.getItem("isFirstTime") == true) {
    console.log("Oi")
    localStorage.setItem("doggos",JSON.stringify(dogsArr[0]))
    localStorage.setItem("isFirstTime",false)
    
}

//localStorage.setItem("doggos",JSON.stringify(dogsProfiles))

let doggos = JSON.parse(localStorage.getItem("doggos"))

let currentProfile = document.createElement("div")
let profilesSection = document.querySelector(".profiles-section")
let profilesHtml = document.querySelector(".profiles")
let i = 0


doggos.length > 0 ? renderProfile(doggos[0]) : profilesSection.innerHTML = endProfiles()

//localStorage.setItem("length", JSON.stringify(dogsProfiles.length))
let length = window.localStorage.getItem("length")
let btnDisabled = true
console.log(doggos[0])
document.querySelectorAll(".btns-container button").forEach((button) => button.addEventListener("click",() => {
  i = 0
  if(btnDisabled == true) {
    if(button.className == "like-btn") { 
            liked(doggos[0])
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-like.png"></span>`
    }
     else if(button.className == "pass-btn") {
 
            profilesHtml.innerHTML += `<span class="badge-span"><img src="images/badge-nope.png"></span>`   
    }
    btnDisabled = false
    //dogsProfiles.length
  if(doggos[0].length > 1) {
        setTimeout(() => {
          
            doggos[0].shift()
            localStorage.setItem("doggos",JSON.stringify(doggos))
            swiped(doggos[0])
            renderProfile(doggos[0])
            btnDisabled=true 
 
        },900) 
}
else {
    setTimeout(() => {
      //  doggos.shift()
     // if(doggos.length > 0) {
        profilesSection.innerHTML = endProfiles()
        doggos.shift()
        
         localStorage.setItem("doggos",JSON.stringify(doggos))
         swiped(doggos[0])
     /*    renderProfile(doggos[0]) 
      }
      else {
        profilesSection.innerHTML = endProfiles()
      }*/
       
    },1000)

  }}
}))

function getCurrentImg(profile) {
    document.querySelectorAll(".dot").forEach(link => link.classList.remove('white'));
   document.querySelector(".current-img").src = profile[0].avatar[i]
   parent[i].classList.add("white")

}

function renderProfile(profile) {
   
    const {avatar,name,bio,age} = profile[0]
  let imgsDots = ""
    avatar.map((dot,index) => {
        if(index == 0) {
            imgsDots += `<button class="dot white" ></button>`
        }
        else {
            imgsDots += `<button class="dot"></button>`
        }
    })
    currentProfile.innerHTML = `
    ${avatar.length > 1? `<span class="dots-container ">${imgsDots}</span>`:""}
    <img class="current-img" src=${avatar[0]}></img>
    <div class="user-information-container">
    <h1>${name}, ${age}</h1>
    <p>${bio}</p>
    </div>`
     
    profilesHtml.append(currentProfile)

    return profilesHtml.innerHTML = currentProfile.innerHTML
}

let parent;
document.querySelector("body").addEventListener("click",(e) => {
    parent =  Array.from(document.querySelector(".dots-container").children) 
if(e.target.className == "dot") { 
    i = parent.indexOf(e.target)
    getCurrentImg(doggos)
 
}
if(e.target.className == "current-img") {   
    let imgWidth = e.target.width
    if(e.clientX < (imgWidth + 50) / 2 ){
        if(i !== 0) {
            i--
        }
    }
    else {
        if(i < parent.length -1) {
            i++
        }
    }
    getCurrentImg(doggos)
}
})
