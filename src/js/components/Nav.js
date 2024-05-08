import App from "@js/App"

export default class Nav
{
    constructor()
    {
        this.app = new App()
        this.scroll = this.app.scroll.lenis

        this.body = document.querySelector('body')
        this.navTrigger = document.querySelector('.nav_drop')
        this.navOverlay = document.querySelector('.nav-overlay-bg')
        this.overlayItems = document.querySelectorAll('.nav-overlay-item')

        this.init()
        this.scrollToSection()
    }

    scrollToSection()
    {
        this.overlayItems.forEach((item, index) => 
        {
            item.addEventListener('click', () => 
            {
                let targetSection = item.getAttribute('data-section')
                let section = document.querySelector(`[${targetSection}]`)

                let offset = 0

                index == this.overlayItems.length - 1 ? offset = -100 : offset = 0

                this.body.classList.remove('nav-drop-open')
                this.scroll.scrollTo(section, {duration: 1, offset: offset})
            })
        })
    }

    init()
    {
        this.navTrigger.addEventListener('click', () => 
        {
            if(this.body.classList.contains('nav-drop-open'))
            {
                this.body.classList.remove('nav-drop-open')
            } else
            {
                this.body.classList.add('nav-drop-open')
            }
        })

        this.navOverlay.addEventListener('mouseenter', () => 
        {
            this.body.classList.remove('nav-drop-open')
        })
    }
}