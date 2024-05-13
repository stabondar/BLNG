import Swiper from 'swiper';
import 'swiper/css'

export default class Features
{
    constructor()
    {
        this.section = document.querySelector('.features')
        this.sliderParent = this.section.querySelector('.features_slider')

        this.arrowPrev = this.section.querySelectorAll('.slider-arrow')[0]
        this.arrowNext = this.section.querySelectorAll('.slider-arrow')[1]

        this.swiper = null

        this.init()
    }

    init()
    {
        this.swiper = new Swiper(this.sliderParent, 
        {
            speed: 1000,
            spaceBetween: 20,
            slidesPerView: 'auto',
            preventInteractionOnTransition: true,
            grabCursor: true,
        })

        this.arrowPrev.addEventListener('click', () => this.swiper.slidePrev())
        this.arrowNext.addEventListener('click', () => 
        {
            if(this.swiper.activeIndex !== this.swiper.slides.length - 3)
            {
                this.swiper.slideNext()
            }
        })

        this.swiper.on('slideChange', () => 
        {
            if(window.innerWidth > 1600)
            {
                if(this.swiper.activeIndex !== this.swiper.slides.length - 3)
                {
                    this.swiper.allowSlideNext = true
                } else
                {
                    this.swiper.allowSlideNext = false
                }
            }
        })

        setTimeout(() => this.swiper.slidesPerViewDynamic(), 200)
    }
}