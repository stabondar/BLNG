import App from '@js/App'
import gsap from 'gsap'

import LoaderCanvas from './canvas/LoaderCanvas'

export default class GlobalLoader
{
    constructor(pageAnimation, pageContent, container)
    {
        this.app = new App()
        this.scroll = this.app.scroll.lenis

        this.pageAnimation = pageAnimation
        this.pageContent = pageContent

        this.loader = document.querySelector('.loader')
        this.container = container

        this.canvas = new LoaderCanvas()

        this.canvas.on('loaded', () => 
        {
            this.init()
        })

        this.scroll.stop()

        // this.init()
    }

    reveal()
    {
        let delay = 0.5

        this.pageAnimation(delay)
        this.pageContent()
    }

    complete()
    {
        this.loader.classList.add('hidden')
    }

    scrolltop()
    {
        this.scroll.start()
        this.scroll.scrollTo(0, {offset: 0, duration: 0.1, immediate: true})
    }

    init()
    {
        this.tl = gsap.timeline({defaults: { duration: 1, ease: 'power1.inOut', 
            onStart: () => this.update(),
            onComplete: () => this.complete() 
        }})

        this.tl.to(this.loader, {opacity: 0, }, 0)
    }

    update()
    {
        let allowLoad = false
        
        const interval = setInterval(() =>
        {
            if(!allowLoad && this.tl.progress() > 0.05)
            {
                this.scrolltop()
                this.reveal()
                clearInterval(interval)
                allowLoad = true
            }
        }, 10)
    }
}