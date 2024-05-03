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
    }

    init()
    {
        this.tl = gsap.timeline({paused: true})

        this.tl.fromTo(this.mask, {width: '120vw'}, {width: '340px'})
        .fromTo(this.title, {opacity: 0}, {opacity: 1}, '<80%')
        .fromTo(this.tiles, {opacity: 0}, {opacity: 1, stagger: 0.2}, '<0.2')

        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top top', end: 'bottom 150%',
            scrub: true, animation: this.tl
        })
    }
}