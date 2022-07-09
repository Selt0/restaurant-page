import {loadPage} from './index'

function createHeader(){
    const header = document.createElement('header')
    const logo = document.createElement('span')

    logo.classList.add('logo', 'red-text')
    logo.textContent = 'Pho Delicious'

    header.appendChild(logo)
    header.appendChild(createNav())

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

    return header
}

export { createHeader }