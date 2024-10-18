const header = document.querySelector("header");

console.log("Hi I am attached.");


window.addEventListener ("scroll" , function() {
    header.classList.toggle("sticky" , window.scrollY >0);

});


let menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');
const box = document.querySelector('.bx');
var open = false;

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     // navlist.classList.toggle('active');
// };

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

box.addEventListener('click', ()=>{
    if(open){
        navlist.classList.remove('disblock');
        // box.innerText = "="
        open = false;
        box.classList.remove('cut-logo');
        box.classList.add('open-logo')
    }
    else{
        navlist.classList.add('disblock');
        // box.innerText = "x";
        open = true;
        box.classList.add('cut-logo');
        box.classList.remove('open-logo')
    }
    console.log('working');
    
})