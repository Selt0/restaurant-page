function createFooter(){
    const footer = document.createElement('footer')

    const github = document.createElement('a')
    github.href = 'https://github.com/Selt0'
    github.textContent = 'Github'
    github.target = '_blank'

    footer.appendChild(github)

    const instagram = document.createElement('a')
    instagram.href = '#'
    instagram.textContent = 'Instagram'
    footer.appendChild(instagram)

    const twitter = document.createElement('a')
    twitter.href = 'https://twitter.com/MMocomochi'
    twitter.textContent = 'Twitter'
    twitter.target = '_blank'
    footer.appendChild(twitter)

    const hr = document.createElement('hr')
    footer.appendChild(hr)
    return footer
}

export { createFooter }