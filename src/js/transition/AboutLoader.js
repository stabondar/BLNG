import gsap from 'gsap'

export default class AboutLoader
{
    constructor(delay)
    {
        this.delay = delay
        this.main = document.querySelector('main')
        this.nav = document.querySelector('.nav')

        this.init()
    }

    init()
    {
        gsap.set(this.main, {autoAlpha: 1})

        this.nav.classList.add('white')
    }
}