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

        this.sections.forEach(section => this.loadVideo(section))
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
        let videos = [...section.querySelectorAll('[data-video-el]')]

        videos.map(el => 
        {
            if (Hls.isSupported()) {
                const hls = new Hls();
        
                const url = el.children[0].src;
        
                hls.loadSource(url);
                hls.attachMedia(el);
                el.play()

              } else if (el.canPlayType("application/vnd.apple.mpegurl")) 
                {
                el.src = url;
              }
        })
    }
}