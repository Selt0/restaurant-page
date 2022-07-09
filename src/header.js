import {createNav} from './nav'

function createHeader(){
    const header = document.createElement('header')
    const logo = document.createElement('span')

    logo.classList.add('logo', 'popout-text')
    logo.textContent = 'Pho Delicious'

    header.appendChild(logo)
    header.appendChild(createNav())
    return header
}

export { createHeader }