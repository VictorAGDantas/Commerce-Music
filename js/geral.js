//Menu Hambuguer
const menuHambuguer = document.querySelectorAll(".ico-menu");
const menuNav = document.querySelector("nav.menu-mob");
const menuLat = document.querySelector("section.menu-lateral");

for(item of menuHambuguer) {
    console.log(item);
    item.addEventListener("click", function(){
        if(document.querySelector(".menu-block")){
            menuNav.classList.remove("menu-block");
            menuLat.classList.remove("menu-block");
            
        }else{
            menuNav.classList.add("menu-block");
            menuLat.classList.add("menu-block");
        };
        //menuNav.classList.toggle("menu-block");
    });
};

//Busca

const busca = document.querySelector(".ico-busca");
const menuBusca = document.querySelector('nav.menu-busca');
const fecharBusca = document.querySelector(".ico-fechar-busca")

console.log(busca);
console.log(menuBusca);
busca.addEventListener("click", function(){
    menuBusca.classList.toggle("menu-block");
    busca.classList.toggle("op-0");
    busca.classList.toggle("op-1");
});

fecharBusca.addEventListener("click", function(){
    menuBusca.classList.toggle("menu-block");
    busca.classList.toggle("op-0");
    busca.classList.toggle("op-1");
});