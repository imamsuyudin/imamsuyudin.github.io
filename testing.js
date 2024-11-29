// toogle
const navbarList = document.querySelector('.navbar-list');

// ketika hambueger di click
document.querySelector('#hamburger-menu').onclick = ( ) => {
    navbarList.classList.toggle('active');
};

// klik di luar sidebar 
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    // selama yang di click bukan hamburger dan navbar
    if(!hamburger.contains(e.target) && !navbarList.contains(e.target)){
        navbarList.classList.remove('active');
    }
});