import phoBowl from './images/die-griechen-Y11iTVE2DFA-unsplash.jpg'

function createHomepage(){
    const section = document.createElement('section')
    section.classList.add('home')

    section.appendChild(createTextContainer())
    section.appendChild(createImgContainer())

    return section
}

function createTextContainer(){
    const textContainer = document.createElement('div')
    textContainer.classList.add('text-container')

    const h1 = document.createElement('h1')
    h1.classList.add('red-text')
    h1.textContent = 'Phở'
    textContainer.appendChild(h1)

    const squigglyLineContainer = document.createElement('div')
    squigglyLineContainer.classList.add('holder')
    textContainer.appendChild(squigglyLineContainer)

    const squigglyLine1 = document.createElement('div')
    squigglyLine1.classList.add('ellipse')
    squigglyLineContainer.appendChild(squigglyLine1)

    const squigglyLine2 = document.createElement('div')
    squigglyLine2.classList.add('ellipse', 'ellipse2')
    squigglyLineContainer.appendChild(squigglyLine2)

    const h2 = document.createElement('h2')
    h2.innerHTML = 'A Bowl of Love From <span class="red-text">Pho Delicious</span> For You'
    textContainer.appendChild(h2)

    const p = document.createElement('p')
    p.textContent = "Phở or pho is a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat. Pho is a popular food in Vietnam where it is served in households, street stalls and restaurants countrywide. Pho is considered Vietnam's national dish"
    textContainer.appendChild(p)

    const buttonContainer = document.createElement('div')
    textContainer.appendChild(buttonContainer)

    const button = document.createElement('button')
    button.classList.add('btn')
    button.textContent = 'Order Now'
    buttonContainer.appendChild(button)

    return textContainer
}

function createImgContainer(){
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const img = new Image()
    img.src = phoBowl
    imgContainer.appendChild(img)

    const unsplashCredit = document.createElement('div')
    unsplashCredit.classList.add('unsplash')
    unsplashCredit.innerHTML =  "Photo by <a href=\"https://unsplash.com/@diegriechen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">DIE GRIECHEN</a> on <a href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>"
    imgContainer.appendChild(unsplashCredit)
    
    return imgContainer
}

export {createHomepage}