import { deepClone } from '@/assets/utils/utils'

export const citySelectFilter = ( storage: object[], cityName: string ) => {
    if ( cityName === 'Все гoрoда' ) {
        return storage
    }
    return deepClone( storage )
        .filter( ( item: any ) => item.order_city === cityName )
}