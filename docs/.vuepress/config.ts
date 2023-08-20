import { defineUserConfig, defaultTheme } from 'vuepress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { getSideBar , generateSidebar } from './utils/getSideBar'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { navbar } from './navbar'

console.log("正在生成侧边栏...")
generateSidebar()
console.log("生成完毕！")

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/',
  title: 'lyc的小站',
  description: '输出是最好的输入，记录每一刻',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: defaultTheme({
    // 默认主题配置
    navbar,
    sidebar : (await import('./locale/sidebar')).default,
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