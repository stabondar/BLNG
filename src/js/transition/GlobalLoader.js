import App from '@js/App'
import gsap from 'gsap'
import imagesLoaded from 'imagesloaded'
import Hls from 'hls.js'

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
        this.loaderText = this.loader.querySelector('._22')
        this.video = this.loader.querySelector('video')
        // this.loaderCounter = this.loader.querySelector('div')
        this.container = container

        this.allowLoad = false

        // this.loadVideo()
        this.loadImg()
        // this.init()
    }

    async loadVideo()
    {
        const div = this.video.querySelector('div')
        const url = div.getAttribute('data-src')

        if(this.video.canPlayType("application/vnd.apple.mpegurl")) 
        {
            this.video.src = url
            await this.video.play()
            await div.remove()
            await this.loadImg()
        } else if(Hls.isSupported())
        {
            const hls = new Hls()

            hls.loadSource(url)
            hls.attachMedia(this.video)
            await this.video.play()
            await div.remove()
            await this.loadImg()
        }
    }

    async loadImg()
    {
        if(document.querySelector('main').getAttribute('data-transition-page') === 'home')
        {
            const images = [...this.hero.querySelectorAll('img')]
            
            const imgPlay = new Promise(resolve =>
            {
                imagesLoaded(images, { background: true }, () =>
                {
                    resolve()
                    this.init()
                })
            })
        } else
        {
            this.init()
        }
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
        gsap.set(this.loader, {opacity: 0})
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

        this.tl.to(this.loaderTop, {y: '-101vh'}, 0)
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