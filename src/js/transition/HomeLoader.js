import App from '@js/App'
import gsap from 'gsap'

export default class HomeLoader
{
    constructor(delay)
    {
        this.app = new App()
        this.scroll = this.app.scroll.lenis

        this.delay = delay
        this.main = document.querySelector('main')
        this.nav = document.querySelector('.nav')

        this.init()
    }

    init()
    {
        gsap.set(this.main, {autoAlpha: 1})

        this.nav.classList.remove('white')

        if(this.app.scrollToSection != null)
        {
            let section = document.querySelector(`[${this.app.scrollToSection}]`)

            setTimeout(() => 
            {
                this.scroll.scrollTo(section, {duration: 1, offset: 0})
    
                this.app.scrollToSection = null
            }, this.delay * 2000)
        }
    }
}