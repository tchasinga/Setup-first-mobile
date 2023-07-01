import { animationCode } from "./Modules/Cards.js"

animationCode()

const menuHamberger = document.querySelector('.menu-hamberger')
const navMenu = document.querySelector('.nav-links')

menuHamberger.addEventListener('click', () =>{
    navMenu.classList.toggle('mobile-menu')
})

// Change image Using JavaScript

let getImg = document.querySelector('.imgChange')
getImg.innerHTML = `
<img id="image" src="img/MrTwo.jpg" alt="">
`;

const image = document.getElementById('image')
let images = [
    'img/MrFive.jpg',
    'img/MrTwo.jpg',
    'img/MrThree.jpg',
    'img/MrFour.jpg',
    'img/MrFive.jpg',
    'img/MrSix.jpg',
    'img/MrSeven.jpg',
]

setInterval(function(){  
    let random = Math.floor(Math.random() * images.length)
    image.src = images[random]
}, 10000);

import Mydata from "./Modules/getData.js";
const displayCode = document.querySelector('.getProject');
displayCode.innerHTML += Mydata.map((LoadingDat) =>{
    const output =  `
    <div class="projectManger">
    <img src="${LoadingDat.imagine}" alt="">
   <h2>${LoadingDat.name}</h2>
   <p>${LoadingDat.about}</p>
  <button>See project</button>
 </div>
    `;
    return output;
}).join('');
