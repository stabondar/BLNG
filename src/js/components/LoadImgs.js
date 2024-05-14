import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class LoadImgs
{
    constructor()
    {
        this.main = document.querySelector('.main')
        this.sections = document.querySelectorAll('section')
        this.sections = [...this.sections].slice(1)

        this.init()
    }

    init()
    {
        this.sections.forEach(section => 
        {
            ScrollTrigger.create(
            {
                trigger: section,
                start: 'top 150%',
                onEnter: () => 
                {
                    this.loadImgs(section)
                }
            })
        })
    }

    loadImgs(section)
    {
        let imgs = section.querySelectorAll('img')

        imgs.forEach(img => 
        {
            let src = img.getAttribute('data-src')
            img.src = src
        })
    }
}