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
        this.items = this.list.querySelectorAll('.swiper-slide')
        this.section = document.querySelector('.galery')
        if(this.section.length === 0) return
        this.mainSlider = this.section.querySelector('.galery_slider')
        this.slides = this.mainSlider.querySelectorAll('.swiper-slide')

        this.delaySpeed = 3200

        this.tabs = this.section.querySelectorAll('.galery_tab')
        
        this.tabs[0].classList.add('active')
        this.mainSlider.classList.add('active')

        this.tabSlides_1 = this.mainSlider.querySelectorAll('[current-tab="1"]').length
        this.tabSlides_2 = this.mainSlider.querySelectorAll('[current-tab="2"]').length
        this.tabSlides_3 = this.mainSlider.querySelectorAll('[current-tab="3"]').length

        this.list.addEventListener('mouseenter', () => this.cursor.classList.add('show'))
        this.list.addEventListener('mouseleave', () => this.cursor.classList.remove('show'))

        this.init()
        this.update()
    }

    init()
    {
        // const previewSliderParent = slider.querySelector('.galery_preview-parent')
        
        this.swiper = new Swiper(this.mainSlider, 
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

        // const previewSwiper = new Swiper(previewSliderParent, 
        // {
        //     modules: [Controller],
        //     loop: true,
        //     speed: 1000,
        //     slidesPerView: 1,
        //     preventInteractionOnTransition: true,
        //     grabCursor: false,
        // })

        this.slideNext = this.mainSlider.querySelector('.galery_right')
        this.slidePrev = this.mainSlider.querySelector('.galery_left')

        this.slideNext.addEventListener('click', () => this.swiper.slideNext())
        this.slidePrev.addEventListener('click', () => this.swiper.slidePrev())

        this.slidePrev.addEventListener('mouseenter', () => this.cursorText.innerHTML = 'Previous')
        this.slideNext.addEventListener('mouseenter', () => this.cursorText.innerHTML = 'Next')

        this.swiper.on('slideChange', () => 
        {
            let index = this.swiper.realIndex
            let currentSlide = this.slides[index]

            let tab = currentSlide.getAttribute('current-tab') - 1

            this.tabs.forEach(tab => tab.classList.remove('active'))
            this.tabs[tab].classList.add('active')

            this.changeAutoPlay(this.swiper.realIndex)
        })

        this.tabs.forEach((tab, index) =>
        {
            tab.addEventListener('click', () =>
            {
                this.tabs.forEach(tab => tab.classList.remove('active'))
                tab.classList.add('active')

                if(index === 0)
                {
                    this.swiper.slideToLoop(0, 400)
                } else
                if(index === 1)
                {
                    this.swiper.slideToLoop(this.tabSlides_1, 400)
                }
                if(index === 2)
                {
                    this.swiper.slideToLoop(this.tabSlides_1 + this.tabSlides_2, 400)
                }
            })
        })

        this.swiper.on('autoplayTimeLeft', () => 
        {
            // get percentage of time left
            let timeLeft = this.swiper.autoplay.timeLeft / this.delaySpeed
            this.mainSlider.style.setProperty('--progress', 1 - timeLeft)
        })
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

    changeAutoPlay(index)
    {
        const currentSlide = this.slides[index]
        const video = currentSlide.querySelector('video')

        if(video)
        {
            this.swiper.autoplay.stop()
            const duration = video.duration * 1000

            setTimeout(() =>
            {
                this.swiper.autoplay.start()
                this.swiper.slideNext()
            }, duration)
        }
    }
}