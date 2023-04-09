import { defineUserConfig, defaultTheme } from 'vuepress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { seoPlugin } from "vuepress-plugin-seo2";
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'

export default defineUserConfig({
  lang: 'zh-CN',
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
    sidebar: {
      '/react/': [
        '08.t.md',
      ],
    }
  }),
  plugins: [
    copyCodePlugin({
      // 插件选项
    }),
    activeHeaderLinksPlugin({
      // options
    }),
    readingTimePlugin({
      // your options
    }),
    // lightgalleryPlugin({
    //   // your options
    // }),
    // seoPlugin({
    //   hostname: 'www.linyuchen.cloud'
    // }),
  ],
  // debug : true

})