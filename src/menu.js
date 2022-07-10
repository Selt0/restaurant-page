import { menuItems } from "./menuItems";

function createMenu(){
    const section = document.createElement('section')
    section.classList.add('menu')

    const description = document.createElement('div')
    description.classList.add('description')
    section.appendChild(description)

    const h1 = document.createElement('h1')
    h1.classList.add('category')
    h1.textContent = 'Menu'
    description.appendChild(h1)

    const descriptionPara = document.createElement('p')
    descriptionPara.innerHTML = 'Our menu includes a wide-variety of Vietnamese and Asian dishes. Please take a look and give us a visit at <span class="popout-text">Pho Delicious</span>.'
    description.appendChild(descriptionPara)

    section.appendChild(populateMenu())

    return section
}


function populateMenu(){
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')

    for (const category in menuItems){
        const menuCard = document.createElement('div')
        menuCard.classList.add('menu-card')
        menuContainer.appendChild(menuCard)

        const h2 = document.createElement('h2')
        h2.textContent = category
        h2.classList.add('category')
        menuCard.appendChild(h2)

        menuItems[category].forEach(item => {
            const menuItemContainer = document.createElement('div')
            menuItemContainer.classList.add('menu-item')
            menuCard.appendChild(menuItemContainer)

            const name = document.createElement('p')
            name.classList.add('item-name')
            name.textContent = item.name
            menuItemContainer.appendChild(name)

            if (item.description) {
                const description = document.createElement('p')
                description.classList.add('item-description')
                description.textContent = item.description
                menuItemContainer.appendChild(description)
            }
        })
    }

    return menuContainer
}
export { createMenu }