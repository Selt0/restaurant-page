import chef from './images/liza-pooor-dtOw5wFKHdQ-unsplash.jpg'

function createStory(){
    const section = document.createElement('section')
    section.classList.add('story')

    const h1 = document.createElement('h1')
    h1.textContent = 'About Pho Delicious'
    section.appendChild(h1)

    const para1 = document.createElement('p')
    para1.innerHTML = "At <span class='popout-text'>Pho Delicious</span>, our passion is simple: to make a healthy Vietnamese phở noodle soup offering the same robust flavors and aromas of traditional phở. That's why we've revolutionized the way phở is made; using top-grade meats to create a healthier soup broth that's lower in calories and cholesterol. Our signature broth is paired with fresh locally sourced produce, high quality ingredients and spices to produce the perfect bowl of phở. <span class='popout-text'>Pho Delicious</span> is the Health Conscious Choice™"
    section.appendChild(para1)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    section.appendChild(imgContainer)

    const img = new Image()
    img.src = chef
    imgContainer.appendChild(img)

    const unsplashCredit = document.createElement('div')
    unsplashCredit.classList.add('unsplash')
    unsplashCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@pooorliza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Liza Pooor</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    imgContainer.appendChild(unsplashCredit)


    const para2 = document.createElement('p')
    para2.innerHTML = '<span class="popout-text">Pho Delicious</span> was founded with a simple goal; to craft a healthy bowl of phở using Vietnamese flavors and spices. Established in 1983 in Minnesota, <span class="popout-text">Pho Delicious</span> has rapidly grown to be the leader in the Vietnamese food, fast casual industry.'
    section.appendChild(para2)

    const para3 = document.createElement('p')
    para3.textContent = "After the fall of Saigon in 1975, an influx of Vietnamese refugees arrived in the United States with little to their name. From humble beginnings with less than 400sq ft of space, Mr.Chef had a vision for the brand:"
    section.appendChild(para3)

    const para4 = document.createElement('p')
    para4.textContent = '“I wanted to create a way for Vietnamese refugees to assimilate into their new environment while having the opportunity to elevate their status to become entrepreneurs and being a part of the American Dream.”'
    section.appendChild(para4)

    const para5 = document.createElement('p')
    para5.innerHTML = 'In 1985 <span class="popout-text">Pho Delicious</span> expanded its brand by opening its flagship store in Minneapolis, a popular hangout spot for the Vietnamese community which still stands strong today. Shortly there after <span class="popout-text">Pho Delicious</span> pioneered the first Vietnamese franchise in the United States by expanding the brand locally and internationally.'
    section.appendChild(para5)

    const para6 = document.createElement('p')
    para6.innerHTML = 'Now with over three decades of experience and a global reach, <span class="popout-text">Pho Delicious</span> has become a household name serving millions of bowls annually worldwide.'
    section.appendChild(para6)

    return section
}

export { createStory }