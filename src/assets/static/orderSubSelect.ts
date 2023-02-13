export interface Select{
    name: string,
    fieldData: string[]
}

export const selectDataSort: Select = {
    name: 'Сортировать по :',
    fieldData: [
        'Все',
        'Сначала новые',
        'Сначала дешевые',
        'Сначала дорогие',
        '1 комната',
        '2 комнаты',
        '3 комнаты',
        '4 комнаты',
        '5 и более комнат',
        'Студия',
        'Лофт',
        'Дом'
    ]
}


