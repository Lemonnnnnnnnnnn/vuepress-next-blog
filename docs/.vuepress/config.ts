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
  base : '/',
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
    ],
    sidebar ,
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
      appId : 'BJPVBH8TUS',
      apiKey : '239abfee81e599488fd25f5acf439ca3',
      indexName : 'vuepress-next-vercel'
    }),
  ],

})