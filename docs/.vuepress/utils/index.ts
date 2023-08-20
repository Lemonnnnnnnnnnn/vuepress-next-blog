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
