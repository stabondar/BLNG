import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Phrase
{
    constructor()
    {
        this.items = document.querySelectorAll('.animated-description')

        this.items.forEach(item => this.init(item))
    }

    init(item)
    {
        let split, tl
        let text = item.querySelector('._38')
        const animation = () =>
        {
            split = new SplitText(text, {type: 'lines, chars'})
    
            gsap.set(split.chars, {opacity: .33})
    
            tl = gsap.timeline(
            {
                scrollTrigger: 
                {
                    trigger: text, start: 'top 80%', end: 'top 25%',
                    scrub: true, invalidateOnRefresh: true,   
                }
            })
    
            tl.to(split.chars, {opacity: 1, stagger: 0.04})
        }

        animation()

        this.resizeFunc(split, tl, animation)
    }

    resizeFunc(split, tl, animation)
    {
        let windowWidth = window.innerWidth
        const checkWidth = () => 
        {
            let afterWidth = window.innerWidth
            if (windowWidth !== afterWidth)
            {
                if(windowWidth >= 1440) return
                split.revert()
                tl.kill()
                animation()
            }
            windowWidth = window.innerWidth
        }

        function debounce(func) {
            let timer
            return function (event) 
            {
                if (timer) clearTimeout(timer);
                timer = setTimeout(func, 300, event);
            }
        }

        window.addEventListener("resize", debounce(function (e) {checkWidth()}))
    }
}