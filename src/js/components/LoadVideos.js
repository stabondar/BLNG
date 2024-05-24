import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hls from 'hls.js'

gsap.registerPlugin(ScrollTrigger)

export default class LoadVideos
{
    constructor()
    {
        this.main = document.querySelector('.main')
        this.sections = document.querySelectorAll('[load-videos]')

        if(!this.sections.length) return

        this.sections.forEach(section => this.loadVideo(section))
        // this.init()
    }

    init()
    {
        this.sections.forEach(section => 
        {
            let loaded = false

            ScrollTrigger.create(
            {
                trigger: section,
                start: 'top 200%',

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
        let videos = [...section.querySelectorAll('video')]

        videos.map(el => 
        {
            const div = el.querySelector('div')
            const url = div.getAttribute('data-src')

            if(el.canPlayType("application/vnd.apple.mpegurl")) 
            {
                el.src = url
                el.play()
                div.remove()
            } else if(Hls.isSupported())
            {
                const hls = new Hls({capLevelToPlayerSize: false, ignoreDevicePixelRatio: true, autoLevelCapping: 10});

                hls.on(Hls.Events.MANIFEST_PARSED, function() 
                {
                    hls.currentLevel = hls.levels.length - 1;
                })

                hls.loadSource(url)
                hls.attachMedia(el)
                el.play()
                div.remove()
            }
        })
    }
}