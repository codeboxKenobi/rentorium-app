export interface Select{
    name: string,
    fieldData: string[]
}

// Параметры фильтра и сортировки ордеров
export const selectCitySort: Select = {
    name: 'Все гoрoда',
    fieldData: [
        'Все гoрoда',
        'Ялта',
        'Алушта',
        'Симферoпoль',
        'Севастoпoль',
    ]
}


