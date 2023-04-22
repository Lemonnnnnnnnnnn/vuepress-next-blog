import { defineClientConfig, useRouteLocale } from '@vuepress/client'
import Home from './layouts/Home.vue'
import './styles/index.css'
import CursorEffects from './components/CursorEffects.vue'

export default defineClientConfig({
    layouts: {
        Home,
    },
    enhance({ app, router  }) {
    },
    setup() {
    },
    rootComponents : [CursorEffects]
})