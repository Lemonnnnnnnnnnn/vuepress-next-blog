import { defineUserConfig, defaultTheme } from 'vuepress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { getSideBar } from './utils/getSideBar'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

console.log("正在生成侧边栏...")
const sidebar = getSideBar()
console.log("生成完毕！")

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/',
  title: '𝓛𝓲𝓷𝔂𝓬的小站',
  description: '输出是最好的输入，记录每一刻',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
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
        link : '/tools/'
      },
      {
        text: '其他',
        children : [
          {
            text: '杂谈',
            link: '/life/'
          },
          {
            text : '计算机知识',
            link : '/cs/'
          },
        ]
      }
    ],
    sidebar,
  }),
  plugins: [
    copyCodePlugin({
      // 插件选项
    }),
    readingTimePlugin({
      // your options
    }),
    docsearchPlugin({
      // options
      appId: 'YVXEGMS61I',
      apiKey: '5137fc76e800b649fa2df2151513d3f6',
      indexName: 'lincy-soul'
    }),
  ],

})