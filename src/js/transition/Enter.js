import App from '@js/App'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Enter
{
    constructor(container, check, checkLoader)
    {
        this.app = new App()
        this.scroll = this.app.scroll.lenis

        this.loader = document.querySelector('.loader')

        this.tl = gsap.timeline({defaults: {duration: 0.8 , ease: 'power2.inOut'}, onStart: () => this.update(check, checkLoader)})

        this.tl.to(this.loader, {opacity: 0, onComplete: () => this.complete()})

        
    }

    complete()
    {
        this.loader.classList.add('hidden')
    }

    update(check, checkLoader)
    {
        check()
        checkLoader(0.2)

        ScrollTrigger.refresh()
        this.scroll.start()
        this.scroll.scrollTo(0, {offset: 0, duration: 0.1, immediate: true })

        // if(this.tl.progress() < 0.2 && this.loaded == false)
        // {
        //     this.loaded = true
        // }
    }
}