import { defineUserConfig, defaultTheme } from 'vuepress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { getSideBar } from './utils/getSideBar'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  base : '/vuepress-next-blog/',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar : getSideBar()
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