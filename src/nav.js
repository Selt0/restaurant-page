import {loadPage} from './index'

function createNav(){
    const nav = document.createElement('nav')
    const navItems = ['Home', 'Menu', 'Our Story']

    navItems.forEach(item => {
        const el = document.createElement('a')
        el.classList.add('nav-item')
        el.textContent = item
        nav.appendChild(el)
    })

    nav.addEventListener('click', loadPage)
    
    return nav
}

function setNavActiveItem(newActive){
    const oldActive = document.querySelector('.active')
    oldActive.classList.toggle('active')

    newActive.classList.toggle('active')
}


export { createNav, setNavActiveItem }