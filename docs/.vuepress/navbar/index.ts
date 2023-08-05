import { NavbarConfig } from "vuepress";

export const navbar: NavbarConfig = [
    {
        text: '首页',
        link: '/#file-explorer',
    },
    {
        text: '前端',
        children: [
            {
                text: 'React',
                link: '/react/'
            },
            {
                text: 'Vue',
                link: '/vue/'
            },
            {
                text: 'JavaScript',
                link: '/javascript/'
            },
            {
                text: 'Webpack',
                link: '/webpack/10.起步.html'
            },
            {
                text: 'CSS',
                link: '/css/10.media.html'
            },
        ]
    },
    {
        text: '后端',
        children: [
            {
                text: 'Java',
                link: '/java/10.起步.html'
            },
            {
                text: 'Rust',
                link: '/rust/10.基本使用.html'
            },
            {
                text: 'Sql',
                link: '/sql/01.起步.html'
            },
            {
                text: 'Server',
                link: '/server/'
            },
            {
                text: 'Python',
                link: '/python/00.Vscode配置开发环境.html'
            },
        ]
    },
    {
        text: '工具',
        link: '/tools/'
    },
    {
        text: '其他',
        children: [
            {
                text: '杂谈',
                link: '/life/01.租房知识笔记.html'
            },
            {
                text: '计算机知识',
                link: '/cs/10.零宽字符.html'
            },
        ]
    }
]