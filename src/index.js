import {createHeader} from './header'
import {createHomepage} from './home'
import './style.css'

const contentContainer = document.querySelector('#content')


function initialPageLoad(){
    contentContainer.appendChild(createHeader())
    
    // set home as active
    document.querySelector('.nav-item').classList.add('active')

    contentContainer.appendChild(createHomepage())
}

function loadPage(e){
    // do nothing if user clicks on nav item showing current page
    if (e.target.classList.contains('active')){
        return
    }

    console.log(e.target.textContent)
}

initialPageLoad()

export { loadPage }