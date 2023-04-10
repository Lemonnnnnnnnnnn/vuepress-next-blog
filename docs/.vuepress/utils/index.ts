// 编写一个节流函数
export function throttle(fn: Function, wait: number) {
    let timer: any = null;
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                timer = null;
            }, wait);
        }
    };
}

// export const getScrollTop = () => {
//     let scrollTop = 0
//     if (document.documentElement && document.documentElement.scrollTop) {
//         scrollTop = document.documentElement.scrollTop
//     } else if (document.body) {
//         scrollTop = document.body.scrollTop
//     }
//     return scrollTop
// }