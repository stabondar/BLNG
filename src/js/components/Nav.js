export default class Nav
{
    constructor()
    {
       this.body = document.querySelector('body')
       this.navTrigger = document.querySelector('.nav_drop')
       this.navOverlay = document.querySelector('.nav-overlay-bg')

       this.init()
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