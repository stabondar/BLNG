import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Phone
{
    constructor()
    {
        this.section = document.querySelector('.phone')
        this.mask = this.section.querySelector('.phone_mask')
        this.title = this.section.querySelector('.phone_title')
        this.tiles = this.section.querySelectorAll('.phone_tile')

        this.loaded = false
        this.init()
        // this.videoScroll()

    }

    init()
    {
        this.tl = gsap.timeline({paused: true})

        this.mm = gsap.matchMedia()
        this.breakpoint = 479

        this.mm.add(
        {
            isDesktop: `(min-width: ${this.breakpoint + 1}px)`,
            isMobile: `(max-width: ${this.breakpoint}px)`
        }, (context) => 
        {
            let {isDesktop, isMobile} = context.conditions
            
            this.tl.fromTo(this.mask, {width: '120vw'}, {width: isDesktop ? '340px': '220px'})
            .fromTo(this.title, {opacity: 0}, {opacity: 1}, '<80%')
            .fromTo(this.tiles, {opacity: 0}, {opacity: 1, stagger: 0.2}, '<0.2')

        })


        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top top', end: 'bottom 150%',
            scrub: true, animation: this.tl
        })

        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top 300%',
            onEnter: () => !this.loaded && this.sequence() 
        })
    }

    sequence()
    {
        // Apply interaction to all elements with this class
        this.canvas = document.querySelector("#phone-canvas")
        this.parent = document.querySelector(".canvas-parent")

        this.sizes =
        {
            width: this.parent.getBoundingClientRect().width,
            height: this.parent.getBoundingClientRect().height
        }

        this.context = this.canvas.getContext("2d")

        this.setCanvasSize()

        const frameCount = 288
        const urlStart = '/sequence/'
        const urlEnd = '.jpg'
        const floatingZeros = 3
        const currentFrame = (index) => `${urlStart}${(index + 1).toString().padStart(floatingZeros, "0")}${urlEnd}`
        this.images = []
        this.imageFrames = { frame: 0 }

        for (let i = 0; i < frameCount; i++) 
        {
            const img = new Image()
            img.src = currentFrame(i)
            this.images.push(img)
        }

        gsap.to(this.imageFrames, 
        {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: 
            {
                trigger: this.section, start: 'top top', end: 'bottom 150%', scrub: true
            },
            onUpdate: () => this.render()
        })

        this.images[0].addEventListener('load', () => this.render())

        let iOS = !!navigator.platform.match(/iPhone|iPod|iPad/)
        let resizeTimer

        window.addEventListener("resize", function (e) 
        {
            if (iOS) {
                clearTimeout(resizeTimer)
                resizeTimer = setTimeout(function () {
                this.setCanvasSize()
                this.render()
                }, 250)
            } else {
                this.setCanvasSize()
                this.render()
            }
        })

        this.loaded = true
    }

    render()
    {
        this.setCanvasSize()

        this.context.clearRect(0, 0, this.sizes.width, this.sizes.height);
        this.drawImageProp(this.context, this.images[this.imageFrames.frame], 0, 0, this.sizes.width, this.sizes.height, 0.5, 0.5)
    }

    setCanvasSize() 
    {
        this.sizes.width = this.parent.getBoundingClientRect().width
        this.sizes.height = this.parent.getBoundingClientRect().height
        this.canvas.width = this.sizes.width
        this.canvas.height = this.sizes.height
    }

    drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) 
    {
        if (arguments.length === 2) {
        x = y = 0
        w = ctx.canvas.width
        h = ctx.canvas.height
        }
        offsetX = typeof offsetX === "number" ? offsetX : 0.5
        offsetY = typeof offsetY === "number" ? offsetY : 0.5
        if (offsetX < 0) offsetX = 0
        if (offsetY < 0) offsetY = 0
        if (offsetX > 1) offsetX = 1
        if (offsetY > 1) offsetY = 1
        let iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,
        nh = ih * r,
        cx,
        cy,
        cw,
        ch,
        ar = 1
        if (nw < w) ar = w / nw
        if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh // updated
        nw *= ar
        nh *= ar
        cw = iw / (nw / w)
        ch = ih / (nh / h)
        cx = (iw - cw) * offsetX
        cy = (ih - ch) * offsetY
        if (cx < 0) cx = 0
        if (cy < 0) cy = 0
        if (cw > iw) cw = iw
        if (ch > ih) ch = ih
        ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h)
    }
}