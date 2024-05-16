import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

export default class Drag
{
    constructor()
    {
        this.hero = document.querySelector('.hero')
        this.sliders = this.hero.querySelectorAll('.swiper-slide')
        this.nav = this.hero.querySelector('.hero_nav')

        this.init()
    }

    init()
    {
        this.sliders.forEach(slide => 
        {
            let itemToDrag = slide.querySelector('.hero_drag')

            Draggable.create(itemToDrag, 
            {
                type: 'x',
                edgeResistance: 1,
                bounds: slide,
                onDrag: () => this.updateLeft(slide, itemToDrag),
                onDragEnd: () => this.endDrag(slide, itemToDrag)
            })
        })
    }

    endDrag(slide, itemToDrag)
    {
        let slideLeft = slide.getBoundingClientRect().left
        let itemLeft = itemToDrag.getBoundingClientRect().left
        let slideWidth = slide.getBoundingClientRect().width
        let itemWidth = itemToDrag.getBoundingClientRect().width

        let left = ((itemLeft - slideLeft) + (itemWidth / 2)) / slideWidth * 100

        if(left > 75 || left < 25)
        {
            gsap.to(slide, {'--left': `50%`, duration: 0.3})
            gsap.to(this.nav, {'--opacity': 1, duration: 0.3})
            gsap.to(itemToDrag, {x: 0, duration: 0.3})
        }
    }

    updateLeft(slide, itemToDrag)
    {

        let slideLeft = slide.getBoundingClientRect().left
        let itemLeft = itemToDrag.getBoundingClientRect().left
        let slideWidth = slide.getBoundingClientRect().width
        let itemWidth = itemToDrag.getBoundingClientRect().width

        let left = ((itemLeft - slideLeft) + (itemWidth / 2)) / slideWidth * 100

        slide.style.setProperty('--left', `${left}%`)

        if(left > 80)
        {
            let delta = 1 - (left - 75) / 25
            this.nav.style.setProperty('--opacity', delta)
        }
    }
}