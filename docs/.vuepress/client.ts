import { defineClientConfig, useRouteLocale } from '@vuepress/client'
import { useRoute } from 'vue-router'
import Home from './layouts/Home.vue'
// import Test from './components/test.ts'
import './styles/index.css'

function getElementPosition(el) {
    const docEl = document.documentElement;
    const docRect = docEl.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        x: elRect.left - docRect.left,
        y: elRect.top - docRect.top,
    };
}

export default defineClientConfig({
    layouts: {
        Home,
    },
    enhance({ app, router }) {
        // console.log(router);

        router.options.scrollBehavior = (to, from, savedPosition) => {
            if (savedPosition) {
                return window.scrollTo({
                    top: savedPosition.y,
                    behavior: 'smooth',
                });
            }
            else if (to.hash) {

                const targetAnchor = to.hash.slice(1);
                const targetElement = document.getElementById(targetAnchor) ||
                    document.querySelector(`[name='${targetAnchor}']`);
                if (targetElement) {
                    return window.scrollTo({
                        top: getElementPosition(targetElement).y,
                        behavior: 'smooth',
                    });
                }
            }
            else {
                return window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        };

        // app.component('Test', Test)
        // console.log(useRouteLocale())
        // console.log(router);
        // console.log(router.getRoutes());

        // router.beforeEach((to) => {
        //   console.log(to)
        // })

    },
    setup() {
    }
})