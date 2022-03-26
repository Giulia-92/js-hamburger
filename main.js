

let burgerClose = document.querySelector(".close");
let burgerOpen = document.querySelector(".header-right > a");
console.log(burgerOpen);
let burgerMenu = document.querySelector(".hamburger-menu");


burgerOpen.addEventListener("click", myFunction)
function myFunction() 
 { //menu hamburger deve diventare visibile 
    //console.log ("ciao")

        burgerMenu.classList.add("active");
}

burgerClose.addEventListener("click", chiudi)
function chiudi (){
    burgerMenu.classList.remove("active");
}
//per richiudere la schermata del menu e rimetterla in display none riprendere la classe burgerMenu, ed inserirla nella funzione burgerClose che lavora sulla classe .close con evento click//
/*
{
    burgerClose.classList.remove("active");

function myFunction()
{
    burgerMenu.classList.add("remove");
}

//burgerOpen.addEventListener("click", myFunction)
//function myFunction(){
    //burgerMenu.classList.remove(".header-right > a");
//}






//hamburger-menù.classList.remove("header-right");
//.fas fa-bars.classList.add("hamburger-menù");*/