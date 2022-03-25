


let burgerOpen = document.querySelector(".header-right > a");
console.log(burgerOpen);
let burgerMenu = document.querySelector(".hamburger-menu");

burgerOpen.addEventListener("click", myFunction)
function myFunction() 
 { //menu hamburger deve diventare visibile 
    //console.log ("ciao")
    burgerMenu.classList.add("active");
}

//burgerOpen.addEventListener("click", myFunction)
//function myFunction(){
    //burgerMenu.classList.remove(".header-right > a");
//}






//hamburger-menù.classList.remove("header-right");
//.fas fa-bars.classList.add("hamburger-menù");