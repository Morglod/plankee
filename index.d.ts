export const pee: <T extends any[]>(
    e?: ((...args: T) => void)[]
) => [(r: (...args: T) => void) => () => void, (...r: T) => void];
