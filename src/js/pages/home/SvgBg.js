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

        this.tl.from(this.paths, {duration: 1, drawSVG: '0%', stagger: {from: 'random', each: 0.1}})

        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top 80%', end: 'center center', scrub: true,
            animation: this.tl
        })
    }
}