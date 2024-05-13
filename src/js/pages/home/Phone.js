import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Phone
{
    constructor()
    {
        this.section = document.querySelector('.phone')
        this.mask = this.section.querySelector('.phone_mask')
        this.title = this.section.querySelector('.phone_title')
        this.tiles = this.section.querySelectorAll('.phone_tile')

        this.init()
        this.videoScroll()
    }

    init()
    {
        this.tl = gsap.timeline({paused: true})

        this.mm = gsap.matchMedia()
        this.breakpoint = 479

        this.mm.add(
        {
            isDesktop: `(min-width: ${this.breakpoint + 1}px)`,
            isMobile: `(max-width: ${this.breakpoint}px)`
        }, (context) => 
        {
            let {isDesktop, isMobile} = context.conditions
            
            this.tl.fromTo(this.mask, {width: '120vw'}, {width: isDesktop ? '340px': '220px'})
            .fromTo(this.title, {opacity: 0}, {opacity: 1}, '<80%')
            .fromTo(this.tiles, {opacity: 0}, {opacity: 1, stagger: 0.2}, '<0.2')

        })


        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top top', end: 'bottom 150%',
            scrub: true, animation: this.tl
        })
    }

    videoScroll()
    {
        this.video = this.section.querySelector('video')
        console.log(this.video.currentTime)
        this.video.load()
        this.video.addEventListener('canplay', (e) => 
        {

            this.videoTl = gsap.timeline({paused: true})   

            this.videoTl.fromTo(this.video, {currentTime: 0}, {currentTime: this.video.duration || 1})

            ScrollTrigger.create(
            {
                trigger: this.section, start: 'top top', end: 'bottom 150%',
                scrub: true, animation: this.videoTl,
            })
        })
    }
}