const sidebarConfig = {
    '/01.React/': [
        'Lazyload.md',
    ],
    '/01.React/02.你/': [
        '1.md',
        '2.md',
    ],
    '/01.React/01.进阶/': [
        '1.a.md',
        '10.懒加载.md',
        '20.Transition.md',
    ],
    '/test/': [
        '1.md',
        '2.md',
    ]
}


const resolveMultiSidebarItems = (sidebarConfig) => {
    const route = '/01.React/01.%E8%BF%9B%E9%98%B6/10.%E6%87%92%E5%8A%A0%E8%BD%BD.html'
    const sidebarPath = resolveLocalePath(sidebarConfig, route)
    console.log(sidebarPath);
}


const resolveLocalePath = (
    locales,
    routePath
) => {
    const localePaths = Object.keys(locales).sort((a, b) => {
        const levelDelta = b.split('/').length - a.split('/').length
        if (levelDelta !== 0) {
            return levelDelta
        }
        return b.length - a.length
    })

    for (const localePath of localePaths) {
        if (routePath.startsWith(localePath)) {
            return localePath
        }
    }

    return '/'
}

resolveMultiSidebarItems(sidebarConfig)
