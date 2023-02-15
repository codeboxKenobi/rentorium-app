import { deepClone } from './utils'

const filterSamples: string[] = [ 'apartment', 'house', 'studioApartment', 'loft' ]

const sorterSamples: string[] = [ 'lowPrice', 'highPrice' ]

export const sortPrice = ( storage: object[], priceDirection: string ): object[] => {
    
    priceDirection === 'lowPrice' 
        ? storage.sort( ( a: any, b: any ) => a.order_price - b.order_price )
        : storage.sort( ( a: any, b: any ) => b.order_price - a.order_price )
        return storage
}

export const selectSearch = ( storage: object[], val?: string ) => {

    let storageClone;

    if ( !val || val.includes( 'all' ) ) {
        return storage
    }

    for ( let i = 0; i < sorterSamples.length; i++ ) {
        if ( val.includes( sorterSamples[ i ] ) ) {
            storageClone = deepClone( storage )
            return sortPrice( storageClone, sorterSamples[ i ] )
        }
    }

    for ( let i = 0; i < filterSamples.length; i++ ) {
        if ( val.includes( filterSamples[ i ] ) ) {
            storageClone = deepClone( storage )
            return storageClone
                .filter( ( item: any ) => item.order_place_type === filterSamples[ i ] 
                    && item.order_rooms === Number( val.split( '' )[ val.length - 1 ] ) )
        }
    
    }
}