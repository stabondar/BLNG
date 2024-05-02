export const CheckPages = async () =>
{
    const main = document.querySelector('main')
    const page = main.getAttribute('data-transition-page')

    switch(page)
    {
        case 'home':
            return await import('../pages/home').then(module => new module.default)
            
        // case 'news':
        //     return await import('../pages/news').then(module => new module.default)
            
        // case 'news-inner':
        //     return await import('../pages/news-inner').then(module => new module.default)
    }
}