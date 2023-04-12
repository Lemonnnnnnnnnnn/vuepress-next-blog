import { defineUserConfig, defaultTheme } from 'vuepress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { getSideBar } from './utils/getSideBar'

console.log("正在生成侧边栏...")
const sidebar = getSideBar()
console.log("生成完毕！")

export default defineUserConfig({
  lang: 'zh-CN',
  base : '/vuepress-next-blog/',
  title: 'Linyc的小站',
  description: '输出是最好的输入，记录每一刻',
  head: [['link', { rel: 'icon', href: '/dog_logo_32.ico' }]],
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
    // smoothScrollPlugin(),
    // smoothScrollPlugin({
    //   delay: 1000
    // }),
    // lightgalleryPlugin({
    //   // your options
    // }),
    // seoPlugin({
    //   hostname: 'www.linyuchen.cloud'
    // }),
  ],
  // debug : true

})