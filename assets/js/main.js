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

// scroll 

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// make navbar visible 

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY>= 80){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

// scroll up button 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 560){
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)


// dark theme 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})