// ФИЛЬТРАЦИЯ И СОРТИРОВА ОРДЕРОВ

import { deepClone } from './utils'

// Шаблоны фильтра и сортировки
const filterSamples: string[] = [ 'apartment', 'house', 'studioApartment', 'loft' ]
const sorterSamples: string[] = [ 'lowPrice', 'highPrice' ]

// функ. сортировка по цене
export const sortPrice = ( storage: object[], priceDirection: string ): object[] => {
    priceDirection === 'lowPrice' 
        ? storage.sort( ( a: any, b: any ) => a.order_price - b.order_price )
        : storage.sort( ( a: any, b: any ) => b.order_price - a.order_price )
        return storage
}

// функ. сортировки по цене, типу жилья и кол-ву комнат
export const selectSearch = ( storage: object[], val?: string ) => {
    let storageClone;

    if ( !val || val.includes( 'all' ) ) {
        return storage
    }

    // По цене: от большей к меньшей / от меньшей к большей
    for ( let i = 0; i < sorterSamples.length; i++ ) {
        if ( val.includes( sorterSamples[ i ] ) ) {
            storageClone = deepClone( storage )
            return sortPrice( storageClone, sorterSamples[ i ] )
        }
    }
    // По типу жилья и кол-ву комнат
    for ( let i = 0; i < filterSamples.length; i++ ) {
        if ( val.includes( filterSamples[ i ] ) ) {
            storageClone = deepClone( storage )
            return storageClone
                .filter( ( item: any ) => item.order_place_type === filterSamples[ i ] 
                    && item.order_rooms === Number( val.split( '' )[ val.length - 1 ] ) )
        }
    
    }
}