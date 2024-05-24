import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

import Scroll from '@jsUtils/Scroll'
import { CheckPages } from '@jsComp/CheckPage'
import { CheckLoader } from '@jsComp/CheckLoader'
import EventEmitter from '@jsComp/EventEmitter.js'

let instance = null


export default class App extends EventEmitter
{
    constructor()
    {
        super()

        if(instance) { return instance }

        instance = this
        window.app = this

        // this.scroll = new Scroll()

        this.scrollToSection = null

        this.init()
    }

    async importComponents()
    {
        const getVH = await import('@jsUtils/GetVH.js').then(module => new module.default())
        const atTop = await import('@jsUtils/AtTop.js').then(module => new module.default())
        const chengeColor = await import('@jsComp/ChangeColor.js').then(module => new module.default())

        CheckPages()
    }

    async loadOnce()
    {
        instance.scroll = await import('@jsUtils/Scroll.js').then(module => new module.default())
        const burger = await import('@jsComp/Burger.js').then(module => new module.default())
        const cursor = await import('@jsComp/Cursor.js').then(module => new module.default())
        const nav = await import('@jsComp/Nav.js').then(module => new module.default())
        const loadIMgs = await import('@jsComp/LoadImgs.js').then(module => new module.default())
    }

    init()
    {
        let it = this

    barba.use(barbaPrefetch)

        barba.init(
        {
            schema: 
            {
                prefix: 'data-transition',
                namespace: 'page'
            },
            debug: false,
            timeout: 7000,
            prevent: ({ el }) => (el.classList && el.classList.contains('prevent')) || el.closest('.prevent'),
            transitions:
            [
                // Once Opening
                {
                    name: 'once',
                    async once (data)
                    {
                        it.globalLoader = await import('@jsTransition/GlobalLoader.js').then(module => new module.default(CheckLoader, it.importComponents, data.next.container, it.loadOnce))
                    }
                },
                {   
                    name: 'transition',
                    async leave(data)
                    {
                        const done = this.async()
                        it.leave = await import('@jsTransition/Leave.js').then(module => new module.default(done))
                    },
                    async enter(data)
                    {
                        it.enter = await import('@jsTransition/Enter.js').then(module => new module.default(data.next.container, it.importComponents, CheckLoader))
                    },
                },
                {   
                    name: 'self',
                    async leave(data)
                    {
                        const done = this.async()
                        it.leave = await import('@jsTransition/Leave.js').then(module => new module.default(done))
                    },
                    async enter(data)
                    {
                        it.enter = await import('@jsTransition/Enter.js').then(module => new module.default(data.next.container, it.importComponents, CheckLoader))
                    },
                }
            ]
        })

        barba.hooks.enter( (data) =>
        {
            let videos = data.next.container.querySelectorAll('video')

            videos.forEach(function(video) 
            {
                video.load()
            })
        })

        this.barba = barba
    }
}   

const app = new App()