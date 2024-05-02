export default class GetFooterItem
{
    constructor()
    {
        this.footer = document.querySelector('footer')
        this.footerItem = this.footer.querySelector('.footer_item')

        this.height = this.footerItem.offsetHeight
        this.footer.style.setProperty('--item-height', `${this.height}px`)

        window.addEventListener('resize', () =>
        {
            this.height = this.footerItem.offsetHeight
            this.footer.style.setProperty('--item-height', `${this.height}px`)
        })
    }
}