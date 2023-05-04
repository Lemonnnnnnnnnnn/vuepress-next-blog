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
                link: '/webpack/'
            },
            {
                text: 'CSS',
                link: '/css/'
            },
        ]
    },
    {
        text: '后端',
        children: [
            {
                text: 'Java',
                link: '/java/10.起步.html/'
            },
            {
                text: 'Rust',
                link: '/rust/10.基本使用.html/'
            },
            {
                text: 'Sql',
                link: '/sql/'
            },
            {
                text: 'Server',
                link: '/server/'
            },
            {
                text: 'Python',
                link: '/python/'
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
                link: '/life/'
            },
            {
                text: '计算机知识',
                link: '/cs/'
            },
        ]
    }
]