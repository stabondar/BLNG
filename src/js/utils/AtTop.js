import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class AtTop
{
    constructor()
    {
        gsap.config({ force3D: true })

        const body = document.querySelector('body')
        body.classList.add('at-top')

        ScrollTrigger.create(
        {
            trigger: 'body', start: 'top top', end: '300 top',
            onLeave: () => body.classList.remove('at-top'),
            onEnterBack: () => body.classList.add('at-top'),
        })
    }
}