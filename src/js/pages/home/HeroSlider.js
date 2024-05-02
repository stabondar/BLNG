import Swiper from 'swiper';
import 'swiper/css'

export default class HeroSlider
{
    constructor()
    {
        this.sliderParent = document.querySelector('.hero_slider')

        this.arrowPrev = document.querySelectorAll('.slider-arrow')[0]
        this.arrowNext = document.querySelectorAll('.slider-arrow')[1]
        this.currentSlideDiv = document.querySelector('.hero_indexes-current')
        this.totalSlidesDiv = document.querySelector('.hero_indexes-all')

        this.swiper = null

        this.init()
    }

    init()
    {
        this.swiper = new Swiper(this.sliderParent, 
        {
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            preventInteractionOnTransition: true,
            grabCursor: true,
        })

        this.arrowPrev.addEventListener('click', () => this.swiper.slidePrev())
        this.arrowNext.addEventListener('click', () => this.swiper.slideNext())

        this.totalSlidesDiv.textContent = `0${this.swiper.slides.length}`

        this.swiper.on('slideChange', () => this.updateIndexes())
    }

    updateIndexes()
    {
        this.currentSlideDiv.textContent = `0${this.swiper.realIndex + 1}`
    }
}