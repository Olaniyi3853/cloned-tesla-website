let menu = document.querySelector(".menu_for_mobile");
let mobileMenu = document.querySelector(".mobile_menu");
let hideMenu = document.querySelector(".cancel");

// hideMenu.onClick= function(){
//     mobileMenu.style.right = "-300px"
// }

menu.addEventListener("click", function(){
    mobileMenu.style.right = "0";
});


hideMenu.addEventListener("click", function(){
    mobileMenu.style.right = "-300px"
});
