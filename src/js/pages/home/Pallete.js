import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EventEmitter from '@js/components/EventEmitter'
import Hls from 'hls.js'

gsap.registerPlugin(ScrollTrigger)

export default class Pallete extends EventEmitter
{
    constructor()
    {
        super()

        this.text = document.querySelector('.pallete_color') 
        this.items = document.querySelectorAll('.pallete_item')

        this.video = document.querySelector('.pallete-list').querySelectorAll('video')[0]
        this.videosParent = document.querySelectorAll('.pallete-img')

        this.videosParent[0].classList.add('active')

        this.prevVideo = null
        this.videoUrl

        this.loaded = false

        
        this.loadVideo()
    }

    update()
    {
        let time = this.video.currentTime
        let index = Math.floor(time / this.videoPart)
        let item = this.items[index]

        this.items.forEach(it => it.classList.remove('active'))
        item.classList.add('active')

        let text = `color #0${index + 1}`
        if(index > 8) { text = `color #${index + 1}` }

        this.text.innerHTML = text
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
            await this.init()
        } else if(Hls.isSupported())
        {
            const hls = new Hls({capLevelToPlayerSize: false, ignoreDevicePixelRatio: true, autoLevelCapping: 10});

            hls.on(Hls.Events.MANIFEST_PARSED, function() 
            {
                hls.currentLevel = hls.levels.length - 1;
            })

            hls.loadSource(url)
            hls.attachMedia(this.video)
            await this.video.play()
            await div.remove()
            await this.init()
        }
        // if (Hls.isSupported()) {
        //     const hls = new Hls({debug: true});
    
        //     const div = this.video.querySelector('div')
        //     const url = div.getAttribute('data-src');
    
        //     hls.loadSource(url);
        //     hls.attachMedia(this.video);
        //     await this.video.play()

        //     await div.remove()
        //     await this.init()

        //   } else if (this.video.canPlayType("application/vnd.apple.mpegurl")) 
        //     {
        //     this.video.src = url;
        //     this.init()
        //   }

    }

    async init()
    {
        // window.requestAnimationFrame(() => this.update()
        setInterval(() => this.update(), 100)

        this.videoDuration = this.video.duration
        this.videoPart = this.videoDuration / this.items.length

        this.items.forEach((item, index) => 
        {
            let text = `color #0${index + 1}`  
            if(index > 8) { text = `color #${index + 1}` }
            
            item.addEventListener('click', () => 
            {
                this.text.innerHTML = text  
                this.items.forEach(it => it.classList.remove('active'))
                item.classList.add('active')

                this.video.currentTime = this.videoPart * index
            })
        })
    }
}