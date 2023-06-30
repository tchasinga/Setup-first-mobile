
const menuHamberger = document.querySelector('.menu-hamberger')
const navMenu = document.querySelector('.nav-links')

menuHamberger.addEventListener('click', () =>{
    navMenu.classList.toggle('mobile-menu')
})

// Change image Using JavaScript

let getImg = document.querySelector('.imgChange')
getImg.innerHTML = `
<img id="image" src="img/MrOne.jpg" alt="">
`;

const image = document.getElementById('image')
let images = [
    'img/MrOne.jpg',
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

