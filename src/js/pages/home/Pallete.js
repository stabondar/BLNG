import video from '@static/CamAnimated hand yin yang.mp4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Pallete
{
    constructor()
    {
        this.text = document.querySelector('.pallete_color') 
        this.items = document.querySelectorAll('.pallete_item')

        this.video = document.querySelector('.pallete-img').querySelector('video')

        this.loaded = false

        this.init()
        this.trigger()
    }

    trigger()
    {
        ScrollTrigger.create(
        {
            trigger: '.pallete-img',
            start: 'top bottom',
            onEnter: () => 
            {
                !this.loaded && this.embedVideo()
            }
        })
    }

    embedVideo()
    {
        this.createSource = `<source src="${video}" type="video/mp4">`

        this.video.innerHTML = this.createSource
        this.video.load()
        this.video.play()

        this.loaded = true
    }

    init()
    {
        this.items.forEach((item, index) => 
        {
            let text = `color #0${index + 1}`  
            if(index > 8) { text = `color #${index + 1}` }

            item.addEventListener('mouseenter', () => 
            {
                this.text.innerHTML = text  

                this.items.forEach(it => it.classList.remove('active'))
                item.classList.add('active')
            })
        })
    }
}