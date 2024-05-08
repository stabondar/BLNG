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
        this.tl = gsap.timeline({paused: true})

        this.tl.from(this.paths, {drawSVG: '0%', stagger: {amount: 0.5}, ease: 'none'})

        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top 60%', end: '+=1500px', scrub: 1,
            animation: this.tl
        })
    }
}