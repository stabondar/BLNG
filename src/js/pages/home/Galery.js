import Swiper from 'swiper';
import {Controller, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/controller'
import 'swiper/css/autoplay'
import EventEmitter from '@js/components/EventEmitter';

export default class Galery extends EventEmitter
{
    constructor()
    {
        super()

        this.cursor = document.querySelector('.cursor')
        this.cursorText = this.cursor.querySelector('._14')
        this.list = document.querySelector('.galery_list')
        this.section = document.querySelector('.galery')
        this.mainSliders = this.section.querySelectorAll('.galery_slider')

        this.delaySpeed = 3200
        this.swipers = []

        this.mainSliders.forEach(slider => this.init(slider))

        this.tabs = this.section.querySelectorAll('.galery_tab')
        
        this.tabs[0].classList.add('active')
        this.mainSliders[0].classList.add('active')

        this.swipers.forEach(swiper => swiper.autoplay.stop())
        this.swipers[0].autoplay.start()


        this.tabs.forEach(tab =>
        {
            tab.addEventListener('click', () =>
            {
                this.tabs.forEach(tab => tab.classList.remove('active'))
                tab.classList.add('active')

                this.swipers.forEach(swiper => swiper.autoplay.stop())
                this.swipers[Array.from(this.tabs).indexOf(tab)].autoplay.start()

                this.mainSliders.forEach(slider => slider.classList.remove('active'))
                this.mainSliders[Array.from(this.tabs).indexOf(tab)].classList.add('active')
            })
        })

        this.list.addEventListener('mouseenter', () => this.cursor.classList.add('show'))
        this.list.addEventListener('mouseleave', () => this.cursor.classList.remove('show'))

        this.update()
    }

    init(slider)
    {
        const previewSliderParent = slider.querySelector('.galery_preview-parent')
        
        const swiper = new Swiper(slider, 
        {
            modules: [Controller, Autoplay],
            loop: true,
            autoplay: 
            {
                delay: this.delaySpeed,
            },
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

        const slideNext = slider.querySelector('.galery_right')
        const slidePrev = slider.querySelector('.galery_left')

        slideNext.addEventListener('click', () => swiper.slideNext())
        slidePrev.addEventListener('click', () => swiper.slidePrev())

        slidePrev.addEventListener('mouseenter', () => this.cursorText.innerHTML = 'Previous')
        slideNext.addEventListener('mouseenter', () => this.cursorText.innerHTML = 'Next')

        swiper.controller.control = previewSwiper
        previewSwiper.controller.control = swiper

        // swiper.on('slideChange', () => 
        // {
        //     slider.style.setProperty('--progress', swiper.realIndex / (swiper.slides.length - 1))
        // })

        // this.on('tick', () => 
        // {
        //     console.log(swiper.autoplayTimeLeft)
        // })

        swiper.on('autoplayTimeLeft', () => 
        {
            // get percentage of time left
            let timeLeft = swiper.autoplay.timeLeft / this.delaySpeed
            slider.style.setProperty('--progress', 1 - timeLeft)
        })

        this.swipers.push(swiper)
    }

    updateIndexes()
    {
        this.hero.style.setProperty('--current', this.swiper.realIndex)
    }

    update()
    {
        this.trigger('tick')
        window.requestAnimationFrame(() => this.update())
    }
}