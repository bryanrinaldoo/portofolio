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

// skills

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toogleSkills(){
    let itemClass = this.parentNode.className

    for(i= 0; i<skillsContent.length;i++){
        skillsContent[i].className= 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className= 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toogleSkills)
})