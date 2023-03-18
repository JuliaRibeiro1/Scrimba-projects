import {dogsArr} from "./data.js"
import {liked,swiped,endProfiles} from "./utils.js"
//let dogsProfiles = dogsArr[0]

let dogsProfiles = dogsArr

localStorage.setItem("isFirstTime",true)
if(localStorage.getItem("isFirstTime") == true) {
    console.log("Oi")
    localStorage.setItem("doggos",JSON.stringify(dogsProfiles[0]))
    localStorage.setItem("isFirstTime",false)
    
}

//localStorage.setItem("doggos",JSON.stringify(dogsProfiles))

setTimeout(() => {
    localStorage.setItem("doggos",JSON.stringify(dogsProfiles))
},6000)
let doggos = JSON.parse(localStorage.getItem("doggos"))
let oi = doggos[0].filter(check)
localStorage.setItem("doggos",JSON.stringify(oi))
let currentProfile = document.createElement("div")
let rangesHtml = document.createElement("nav")
rangesHtml.className = "settings-nav"
let profilesSection = document.querySelector(".profiles-section")
let profilesHtml = document.querySelector(".profiles")
let i = 0
console.log(doggos)

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
  if(oi.length > 1) {
    
    console.log(oi)
        setTimeout(() => {
           // if(doggos[0]) {
             
            oi.shift()
            localStorage.setItem("doggos",JSON.stringify(doggos))
            swiped(oi)
            renderProfile(oi)
            btnDisabled=true 
            
           // }
           /* else {
                doggos[0].shift() 
            }*/

 
        },900)
    
       
}
else {
    setTimeout(() => {
        profilesSection.innerHTML = endProfiles()
        oi.shift()
        
         localStorage.setItem("doggos",JSON.stringify(oi))
         swiped(oi)
       
    },1000)

  }}
}))

function check(obj) {
    if(obj.distance > 1000) {
        return true
    }
}
function getCurrentImg(profile) {
    document.querySelectorAll(".dot").forEach(link => link.classList.remove('white'));
   document.querySelector(".current-img").src = profile[0].avatar[i]
   parent[i].classList.add("white")

}

function renderProfile(profile) {
   
    const {avatar,name,bio,age,distance} = profile[0]
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

    currentProfile.innerHTML = `
    ${avatar.length > 1? `<span class="dots-container ">${imgsDots}</span>`:""}
    <img class="current-img" src=${avatar[0]}></img>
    <div class="user-information-container">
    <h1>${name}, ${age}</h1>
    <p>${bio}</p>
    <span class="user-location"><img id=location-icon src=images/icons8-location-50.png>${checkDistance}</span>
    </div>`
     
    profilesHtml.append(currentProfile)

    return profilesHtml.innerHTML = currentProfile.innerHTML
}

let parent;
let parent2;
document.querySelector("body").addEventListener("click",(e) => {
    parent =  Array.from(document.querySelector(".dots-container").children) 
   
if(e.target.className == "dot") { 
    i = parent.indexOf(e.target)
    getCurrentImg(doggos[0])
 
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
    getCurrentImg(doggos[0])
}


document.querySelector("body").addEventListener("input",(e) => {
    parent2 =  Array.from(document.querySelector(".inputs").children) 
    if(e.target == parent2[0]) {
        if(e.target.value > parent2[1].value - 1) {
            e.target.value = parent2[1].value - 1
        }
        console.log("OI")
        document.querySelector(".min-range-value").textContent = e.target.value
       
    }
    else if(e.target == parent2[1]) {
        document.querySelector(".max-range-value").textContent = e.target.value
    }
        
    })
})
document.querySelector(".settings-icon").addEventListener("click",() => {
    console.log("OI")
    renderSettings()
})
function renderSettings() {
   
    rangesHtml.innerHTML = `
        
        
      <li> 
        <div class="range-container">
            <fieldset>
                <legend>Distance</legend>
                <div class="minmax"><span class="min-range-value">0</span> - <span class="max-range-value">25</span> km</div>
                <div class="inputs">
                <input type="range" min="0" max="50" value="0" id="slider-1" >
                <input type="range" min="0" max="50" value="25" id="slider-2" >
                </div>
            </fieldset>
        </div>
    </li>
   
    `
    profilesSection.append(rangesHtml)
    return rangesHtml.innerHTML
}

//  <div class="slider-track"></div>
/*<li><div class="range_slider"><input type="range" step="1" class="two-range-slider" min="0" max="50" >
<input type="range" step="2" class="two-range-slider" min="0" max="50" ></div>
</li>
<li><input type="range">
</li>**/