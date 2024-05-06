export default class Steps
{
    constructor()
    {
        this.items = document.querySelectorAll('.step-item')

        this.init()
    }

    init()
    {
        this.items.forEach(item => 
        {
            let video = item.querySelector('video')
            video.playbackRate = 0.75
        })
    }
}