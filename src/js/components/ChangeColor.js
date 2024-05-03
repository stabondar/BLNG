import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ChangeColor
{
    constructor()
    {
        this.nav = document.querySelector('.nav')
        this.footer = document.querySelector('.footer')
        this.logo = this.nav.querySelector('.nav_logo')
        this.whiteTriggers = document.querySelectorAll('[white-trigger]')
        this.blackTriggers = document.querySelectorAll('[black-trigger]')

        this.top = this.logo.getBoundingClientRect().top + this.logo.clientHeight / 2

        window.addEventListener('resize', () => this.top = this.logo.getBoundingClientRect().top + this.logo.clientHeight / 2)

        this.whiteTriggers.forEach(trigger =>
        {
            this.addWhiteNav(trigger)
        })

        this.blackTriggers.forEach(trigger =>
        {
            this.addBlackNav(trigger)
        })

    }

    addWhiteNav(trigger)
    {
        ScrollTrigger.create(
        {
            trigger: trigger, invalidateOnRefresh: true,
            start: () => `top ${this.top}`,
            onEnter: () => { this.nav.classList.add('white') },
            onLeaveBack: () => { this.nav.classList.remove('white') },
        })
    }

    addBlackNav(trigger)
    {
        ScrollTrigger.create(
        {
            trigger: trigger, invalidateOnRefresh: true,
            start: () => `top ${this.top}`,
            onEnter: () => { this.nav.classList.remove('white') },
            onLeaveBack: () => { this.nav.classList.add('white') },
        })
    }
}