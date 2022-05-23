const fill = <T>(val: T, num: number): T[] => {
    return new Array<T>(num).fill(val)
}

export {
    fill
}