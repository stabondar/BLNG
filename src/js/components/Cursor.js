import gsap from 'gsap'

export default class Cursor
{
    constructor()
    {
        this.cursor = document.querySelector('.cursor')

        this.mouse = {x: 0, y: 0}

        window.addEventListener('mousemove', (e) => 
        {
            this.mouse.x = e.clientX - window.innerWidth / 2
            this.mouse.y = e.clientY - window.innerHeight / 2

            gsap.to(this.cursor, {'--x': `${this.mouse.x}px`, '--y': `${this.mouse.y}px`, duration: 0.5, ease: 'power3'})
        })
    }
}