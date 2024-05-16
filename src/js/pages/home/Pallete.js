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
        this.text = document.querySelector('.pallete_color') 
        this.items = document.querySelectorAll('.pallete_item')

        this.videos = document.querySelector('.pallete-list').querySelectorAll('video')[0]
        this.videosParent = document.querySelectorAll('.pallete-img')
        this.fakeVideo = document.querySelector('.pallete-list').querySelector('.hidden').querySelector('video')
        this.fakeVideoSource = this.fakeVideo.querySelector('source')

        this.videosList = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10]

        this.videosParent[0].classList.add('active')

        this.prevVideo = null
        this.videoUrl

        this.loaded = false

        this.init()
        this.trigger()
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

                this.currentVideo = this.videosList[this.items.length - index - 1]
                this.source.setAttribute('src', this.currentVideo)
                // this.fakeVideoSource.setAttribute('src', this.currentVideo)
                // this.fakeVideo.load()
            })

            item.addEventListener('click', () => 
            {
                this.items.forEach(it => it.classList.remove('active'))
                item.classList.add('active')

                let time = this.videos.currentTime
                this.videos.load()
                this.videos.play()

                this.videos.currentTime = time
            })
        })
    }
}