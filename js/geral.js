//Menu Hambuguer
const menuHambuguer = document.querySelectorAll(".ico-menu");
const menuNav = document.querySelector("nav.menu-mob");

for(item of menuHambuguer) {
    console.log(item);
    item.addEventListener("click", function(){
        if(document.querySelector(".menu-block")){
            menuNav.classList.remove("menu-block");
        }else{
            menuNav.classList.add("menu-block");
        };
        //menuNav.classList.toggle("menu-block");
    });
};
