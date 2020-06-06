const arrRegions = [
  {
    id: '22',
    name: 'Алтайский край',
  },
  {
    id: '28',
    name: 'Амурская область',
  },
  {
    id: '29',
    name: 'Архангельская область',
  },
  {
    id: '30',
    name: 'Астраханская область',
  },
  {
    id: '31',
    name: 'Белгородская область',
  },
  {
    id: '32',
    name: 'Брянская область',
  },
  {
    id: '33',
    name: 'Владимирская область',
  },
  {
    id: '34',
    name: 'Волгоградская область',
  },
  {
    id: '35',
    name: 'Вологодская область',
  },
  {
    id: '36',
    name: 'Воронежская область',
  },
  {
    id: '79',
    name: 'Еврейская А.обл.',
  },
  {
    id: '75',
    name: 'Забайкальский край',
  },
  {
    id: '37',
    name: 'Ивановская область',
  },
  {
    id: '38',
    name: 'Иркутская область',
  },
  {
    id: '7',
    name: 'Кабардино-Балкарская Республика',
  },
  {
    id: '39',
    name: 'Калининградская область',
  },
  {
    id: '40',
    name: 'Калужская область',
  },
  {
    id: '41',
    name: 'Камчатский край',
  },
  {
    id: '9',
    name: 'Карачаево-Черкесская Республика',
  },
  {
    id: '42',
    name: 'Кемеровская область',
  },
  {
    id: '43',
    name: 'Кировская область',
  },
  {
    id: '44',
    name: 'Костромская область',
  },
  {
    id: '23',
    name: 'Краснодарский край',
  },
  {
    id: '24',
    name: 'Красноярский край',
  },
  {
    id: '45',
    name: 'Курганская область',
  },
  {
    id: '46',
    name: 'Курская область',
  },
  {
    id: '47',
    name: 'Ленинградская область',
  },
  {
    id: '48',
    name: 'Липецкая область',
  },
  {
    id: '49',
    name: 'Магаданская область',
  },
  {
    id: '77',
    name: 'Москва',
  },
  {
    id: '50',
    name: 'Москва и Московская область',
  },
  {
    id: '50',
    name: 'Московская область',
  },
  {
    id: '51',
    name: 'Мурманская область',
  },
  {
    id: '83',
    name: 'Ненецкий АО',
  },
  {
    id: '52',
    name: 'Нижегородская область',
  },
  {
    id: '53',
    name: 'Новгородская область',
  },
  {
    id: '54',
    name: 'Новосибирская область',
  },
  {
    id: '55',
    name: 'Омская область',
  },
  {
    id: '56',
    name: 'Оренбургская область',
  },
  {
    id: '57',
    name: 'Орловская область',
  },
  {
    id: '58',
    name: 'Пензенская область',
  },
  {
    id: '59',
    name: 'Пермский край',
  },
  {
    id: '25',
    name: 'Приморский край',
  },
  {
    id: '60',
    name: 'Псковская область',
  },
  {
    id: '1',
    name: 'Республика Адыгея',
  },
  {
    id: '4',
    name: 'Республика Алтай',
  },
  {
    id: '2',
    name: 'Республика Башкортостан',
  },
  {
    id: '3',
    name: 'Республика Бурятия',
  },
  {
    id: '5',
    name: 'Республика Дагестан',
  },
  {
    id: '6',
    name: 'Республика Ингушетия',
  },
  {
    id: '8',
    name: 'Республика Калмыкия',
  },
  {
    id: '10',
    name: 'Республика Карелия',
  },
  {
    id: '11',
    name: 'Республика Коми',
  },
  {
    id: '91',
    name: 'Республика Крым',
  },
  {
    id: '12',
    name: 'Республика Марий Эл',
  },
  {
    id: '13',
    name: 'Республика Мордовия',
  },
  {
    id: '14',
    name: 'Республика Саха (Якутия)',
  },
  {
    id: '15',
    name: 'Республика Северная Осетия',
  },
  {
    id: '16',
    name: 'Республика Татарстан',
  },
  {
    id: '17',
    name: 'Республика Тыва',
  },
  {
    id: '19',
    name: 'Республика Хакасия',
  },
  {
    id: '61',
    name: 'Ростовская область',
  },
  {
    id: '62',
    name: 'Рязанская область',
  },
  {
    id: '63',
    name: 'Самарская область',
  },
  {
    id: '78',
    name: 'Санкт-Петербург',
  },
  {
    id: '78',
    name: 'Санкт-Петербург и Ленинградская область',
  },
  {
    id: '64',
    name: 'Саратовская область',
  },
  {
    id: '65',
    name: 'Сахалинская область',
  },
  {
    id: '66',
    name: 'Свердловская область',
  },
  {
    id: '92',
    name: 'Севастополь',
  },
  {
    id: '67',
    name: 'Смоленская область',
  },
  {
    id: '26',
    name: 'Ставропольский край',
  },
  {
    id: '68',
    name: 'Тамбовская область',
  },
  {
    id: '69',
    name: 'Тверская область',
  },
  {
    id: '70',
    name: 'Томская область',
  },
  {
    id: '71',
    name: 'Тульская область',
  },
  {
    id: '72',
    name: 'Тюменская область',
  },
  {
    id: '18',
    name: 'Удмуртская Республика',
  },
  {
    id: '73',
    name: 'Ульяновская область',
  },
  {
    id: '27',
    name: 'Хабаровский край',
  },
  {
    id: '86',
    name: 'Ханты-Мансийский АО',
  },
  {
    id: '74',
    name: 'Челябинская область',
  },
  {
    id: '20',
    name: 'Чеченская Республика',
  },
  {
    id: '21',
    name: 'Чувашская Республика',
  },
  {
    id: '87',
    name: 'Чукотский АО',
  },
  {
    id: '89',
    name: 'Ямало-Ненецкий АО',
  },
  {
    id: '76',
    name: 'Ярославская область',
  },
];

export default arrRegions;