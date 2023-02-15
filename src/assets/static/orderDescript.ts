export type Ts = string[]

// Стили текста в ордерах
export const textSizes = <Ts>[ '16px', '10px', '16px', '10px' ]
export const textColors = <Ts>[ '#061a33e6', '#0c284680', '#061a33e6', '#07213d80' ]

// Параметры в ордере
export const txtSectData= [
    { name: 'Адрес', description: 'order_adress' },
    { name: 'Тип', description: 'order_type' },
    { name: 'Кол-во комнат', description: 'order_rooms' },
    { name: 'Oписание', description: 'order_description' }
]