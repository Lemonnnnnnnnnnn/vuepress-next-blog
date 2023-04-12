import { defineClientConfig, useRouteLocale } from '@vuepress/client'
import { useRoute } from 'vue-router'
// import Home from './layouts/Home.vue'
import Home from './layouts/Home.vue'
import './styles/index.css'


export default defineClientConfig({
    layouts: {
        Home,
    },
    enhance({ app, router  }) {
        
    },
    setup() {
    }
})