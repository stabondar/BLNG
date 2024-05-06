import App from '@js/App'
import gsap from 'gsap'
import imagesLoaded from 'imagesloaded'

export default class GlobalLoader
{
    constructor(pageAnimation, pageContent, container)
    {
        this.app = new App()
        this.scroll = this.app.scroll.lenis

        this.pageAnimation = pageAnimation
        this.pageContent = pageContent

        this.hero = document.querySelector('.hero')
        this.loader = document.querySelector('.loader')
        this.loaderCounter = this.loader.querySelector('div')
        this.container = container

        this.scroll.stop()

        this.loadImg()
        // this.init()
    }

    loadImg()
    {
        const images = this.hero.querySelectorAll('img');

        imagesLoaded(images, { background: true }).on('progress', instance => 
        {
            const progress = instance.progressedCount / instance.images.length * 100;
            this.loaderCounter.innerHTML = Math.round(progress) + '%';
        })

        const imgPlay = new Promise(resolve =>
        {
            imagesLoaded(images, { background: true }, () =>
            {
                this.init()
                resolve()
            })
        })
    }

    reveal()
    {
        let delay = 0.5

        gsap.set(this.container, {autoAlpha: 1})
        // this.pageAnimation(delay)
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
        this.tl = gsap.timeline({defaults: { duration: .4, ease: 'power1.inOut', 
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