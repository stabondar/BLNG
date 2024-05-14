import App from '@js/App'
import gsap from 'gsap'
import imagesLoaded from 'imagesloaded'

export default class GlobalLoader
{
    constructor(pageAnimation, pageContent, container, once)
    {
        this.app = new App()

        this.pageAnimation = pageAnimation
        this.pageContent = pageContent
        this.once = once

        this.hero = document.querySelector('header')
        this.loader = document.querySelector('.loader')
        this.loaderTop = this.loader.querySelectorAll('.loader_part')[0]
        this.loaderBot = this.loader.querySelectorAll('.loader_part')[1]
        this.loaderText = this.loader.querySelector('._22')
        // this.loaderCounter = this.loader.querySelector('div')
        this.container = container

        this.allowLoad = false

        this.loadImg()
        // this.init()
    }

    loadImg()
    {
        const images = [...this.hero.querySelectorAll('img'), document.querySelector('.video-section').querySelector('img')];

        if(images.length === 0)
        {
            this.init()
            return
        }

        // imagesLoaded(images, { background: true }).on('progress', instance => 
        // {
        //     // const progress = instance.progressedCount / instance.images.length * 100;
        //     // this.loaderCounter.innerHTML = Math.round(progress) + '%';
        // })

        const imgPlay = new Promise(resolve =>
        {
            imagesLoaded(images, { background: true }, () =>
            {
                resolve()
                this.init()
            })
        })
    }

    reveal()
    {
        let delay = 0

        gsap.set(this.container, {autoAlpha: 1})
        this.pageAnimation(delay)
        this.pageContent()
        this.once()
    }

    complete()
    {
        this.loader.classList.add('hidden')
        this.loader.style.setProperty('background', '#212121')
    }

    scrolltop()
    {
        window.scrollTo({top: 1, behavior: 'instant'})
    }

    init()
    {
        this.tl = gsap.timeline({defaults: { duration: .8, ease: 'power1.inOut', 
            onStart: () => !this.allowLoad && this.update(),
            onComplete: () => this.complete() 
        }})

        this.tl.to(this.loaderTop, {y: '-51vh'}, 0)
        .to(this.loaderBot, {y: '51vh'}, 0)
        // .to(this.loaderText, {opacity: 0, }, 0)
    }

    update()
    {
        const interval = setInterval(() =>
        {
            if(!this.allowLoad && this.tl.progress() > 0.05)
            {
                this.allowLoad = true
                clearInterval(interval)
                this.scrolltop()
                this.reveal()
            }
        }, 10)
    }
}