import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

export default class Drag
{
    constructor()
    {
        this.hero = document.querySelector('.hero')
        this.sliders = this.hero.querySelectorAll('.swiper-slide')

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
            })
        })
    }

    updateLeft(slide, itemToDrag)
    {

        let slideLeft = slide.getBoundingClientRect().left
        let itemLeft = itemToDrag.getBoundingClientRect().left
        let slideWidth = slide.getBoundingClientRect().width
        let itemWidth = itemToDrag.getBoundingClientRect().width

        let left = ((itemLeft - slideLeft) + (itemWidth / 2)) / slideWidth * 100

        slide.style.setProperty('--left', `${left}%`)
    }
}