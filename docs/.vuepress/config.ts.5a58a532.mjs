// docs/.vuepress/config.ts
import { defineUserConfig, defaultTheme } from "vuepress";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { smoothScrollPlugin } from "@vuepress-denaro/vuepress-plugin-smooth-scroll";
var config_default = defineUserConfig({
  lang: "zh-CN",
  title: "\u4F60\u597D\uFF0C VuePress \uFF01",
  description: "\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A VuePress \u7AD9\u70B9",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "\u9996\u9875",
        link: "/"
      }
    ]
    // sidebar: {
    //   '/react/': [
    //     '08.t.md',
    //   ],
    // }
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
    smoothScrollPlugin()
    // smoothScrollPlugin({
    //   delay: 1000
    // }),
    // lightgalleryPlugin({
    //   // your options
    // }),
    // seoPlugin({
    //   hostname: 'www.linyuchen.cloud'
    // }),
  ]
  // debug : true
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovY29kZS9wZXJzb25hbC92dWVwcmVzcy1uZXh0LWJsb2cvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxccGVyc29uYWxcXFxcdnVlcHJlc3MtbmV4dC1ibG9nXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9wZXJzb25hbC92dWVwcmVzcy1uZXh0LWJsb2cvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZywgZGVmYXVsdFRoZW1lIH0gZnJvbSAndnVlcHJlc3MnXG5pbXBvcnQgeyBjb3B5Q29kZVBsdWdpbiB9IGZyb20gXCJ2dWVwcmVzcy1wbHVnaW4tY29weS1jb2RlMlwiO1xuaW1wb3J0IHsgcmVhZGluZ1RpbWVQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLXJlYWRpbmctdGltZTJcIjtcbmltcG9ydCB7IGFjdGl2ZUhlYWRlckxpbmtzUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1hY3RpdmUtaGVhZGVyLWxpbmtzJ1xuaW1wb3J0IHsgc21vb3RoU2Nyb2xsUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzLWRlbmFyby92dWVwcmVzcy1wbHVnaW4tc21vb3RoLXNjcm9sbCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGxhbmc6ICd6aC1DTicsXG4gIHRpdGxlOiAnXHU0RjYwXHU1OTdEXHVGRjBDIFZ1ZVByZXNzIFx1RkYwMScsXG4gIGRlc2NyaXB0aW9uOiAnXHU4RkQ5XHU2NjJGXHU2MjExXHU3Njg0XHU3QjJDXHU0RTAwXHU0RTJBIFZ1ZVByZXNzIFx1N0FEOVx1NzBCOScsXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgIC8vIFx1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxuICAgIG5hdmJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU5OTk2XHU5ODc1JyxcbiAgICAgICAgbGluazogJy8nLFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8vIHNpZGViYXI6IHtcbiAgICAvLyAgICcvcmVhY3QvJzogW1xuICAgIC8vICAgICAnMDgudC5tZCcsXG4gICAgLy8gICBdLFxuICAgIC8vIH1cbiAgfSksXG4gIHBsdWdpbnM6IFtcbiAgICBjb3B5Q29kZVBsdWdpbih7XG4gICAgICAvLyBcdTYzRDJcdTRFRjZcdTkwMDlcdTk4NzlcbiAgICB9KSxcbiAgICBhY3RpdmVIZWFkZXJMaW5rc1BsdWdpbih7XG4gICAgICAvLyBvcHRpb25zXG4gICAgfSksXG4gICAgcmVhZGluZ1RpbWVQbHVnaW4oe1xuICAgICAgLy8geW91ciBvcHRpb25zXG4gICAgfSksXG4gICAgc21vb3RoU2Nyb2xsUGx1Z2luKCksXG4gICAgLy8gc21vb3RoU2Nyb2xsUGx1Z2luKHtcbiAgICAvLyAgIGRlbGF5OiAxMDAwXG4gICAgLy8gfSksXG4gICAgLy8gbGlnaHRnYWxsZXJ5UGx1Z2luKHtcbiAgICAvLyAgIC8vIHlvdXIgb3B0aW9uc1xuICAgIC8vIH0pLFxuICAgIC8vIHNlb1BsdWdpbih7XG4gICAgLy8gICBob3N0bmFtZTogJ3d3dy5saW55dWNoZW4uY2xvdWQnXG4gICAgLy8gfSksXG4gIF0sXG4gIC8vIGRlYnVnIDogdHJ1ZVxuXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxrQkFBa0Isb0JBQW9CO0FBQ3BYLFNBQVMsc0JBQXNCO0FBQy9CLFNBQVMseUJBQXlCO0FBQ2xDLFNBQVMsK0JBQStCO0FBQ3hDLFNBQVMsMEJBQTBCO0FBRW5DLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsT0FBTyxhQUFhO0FBQUE7QUFBQSxJQUVsQixRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUYsQ0FBQztBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1AsZUFBZTtBQUFBO0FBQUEsSUFFZixDQUFDO0FBQUEsSUFDRCx3QkFBd0I7QUFBQTtBQUFBLElBRXhCLENBQUM7QUFBQSxJQUNELGtCQUFrQjtBQUFBO0FBQUEsSUFFbEIsQ0FBQztBQUFBLElBQ0QsbUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVckI7QUFBQTtBQUdGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
