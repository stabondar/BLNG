import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class LoadVideos
{
    constructor()
    {
        this.main = document.querySelector('.main')
        this.sections = document.querySelectorAll('[load-videos]')

        this.init()
    }

    init()
    {
        this.sections.forEach(section => 
        {
            let loaded = false

            ScrollTrigger.create(
            {
                trigger: section,
                start: 'top 150%',
                onEnter: () => 
                {
                    !loaded && this.loadVideo(section)

                    loaded = true
                }
            })
        })
    }

    loadVideo(section)
    {
        let videos = section.querySelectorAll('video')

        videos.forEach(video => 
        {
            let source = video.querySelector('source')
            let src = source.getAttribute('data-src')
            source.setAttribute('src', src)
            video.load()
            video.play()
        })
    }
}