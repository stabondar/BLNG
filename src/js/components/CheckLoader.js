export const CheckLoader = async (delay) =>
{
    const main = document.querySelector('main')
    const page = main.getAttribute('data-transition-page')

    switch(page)
    {
        case 'home':
            return await import('@jsTransition/HomeLoader').then(module => new module.default(delay))

        case 'about':
            return await import('@jsTransition/AboutLoader').then(module => new module.default(delay))

        case 'news':
            return await import('@jsTransition/NewsLoader').then(module => new module.default(delay))

        case 'news-inner':
            return await import('@jsTransition/NewsLoader').then(module => new module.default(delay))
    }
}