export interface Select{
    name: string,
    fieldData: object
}

export const selectDataSort: Select = {
    name: 'Сортировать по :',
    fieldData: {
        all: 'Все',
        lowPrice: 'Сначала дешевые',
        highPrice: 'Сначала дорогие',
        studioApartment1: 'Студия',
        apartment1: 'Кв. 1 комната',
        apartment2: 'Кв. 2 комнаты',
        apartment3: 'Кв. 3 комнаты',
        apartment4 :'Кв. 4 комнаты',   
        apartment5 :'Кв. 5 и более комнат',
        house1: 'Дом 1 комнаты',
        house2: 'Дом 2 комнаты',
        house3: 'Дом 3 комнаты',
        house4: 'Дом 4 комнаты',
        house5: 'Дом 5 и более комнат',
        loft1: 'Лофт 1 комната',
        loft2: 'Лофт 2 комнаты',
        loft3: 'Лофт 3 комнаты',
        loft4: 'Лофт 4 комнаты',
        loft5: 'Лофт 5 и более комнат',
    }
}


