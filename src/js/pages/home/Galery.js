import Swiper from 'swiper';
import {Controller} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/controller'

export default class Galery
{
    constructor()
    {
        this.cursor = document.querySelector('.cursor')
        this.list = document.querySelector('.galery_list')
        this.section = document.querySelector('.galery')
        this.mainSliders = this.section.querySelectorAll('.galery_slider')

        this.mainSliders.forEach(slider => this.init(slider))

        this.tabs = this.section.querySelectorAll('.galery_tab')
        
        this.tabs[0].classList.add('active')
        this.mainSliders[0].classList.add('active')

        this.tabs.forEach(tab =>
        {
            tab.addEventListener('click', () =>
            {
                this.tabs.forEach(tab => tab.classList.remove('active'))
                tab.classList.add('active')

                this.mainSliders.forEach(slider => slider.classList.remove('active'))
                this.mainSliders[Array.from(this.tabs).indexOf(tab)].classList.add('active')
            })
        })

        this.list.addEventListener('mouseenter', () => this.cursor.classList.add('show'))
        this.list.addEventListener('mouseleave', () => this.cursor.classList.remove('show'))
    }

    init(slider)
    {
        const previewSliderParent = slider.querySelector('.galery_preview-parent')
        
        const swiper = new Swiper(slider, 
        {
            modules: [Controller],
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            preventInteractionOnTransition: true,
            noSwiping: true,
            noSwipingClass: 'h-full',
            grabCursor: false,
        })

        const previewSwiper = new Swiper(previewSliderParent, 
        {
            modules: [Controller],
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            preventInteractionOnTransition: true,
            grabCursor: false,
        })

        slider.addEventListener('click', () => swiper.slideNext())

        swiper.controller.control = previewSwiper
        previewSwiper.controller.control = swiper

        swiper.on('slideChange', () => 
        {
            slider.style.setProperty('--progress', swiper.realIndex / (swiper.slides.length - 1))
        })
    }

    updateIndexes()
    {
        this.hero.style.setProperty('--current', this.swiper.realIndex)
    }
}