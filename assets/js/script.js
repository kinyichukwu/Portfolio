// menu show button
const showMenu = (togggleId, navId) => {
    const toggle = document.getElementById(togggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// activate and remove menus
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction)) 


const mainPage = document.querySelector('.l-main')
let blur = 100

function removeBlur() {
    blur--;
    mainPage.style.filter = `blur(${blur}px)`
}

setInterval(removeBlur, 7)

var body = document.querySelector('body');
var darkMode = document.getElementById('darkMode');

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})
