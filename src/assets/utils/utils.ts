export const deepClone = ( payload: object ) => {
    return JSON.parse( JSON.stringify( payload ))
}