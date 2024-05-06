export default class Pallete
{
    constructor()
    {
        this.text = document.querySelector('.pallete_color') 
        this.items = document.querySelectorAll('.pallete_item')

        this.init()
    }

    init()
    {
        this.items.forEach((item, index) => 
        {
            let text = `color #0${index + 1}`  
            if(index > 8) { text = `color #${index + 1}` }

            item.addEventListener('mouseenter', () => 
            {
                this.text.innerHTML = text  

                this.items.forEach(it => it.classList.remove('active'))
                item.classList.add('active')
            })
        })
    }
}