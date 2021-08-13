// navbar

// open and close navbar (mobile)
const navMenu = document.getElementById('nav-menu'),
      navToogle = document.getElementById('nav-toogle'),
      navClose = document.getElementById('nav-close')

if(navToogle){
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
function closeNavbar(){
    navMenu.classList.remove('show-menu')
}

if(navClose){
    navClose.addEventListener('click', closeNavbar)
}

// when clicked close navbar (mobile)
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(n => n.addEventListener('click', closeNavbar))