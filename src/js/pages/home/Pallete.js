import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EventEmitter from '@js/components/EventEmitter'

gsap.registerPlugin(ScrollTrigger)

export default class Pallete extends EventEmitter
{
    constructor()
    {
        super()

        this.text = document.querySelector('.pallete_color') 
        this.items = document.querySelectorAll('.pallete_item')

        this.videos = document.querySelector('.pallete-list').querySelectorAll('video')[0]
        this.videosParent = document.querySelectorAll('.pallete-img')

        this.videosParent[0].classList.add('active')

        this.prevVideo = null
        this.videoUrl

        this.loaded = false

        
        // this.init()
    }

    update()
    {
        let time = this.videos.currentTime
        let index = Math.floor(time / this.videoPart)
        let item = this.items[index]

        this.items.forEach(it => it.classList.remove('active'))
        item.classList.add('active')

        let text = `color #0${index + 1}`
        if(index > 8) { text = `color #${index + 1}` }

        this.text.innerHTML = text

        window.requestAnimationFrame(() => this.update())
    }

    trigger()
    {
        ScrollTrigger.create(
        {
            trigger: '.pallete-list',
            start: 'top 150%',
            onEnter: () => 
            {
                !this.loaded && this.embedVideo()
            }
        })
    }

    embedVideo()
    {
        this.loaded = true
        this.source = this.videos.querySelector('source')
        let src = this.source.getAttribute('data-src')
        this.source.setAttribute('src', src)
        this.videos.load()
        this.videos.play()

        this.videos.addEventListener('canplay', () => this.init())
    }

    init()
    {
        window.requestAnimationFrame(() => this.update())

        this.videoDuration = this.videos.duration
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

                this.videos.currentTime = this.videoPart * index
            })
        })
    }
}