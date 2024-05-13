import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

export default class SvgBg
{
    constructor()
    {
        this.section = document.querySelector('.video-bg')
        this.paths = this.section.querySelectorAll('path')

        this.init()
    }

    init()
    {
        let end = 0

        const getWidth = () =>
        {
            if(window.innerWidth < 479)
                end = '+=300px'
            else
                end = '+=1500px'

            return end
        }

        this.tl = gsap.timeline({paused: true})

        this.tl.from(this.paths, {drawSVG: '0%', stagger: {amount: 0.5}, ease: 'none'})

        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top 60%', end: () => getWidth, scrub: 1,
            animation: this.tl
        })
    }
}