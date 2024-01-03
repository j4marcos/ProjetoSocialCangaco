
const page1 = document.querySelector("section.page1") 
const nav = document.querySelector('nav')




// window.addEventListener('scroll', fixNav)

// function fixNav() {
//     console.log("scrol..");
//     //window.scrollY > nav.offsetHeight +150)
//     if(window.scrollY > nav.offsetHeight) {
//         nav.classList.add('active')
//         console.log("oi");
//     } else {
//         nav.classList.remove('active')
//     }


// }

setTimeout(() => {
    page1.querySelector(".background").classList.add("active")
},10)