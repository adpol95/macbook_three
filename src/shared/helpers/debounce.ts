type Func<T extends unknown[]> = (this: unknown, ...args: T) => void;

/**
 * ### Usage examples
 * #### 1. For methods:
 * ```ts
 *  const debouncedFunc = debounce(obj.method.bind(obj), 1000);
 * ```
 * #### 2. For regular functions:
 * ```ts
 *  const debouncedFunc = debounce(func, 1000);
 * ```
 */
export const debounce = <T extends unknown[]>(func: Func<T>, delay: number): Func<T> => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};
