import { createHeader } from './header'
import { setNavActiveItem } from './nav'
import { createHomepage } from './home'
import { createMenu } from './menu'
import { createStory } from './story'
import { createFooter } from './footer'
import './style.css'

const contentContainer = document.querySelector('#content')


function initialPageLoad(){
    contentContainer.appendChild(createHeader())
    
    // set home as active
    document.querySelector('.nav-item').classList.add('active')

    contentContainer.appendChild(createHomepage())
    contentContainer.appendChild(createFooter())
}

function loadPage(e){
    // do nothing unless user clicks directly on nav item
    if (!e.target.classList.contains('nav-item')) return
    // do nothing if user clicks on nav item showing current page
    if (e.target.classList.contains('active')) return

    document.querySelector('section').remove()
    const footer = document.querySelector('footer')
    setNavActiveItem(e.target)

    if (e.target.textContent === 'Menu'){
        contentContainer.insertBefore(createMenu(), footer)
    } else if (e.target.textContent === 'Home'){
        contentContainer.insertBefore(createHomepage(), footer)
    } else {
        contentContainer.insertBefore(createStory(), footer)
    }
}

initialPageLoad()

export { loadPage }