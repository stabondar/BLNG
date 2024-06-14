import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/free-mode'

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
            modules: [FreeMode],
            speed: 1000,
            spaceBetween: 20,
            slidesPerView: 3,
            preventInteractionOnTransition: false,
            freeMode: 
            {
                enabled: true,  
            },
            grabCursor: true,
            breakpoints: 
            {
                1280:
                {
                    slidesPerView: 3
                },
                768:
                {
                    freeMode: false,
                    slidesPerView: 2
                },
                300:
                {
                    slidesPerView: 1.2
                },
            }
        })

        this.arrowPrev.addEventListener('click', () => this.swiper.slidePrev())
        this.arrowNext.addEventListener('click', () => this.swiper.slideNext())
        // this.arrowNext.addEventListener('click', () => 
        // {
        //     if(this.swiper.activeIndex !== this.swiper.slides.length - 3)
        //     {
        //         this.swiper.slideNext()
        //     }
        // })

        this.swiper.on('slideChange', () => 
        {
            // if(window.innerWidth > 1600)
            // {
            //     if(this.swiper.activeIndex !== this.swiper.slides.length - 3)
            //     {
            //         this.swiper.allowSlideNext = true
            //     } else
            //     {
            //         this.swiper.allowSlideNext = false
            //     }
            // }
        })

        setTimeout(() => this.swiper.slidesPerViewDynamic(), 200)
    }
}