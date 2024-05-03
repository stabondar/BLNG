import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

import Scroll from '@jsUtils/Scroll'
import { CheckPages } from '@jsComp/CheckPage'
// import { CheckLoader } from '@jsComp/CheckLoader'
import EventEmitter from '@jsComp/EventEmitter.js'
import Nav from '@jsComp/Nav'

let instance = null


export default class App extends EventEmitter
{
    constructor()
    {
        super()

        if(instance)
        {
            return instance
        }

        instance = this
        window.app = this

        this.scroll = new Scroll()
        this.nav = new Nav()
        // this.burger = new Burger()

        const destroy = () => this.trigger('destroy')
        
        // const load = async () =>
        // {
        //     // this.scroll.lenis.scrollTo(0, {offset: 0, duration: 0.1, immediate: true})

        //     CheckPages()

        //     // this.init(destroy)
        // }
        // setTimeout(() => load(), 400)

        this.init()
        // this.importComponents()
    }

    async importComponents()
    {
        const cursor = await import('@jsComp/Cursor.js').then(module => new module.default())
        const getVH = await import('@jsUtils/GetVH.js').then(module => new module.default())
        const atTop = await import('@jsUtils/AtTop.js').then(module => new module.default())
        const chengeColor = await import('@jsComp/ChangeColor.js').then(module => new module.default())

        CheckPages()
    }

    init(destroy)
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
            debug: true,
            timeout: 7000,
            prevent: ({ el }) => (el.classList && el.classList.contains('prevent')) || el.closest('.prevent'),
            transitions:
            [
                // Once Opening
                {
                    name: 'once',
                    async once (data)
                    {
                        it.globalLoader = await import('@jsTransition/GlobalLoader.js').then(module => new module.default(false, it.importComponents, data.next.container))
                    }
                },
                // {   
                //     name: 'transition',
                //     async leave(data)
                //     {
                //         const done = this.async()
                //         it.leave = await import('@jsTransition/Leave.js').then(module => new module.default(done, destroy))
                //     },
                //     async enter(data)
                //     {
                //         it.enter = await import('@jsTransition/Enter.js').then(module => new module.default(data.next.container, it.importComponents, CheckLoader))
                //     },
                // },
                // {   
                //     name: 'self',
                //     async leave(data)
                //     {
                //         const done = this.async()
                //         it.leave = await import('@jsTransition/Leave.js').then(module => new module.default(done, destroy))
                //     },
                //     async enter(data)
                //     {
                //         it.enter = await import('@jsTransition/Enter.js').then(module => new module.default(data.next.container, it.importComponents, CheckLoader))
                //     },
                // }
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
    }
}   