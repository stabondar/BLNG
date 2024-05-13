import gsap from 'gsap'
import App from '@js/App'

export default class Burger
{
    constructor()
    {
        this.app = new App()
        this.scroll = this.app.scroll.lenis

        this.body = document.querySelector('body')
        this.burger = document.querySelector('.burger')
        this.burgerBody = document.querySelector('.burger_body')
        this.trigger = document.querySelector('.nav_burger')
        this.items = [...this.burger.querySelectorAll('.burger_item'), ...this.burger.querySelectorAll('.burger_product')]

        this.init()

        window.addEventListener('resize', () => this.allowInnerScroll())
    }

    allowInnerScroll()
    {
        if(this.burgerBody.getBoundingClientRect().height > window.innerHeight)
        {
            this.burger.style.overflowY = 'scroll'
        } else
        {
            this.burger.style.overflowY = 'clip'
        }
    }

    init()
    {
        this.trigger.addEventListener('click', () => this.toggle())

        this.items.forEach((item, index) => item.addEventListener('click', () => this.toggle()))

        // this.burgerBotItems.forEach((item, index) =>
        // {
        //     item.style.setProperty('--delay', `${index * 0.1 + 0.1}s`)
        // })

        // this.burgerTopItems.forEach((item, index) =>
        // {
        //     item.style.setProperty('--delay', `${index * 0.1 + 0.1}s`)
        // })
    }

    toggle()
    {
        
        if(this.body.classList.contains('burger-open'))
        {
            this.body.classList.remove('burger-open')
            
            this.scroll.start()
        } else
        {
            this.body.classList.add('burger-open')
            this.allowInnerScroll()

            this.scroll.stop()
        }
    }
}