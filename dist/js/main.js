// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const progressBarOne = document.getElementById('progress-bar-1');
const progressBarTwo = document.getElementById('progress-bar-2');
const progressBarThree = document.getElementById('progress-bar-3');
const progressBarFour = document.getElementById('progress-bar-4');
const progressBarFive = document.getElementById('progress-bar-5');

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
progressBarOne.classList.add('w-90');
progressBarTwo.classList.add('w-90');
progressBarThree.classList.add('w-50');
progressBarFour.classList.add('w-80');
progressBarFive.classList.add('w-50');