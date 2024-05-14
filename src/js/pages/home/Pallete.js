import video1 from '/videos/Diversity_1.mp4?url'
import video2 from '/videos/Diversity_2.mp4?url'
import video3 from '/videos/Diversity_3.mp4?url'
import video4 from '/videos/Diversity_4.mp4?url'
import video5 from '/videos/Diversity_5.mp4?url'
import video6 from '/videos/Diversity_6.mp4?url'
import video7 from '/videos/Diversity_7.mp4?url'
import video8 from '/videos/Diversity_8.mp4?url'
import video9 from '/videos/Diversity_9.mp4?url'
import video10 from '/videos/Diversity_10.mp4?url'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Pallete
{
    constructor()
    {
        this.videos = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10]

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
            start: 'top 150%',
            onEnter: () => 
            {
                !this.loaded && this.embedVideo()
            }
        })
    }

    embedVideo()
    {
        this.createSource = `<source src="${video1}" type="video/mp4">`

        this.video.innerHTML = this.createSource
        this.video.load()
        this.video.play()

        this.source = this.video.querySelector('source')

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

                let time = this.video.currentTime

                const video = this.videos[(this.items.length - 1) - index]
                this.source.src = video
                this.video.load()
                this.video.play()

                this.video.currentTime = time
            })
        })
    }
}