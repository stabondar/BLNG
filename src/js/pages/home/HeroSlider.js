import Swiper from 'swiper';
import 'swiper/css'

export default class HeroSlider
{
    constructor()
    {
        this.hero = document.querySelector('.hero')
        this.sliderParent = this.hero.querySelector('.hero_swiper-parent')

        this.arrowPrev = this.hero.querySelectorAll('.slider-arrow')[0]
        this.arrowNext = this.hero.querySelectorAll('.slider-arrow')[1]
        this.currentSlideDiv = this.hero.querySelector('.hero_indexes-numbers')
        this.titlesDiv = this.hero.querySelector('.hero_nav-titles')
        this.allTitles = this.hero.querySelectorAll('.hero_nav-title')

        this.allTitles[0].classList.add('active')

        this.swiper = null

        this.init()
        this.setWidth()

        window.addEventListener('resize', () => this.setWidth())
    }

    init()
    {
        this.swiper = new Swiper(this.sliderParent, 
        {
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            preventInteractionOnTransition: true,
            noSwiping: true,
            noSwipingClass: 'noSwipingClass',
            grabCursor: false,
        })

        this.arrowPrev.addEventListener('click', () => this.swiper.slidePrev())
        this.arrowNext.addEventListener('click', () => this.swiper.slideNext())

        // this.totalSlidesDiv.textContent = `0${this.swiper.slides.length}`

        this.swiper.on('slideChange', () => this.updateIndexes())
    }

    updateIndexes()
    {
        this.hero.style.setProperty('--current', this.swiper.realIndex)

        this.allTitles.forEach(title => title.classList.remove('active'))
        this.allTitles[this.swiper.realIndex].classList.add('active')
    }

    setWidth()
    {
        let indexes = this.currentSlideDiv.querySelectorAll('div')
        let width

        indexes.forEach(div =>
        {
            let currentWidth = div.getBoundingClientRect().width

            if(currentWidth > width || !width)
            {
                width = currentWidth
            }
        })

        this.currentSlideDiv.style.setProperty('--width', `${width}px`)

        let titles = this.titlesDiv.querySelectorAll('div')
        let titleWidth

        titles.forEach(div =>
        {
            let currentWidth = div.getBoundingClientRect().width

            if(currentWidth > titleWidth || !titleWidth)
            {
                titleWidth = currentWidth
            }
        })

        this.titlesDiv.style.setProperty('--width', `${titleWidth}px`)
    }
}