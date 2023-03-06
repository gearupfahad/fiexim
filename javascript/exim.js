const menubtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');


// px offset when navbar activates 
const offset =50;


// add click event to menu bar 
menubtn.addEventListener('click', () => {
    // toggle the menu open class 
    menu.classList.toggle('menu-open');
    });


    // add scroll event listner to the page 
    window.addEventListener("scroll", () => {
    // if the page is scrolled by 50px or more 
    if (pageYOffset > offset) {
        // active navbar 
        navbar .classList.add('navbar-active');
        } else {
            // deactiev navbar 
            navbar.classList.remove('navbar-active');
            }
            });