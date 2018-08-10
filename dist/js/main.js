// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const progressbar = document.querySelectorAll('.progress-bar');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

// animate progress bar 

document.addEventListener('DOMContentLoaded', function() {
    progressbar.forEach(item => item.classList.add('w-50'));
});