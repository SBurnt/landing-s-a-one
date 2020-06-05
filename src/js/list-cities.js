const arrCities = [
  {
    Name: "Адыгейск",
    Region_id: "1"
  },
  {
    Name: "Майкоп",
    Region_id: "1"
  },
  {
    Name: "Агидель",
    Region_id: "2"
  },
  {
    Name: "Баймак",
    Region_id: "2"
  },
  {
    Name: "Белебей",
    Region_id: "2"
  },
  {
    Name: "Белорецк",
    Region_id: "2"
  },
  {
    Name: "Бирск",
    Region_id: "2"
  },
  {
    Name: "Благовещенск",
    Region_id: "2"
  },
  {
    Name: "Давлеканово",
    Region_id: "2"
  },
  {
    Name: "Дюртюли",
    Region_id: "2"
  },
  {
    Name: "Ишимбай",
    Region_id: "2"
  },
  {
    Name: "Кумертау",
    Region_id: "2"
  },
  {
    Name: "Межгорье",
    Region_id: "2"
  },
  {
    Name: "Мелеуз",
    Region_id: "2"
  },
  {
    Name: "Нефтекамск",
    Region_id: "2"
  },
  {
    Name: "Октябрьский",
    Region_id: "2"
  },
  {
    Name: "Салават",
    Region_id: "2"
  },
  {
    Name: "Сибай",
    Region_id: "2"
  },
  {
    Name: "Стерлитамак",
    Region_id: "2"
  },
  {
    Name: "Туймазы",
    Region_id: "2"
  },
  {
    Name: "Уфа",
    Region_id: "2"
  },
  {
    Name: "Учалы",
    Region_id: "2"
  },
  {
    Name: "Янаул",
    Region_id: "2"
  },
  {
    Name: "Бабушкин",
    Region_id: "3"
  },
  {
    Name: "Гусиноозерск",
    Region_id: "3"
  },
  {
    Name: "Закаменск",
    Region_id: "3"
  },
  {
    Name: "Кяхта",
    Region_id: "3"
  },
  {
    Name: "Северобайкальск",
    Region_id: "3"
  },
  {
    Name: "Улан-Удэ",
    Region_id: "3"
  },
  {
    Name: "Горно-Алтайск",
    Region_id: "4"
  },
  {
    Name: "Буйнакск",
    Region_id: "5"
  },
  {
    Name: "Дагестанские Огни",
    Region_id: "5"
  },
  {
    Name: "Дербент",
    Region_id: "5"
  },
  {
    Name: "Избербаш",
    Region_id: "5"
  },
  {
    Name: "Каспийск",
    Region_id: "5"
  },
  {
    Name: "Кизилюрт",
    Region_id: "5"
  },
  {
    Name: "Кизляр",
    Region_id: "5"
  },
  {
    Name: "Махачкала",
    Region_id: "5"
  },
  {
    Name: "Хасавюрт",
    Region_id: "5"
  },
  {
    Name: "Южно-Сухокумск",
    Region_id: "5"
  },
  {
    Name: "Карабулак",
    Region_id: "6"
  },
  {
    Name: "Магас",
    Region_id: "6"
  },
  {
    Name: "Малгобек",
    Region_id: "6"
  },
  {
    Name: "Назрань",
    Region_id: "6"
  },
  {
    Name: "Баксан",
    Region_id: "7"
  },
  {
    Name: "Майский",
    Region_id: "7"
  },
  {
    Name: "Нальчик",
    Region_id: "7"
  },
  {
    Name: "Нарткала",
    Region_id: "7"
  },
  {
    Name: "Прохладный",
    Region_id: "7"
  },
  {
    Name: "Терек",
    Region_id: "7"
  },
  {
    Name: "Тырныауз",
    Region_id: "7"
  },
  {
    Name: "Чегем",
    Region_id: "7"
  },
  {
    Name: "Городовиковск",
    Region_id: "8"
  },
  {
    Name: "Лагань",
    Region_id: "8"
  },
  {
    Name: "Элиста",
    Region_id: "8"
  },
  {
    Name: "Карачаевск",
    Region_id: "9"
  },
  {
    Name: "Теберда",
    Region_id: "9"
  },
  {
    Name: "Усть-Джегута",
    Region_id: "9"
  },
  {
    Name: "Черкесск",
    Region_id: "9"
  },
  {
    Name: "Беломорск",
    Region_id: "10"
  },
  {
    Name: "Кемь",
    Region_id: "10"
  },
  {
    Name: "Кондопога",
    Region_id: "10"
  },
  {
    Name: "Костомукша",
    Region_id: "10"
  },
  {
    Name: "Лахденпохья",
    Region_id: "10"
  },
  {
    Name: "Медвежьегорск",
    Region_id: "10"
  },
  {
    Name: "Олонец",
    Region_id: "10"
  },
  {
    Name: "Петрозаводск",
    Region_id: "10"
  },
  {
    Name: "Питкяранта",
    Region_id: "10"
  },
  {
    Name: "Пудож",
    Region_id: "10"
  },
  {
    Name: "Сегежа",
    Region_id: "10"
  },
  {
    Name: "Сортавала",
    Region_id: "10"
  },
  {
    Name: "Суоярви",
    Region_id: "10"
  },
  {
    Name: "Воркута",
    Region_id: "11"
  },
  {
    Name: "Вуктыл",
    Region_id: "11"
  },
  {
    Name: "Емва",
    Region_id: "11"
  },
  {
    Name: "Инта",
    Region_id: "11"
  },
  {
    Name: "Микунь",
    Region_id: "11"
  },
  {
    Name: "Печора",
    Region_id: "11"
  },
  {
    Name: "Сосногорск",
    Region_id: "11"
  },
  {
    Name: "Сыктывкар",
    Region_id: "11"
  },
  {
    Name: "Усинск",
    Region_id: "11"
  },
  {
    Name: "Ухта",
    Region_id: "11"
  },
  {
    Name: "Волжск",
    Region_id: "12"
  },
  {
    Name: "Звенигово",
    Region_id: "12"
  },
  {
    Name: "Йошкар-Ола",
    Region_id: "12"
  },
  {
    Name: "Козьмодемьянск",
    Region_id: "12"
  },
  {
    Name: "Ардатов",
    Region_id: "13"
  },
  {
    Name: "Инсар",
    Region_id: "13"
  },
  {
    Name: "Ковылкино",
    Region_id: "13"
  },
  {
    Name: "Краснослободск",
    Region_id: "13"
  },
  {
    Name: "Рузаевка",
    Region_id: "13"
  },
  {
    Name: "Саранск",
    Region_id: "13"
  },
  {
    Name: "Темников",
    Region_id: "13"
  },
  {
    Name: "Алдан",
    Region_id: "14"
  },
  {
    Name: "Верхоянск",
    Region_id: "14"
  },
  {
    Name: "Вилюйск",
    Region_id: "14"
  },
  {
    Name: "Ленск",
    Region_id: "14"
  },
  {
    Name: "Мирный",
    Region_id: "14"
  },
  {
    Name: "Нерюнгри",
    Region_id: "14"
  },
  {
    Name: "Нюрба",
    Region_id: "14"
  },
  {
    Name: "Олекминск",
    Region_id: "14"
  },
  {
    Name: "Покровск",
    Region_id: "14"
  },
  {
    Name: "Среднеколымск",
    Region_id: "14"
  },
  {
    Name: "Томмот",
    Region_id: "14"
  },
  {
    Name: "Удачный",
    Region_id: "14"
  },
  {
    Name: "Якутск",
    Region_id: "14"
  },
  {
    Name: "Алагир",
    Region_id: "15"
  },
  {
    Name: "Ардон",
    Region_id: "15"
  },
  {
    Name: "Беслан",
    Region_id: "15"
  },
  {
    Name: "Владикавказ",
    Region_id: "15"
  },
  {
    Name: "Дигора",
    Region_id: "15"
  },
  {
    Name: "Моздок",
    Region_id: "15"
  },
  {
    Name: "Агрыз",
    Region_id: "16"
  },
  {
    Name: "Азнакаево",
    Region_id: "16"
  },
  {
    Name: "Альметьевск",
    Region_id: "16"
  },
  {
    Name: "Арск",
    Region_id: "16"
  },
  {
    Name: "Бавлы",
    Region_id: "16"
  },
  {
    Name: "Болгар",
    Region_id: "16"
  },
  {
    Name: "Бугульма",
    Region_id: "16"
  },
  {
    Name: "Буинск",
    Region_id: "16"
  },
  {
    Name: "Елабуга",
    Region_id: "16"
  },
  {
    Name: "Заинск",
    Region_id: "16"
  },
  {
    Name: "Зеленодольск",
    Region_id: "16"
  },
  {
    Name: "Казань",
    Region_id: "16"
  },
  {
    Name: "Лаишево",
    Region_id: "16"
  },
  {
    Name: "Лениногорск",
    Region_id: "16"
  },
  {
    Name: "Мамадыш",
    Region_id: "16"
  },
  {
    Name: "Менделеевск",
    Region_id: "16"
  },
  {
    Name: "Мензелинск",
    Region_id: "16"
  },
  {
    Name: "Набережные Челны",
    Region_id: "16"
  },
  {
    Name: "Нижнекамск",
    Region_id: "16"
  },
  {
    Name: "Нурлат",
    Region_id: "16"
  },
  {
    Name: "Тетюши",
    Region_id: "16"
  },
  {
    Name: "Чистополь",
    Region_id: "16"
  },
  {
    Name: "Ак-Довурак",
    Region_id: "17"
  },
  {
    Name: "Кызыл",
    Region_id: "17"
  },
  {
    Name: "Туран",
    Region_id: "17"
  },
  {
    Name: "Чадан",
    Region_id: "17"
  },
  {
    Name: "Шагонар",
    Region_id: "17"
  },
  {
    Name: "Воткинск",
    Region_id: "18"
  },
  {
    Name: "Глазов",
    Region_id: "18"
  },
  {
    Name: "Ижевск",
    Region_id: "18"
  },
  {
    Name: "Камбарка",
    Region_id: "18"
  },
  {
    Name: "Можга",
    Region_id: "18"
  },
  {
    Name: "Сарапул",
    Region_id: "18"
  },
  {
    Name: "Абаза",
    Region_id: "19"
  },
  {
    Name: "Абакан",
    Region_id: "19"
  },
  {
    Name: "Саяногорск",
    Region_id: "19"
  },
  {
    Name: "Сорск",
    Region_id: "19"
  },
  {
    Name: "Черногорск",
    Region_id: "19"
  },
  {
    Name: "Аргун",
    Region_id: "20"
  },
  {
    Name: "Грозный",
    Region_id: "20"
  },
  {
    Name: "Гудермес",
    Region_id: "20"
  },
  {
    Name: "Урус-Мартан",
    Region_id: "20"
  },
  {
    Name: "Шали",
    Region_id: "20"
  },
  {
    Name: "Алатырь",
    Region_id: "21"
  },
  {
    Name: "Канаш",
    Region_id: "21"
  },
  {
    Name: "Козловка",
    Region_id: "21"
  },
  {
    Name: "Мариинский Посад",
    Region_id: "21"
  },
  {
    Name: "Новочебоксарск",
    Region_id: "21"
  },
  {
    Name: "Цивильск",
    Region_id: "21"
  },
  {
    Name: "Чебоксары",
    Region_id: "21"
  },
  {
    Name: "Шумерля",
    Region_id: "21"
  },
  {
    Name: "Ядрин",
    Region_id: "21"
  },
  {
    Name: "Алейск",
    Region_id: "22"
  },
  {
    Name: "Барнаул",
    Region_id: "22"
  },
  {
    Name: "Белокуриха",
    Region_id: "22"
  },
  {
    Name: "Бийск",
    Region_id: "22"
  },
  {
    Name: "Горняк",
    Region_id: "22"
  },
  {
    Name: "Заринск",
    Region_id: "22"
  },
  {
    Name: "Змеиногорск",
    Region_id: "22"
  },
  {
    Name: "Камень-на-Оби",
    Region_id: "22"
  },
  {
    Name: "Новоалтайск",
    Region_id: "22"
  },
  {
    Name: "Рубцовск",
    Region_id: "22"
  },
  {
    Name: "Славгород",
    Region_id: "22"
  },
  {
    Name: "Яровое",
    Region_id: "22"
  },
  {
    Name: "Абинск",
    Region_id: "23"
  },
  {
    Name: "Анапа",
    Region_id: "23"
  },
  {
    Name: "Апшеронск",
    Region_id: "23"
  },
  {
    Name: "Армавир",
    Region_id: "23"
  },
  {
    Name: "Белореченск",
    Region_id: "23"
  },
  {
    Name: "Геленджик",
    Region_id: "23"
  },
  {
    Name: "Горячий Ключ",
    Region_id: "23"
  },
  {
    Name: "Гулькевичи",
    Region_id: "23"
  },
  {
    Name: "Ейск",
    Region_id: "23"
  },
  {
    Name: "Кореновск",
    Region_id: "23"
  },
  {
    Name: "Краснодар",
    Region_id: "23"
  },
  {
    Name: "Кропоткин",
    Region_id: "23"
  },
  {
    Name: "Крымск",
    Region_id: "23"
  },
  {
    Name: "Курганинск",
    Region_id: "23"
  },
  {
    Name: "Лабинск",
    Region_id: "23"
  },
  {
    Name: "Новокубанск",
    Region_id: "23"
  },
  {
    Name: "Новороссийск",
    Region_id: "23"
  },
  {
    Name: "Приморско-Ахтарск",
    Region_id: "23"
  },
  {
    Name: "Славянск-на-Кубани",
    Region_id: "23"
  },
  {
    Name: "Сочи",
    Region_id: "23"
  },
  {
    Name: "Темрюк",
    Region_id: "23"
  },
  {
    Name: "Тимашевск",
    Region_id: "23"
  },
  {
    Name: "Тихорецк",
    Region_id: "23"
  },
  {
    Name: "Туапсе",
    Region_id: "23"
  },
  {
    Name: "Усть-Лабинск",
    Region_id: "23"
  },
  {
    Name: "Хадыженск",
    Region_id: "23"
  },
  {
    Name: "Артемовск",
    Region_id: "24"
  },
  {
    Name: "Ачинск",
    Region_id: "24"
  },
  {
    Name: "Боготол",
    Region_id: "24"
  },
  {
    Name: "Бородино",
    Region_id: "24"
  },
  {
    Name: "Дивногорск",
    Region_id: "24"
  },
  {
    Name: "Дудинка",
    Region_id: "24"
  },
  {
    Name: "Енисейск",
    Region_id: "24"
  },
  {
    Name: "Железногорск",
    Region_id: "24"
  },
  {
    Name: "Заозерный",
    Region_id: "24"
  },
  {
    Name: "Зеленогорск",
    Region_id: "24"
  },
  {
    Name: "Игарка",
    Region_id: "24"
  },
  {
    Name: "Иланский",
    Region_id: "24"
  },
  {
    Name: "Канск",
    Region_id: "24"
  },
  {
    Name: "Кодинск",
    Region_id: "24"
  },
  {
    Name: "Красноярск",
    Region_id: "24"
  },
  {
    Name: "Лесосибирск",
    Region_id: "24"
  },
  {
    Name: "Минусинск",
    Region_id: "24"
  },
  {
    Name: "Назарово",
    Region_id: "24"
  },
  {
    Name: "Норильск",
    Region_id: "24"
  },
  {
    Name: "Сосновоборск",
    Region_id: "24"
  },
  {
    Name: "Ужур",
    Region_id: "24"
  },
  {
    Name: "Уяр",
    Region_id: "24"
  },
  {
    Name: "Шарыпово",
    Region_id: "24"
  },
  {
    Name: "Арсеньев",
    Region_id: "25"
  },
  {
    Name: "Артем",
    Region_id: "25"
  },
  {
    Name: "Большой Камень",
    Region_id: "25"
  },
  {
    Name: "Владивосток",
    Region_id: "25"
  },
  {
    Name: "Дальнегорск",
    Region_id: "25"
  },
  {
    Name: "Дальнереченск",
    Region_id: "25"
  },
  {
    Name: "Лесозаводск",
    Region_id: "25"
  },
  {
    Name: "Находка",
    Region_id: "25"
  },
  {
    Name: "Партизанск",
    Region_id: "25"
  },
  {
    Name: "Спасск-Дальний",
    Region_id: "25"
  },
  {
    Name: "Уссурийск",
    Region_id: "25"
  },
  {
    Name: "Фокино",
    Region_id: "25"
  },
  {
    Name: "Благодарный",
    Region_id: "26"
  },
  {
    Name: "Буденновск",
    Region_id: "26"
  },
  {
    Name: "Георгиевск",
    Region_id: "26"
  },
  {
    Name: "Ессентуки",
    Region_id: "26"
  },
  {
    Name: "Железноводск",
    Region_id: "26"
  },
  {
    Name: "Зеленокумск",
    Region_id: "26"
  },
  {
    Name: "Изобильный",
    Region_id: "26"
  },
  {
    Name: "Ипатово",
    Region_id: "26"
  },
  {
    Name: "Кисловодск",
    Region_id: "26"
  },
  {
    Name: "Лермонтов",
    Region_id: "26"
  },
  {
    Name: "Минеральные Воды",
    Region_id: "26"
  },
  {
    Name: "Михайловск",
    Region_id: "26"
  },
  {
    Name: "Невинномысск",
    Region_id: "26"
  },
  {
    Name: "Нефтекумск",
    Region_id: "26"
  },
  {
    Name: "Новоалександровск",
    Region_id: "26"
  },
  {
    Name: "Новопавловск",
    Region_id: "26"
  },
  {
    Name: "Пятигорск",
    Region_id: "26"
  },
  {
    Name: "Светлоград",
    Region_id: "26"
  },
  {
    Name: "Ставрополь",
    Region_id: "26"
  },
  {
    Name: "Амурск",
    Region_id: "27"
  },
  {
    Name: "Бикин",
    Region_id: "27"
  },
  {
    Name: "Вяземский",
    Region_id: "27"
  },
  {
    Name: "Комсомольск-на-Амуре",
    Region_id: "27"
  },
  {
    Name: "Николаевск-на-Амуре",
    Region_id: "27"
  },
  {
    Name: "Советская Гавань",
    Region_id: "27"
  },
  {
    Name: "Хабаровск",
    Region_id: "27"
  },
  {
    Name: "Белогорск",
    Region_id: "28"
  },
  {
    Name: "Благовещенск",
    Region_id: "28"
  },
  {
    Name: "Завитинск",
    Region_id: "28"
  },
  {
    Name: "Зея",
    Region_id: "28"
  },
  {
    Name: "Райчихинск",
    Region_id: "28"
  },
  {
    Name: "Свободный",
    Region_id: "28"
  },
  {
    Name: "Сковородино",
    Region_id: "28"
  },
  {
    Name: "Тында",
    Region_id: "28"
  },
  {
    Name: "Шимановск",
    Region_id: "28"
  },
  {
    Name: "Архангельск",
    Region_id: "29"
  },
  {
    Name: "Вельск",
    Region_id: "29"
  },
  {
    Name: "Каргополь",
    Region_id: "29"
  },
  {
    Name: "Коряжма",
    Region_id: "29"
  },
  {
    Name: "Котлас",
    Region_id: "29"
  },
  {
    Name: "Мезень",
    Region_id: "29"
  },
  {
    Name: "Мирный",
    Region_id: "29"
  },
  {
    Name: "Новодвинск",
    Region_id: "29"
  },
  {
    Name: "Няндома",
    Region_id: "29"
  },
  {
    Name: "Онега",
    Region_id: "29"
  },
  {
    Name: "Северодвинск",
    Region_id: "29"
  },
  {
    Name: "Сольвычегодск",
    Region_id: "29"
  },
  {
    Name: "Шенкурск",
    Region_id: "29"
  },
  {
    Name: "Астрахань",
    Region_id: "30"
  },
  {
    Name: "Ахтубинск",
    Region_id: "30"
  },
  {
    Name: "Ахтубинск-7",
    Region_id: "30"
  },
  {
    Name: "Знаменск",
    Region_id: "30"
  },
  {
    Name: "Камызяк",
    Region_id: "30"
  },
  {
    Name: "Нариманов",
    Region_id: "30"
  },
  {
    Name: "Харабали",
    Region_id: "30"
  },
  {
    Name: "Алексеевка",
    Region_id: "31"
  },
  {
    Name: "Белгород",
    Region_id: "31"
  },
  {
    Name: "Бирюч",
    Region_id: "31"
  },
  {
    Name: "Валуйки",
    Region_id: "31"
  },
  {
    Name: "Грайворон",
    Region_id: "31"
  },
  {
    Name: "Губкин",
    Region_id: "31"
  },
  {
    Name: "Короча",
    Region_id: "31"
  },
  {
    Name: "Новый Оскол",
    Region_id: "31"
  },
  {
    Name: "Старый Оскол",
    Region_id: "31"
  },
  {
    Name: "Строитель",
    Region_id: "31"
  },
  {
    Name: "Шебекино",
    Region_id: "31"
  },
  {
    Name: "Брянск",
    Region_id: "32"
  },
  {
    Name: "Дятьково",
    Region_id: "32"
  },
  {
    Name: "Жуковка",
    Region_id: "32"
  },
  {
    Name: "Злынка",
    Region_id: "32"
  },
  {
    Name: "Карачев",
    Region_id: "32"
  },
  {
    Name: "Клинцы",
    Region_id: "32"
  },
  {
    Name: "Мглин",
    Region_id: "32"
  },
  {
    Name: "Новозыбков",
    Region_id: "32"
  },
  {
    Name: "Почеп",
    Region_id: "32"
  },
  {
    Name: "Севск",
    Region_id: "32"
  },
  {
    Name: "Сельцо",
    Region_id: "32"
  },
  {
    Name: "Стародуб",
    Region_id: "32"
  },
  {
    Name: "Сураж",
    Region_id: "32"
  },
  {
    Name: "Трубчевск",
    Region_id: "32"
  },
  {
    Name: "Унеча",
    Region_id: "32"
  },
  {
    Name: "Фокино",
    Region_id: "32"
  },
  {
    Name: "Александров",
    Region_id: "33"
  },
  {
    Name: "Владимир",
    Region_id: "33"
  },
  {
    Name: "Вязники",
    Region_id: "33"
  },
  {
    Name: "Гороховец",
    Region_id: "33"
  },
  {
    Name: "Гусь-Хрустальный",
    Region_id: "33"
  },
  {
    Name: "Камешково",
    Region_id: "33"
  },
  {
    Name: "Карабаново",
    Region_id: "33"
  },
  {
    Name: "Киржач",
    Region_id: "33"
  },
  {
    Name: "Ковров",
    Region_id: "33"
  },
  {
    Name: "Кольчугино",
    Region_id: "33"
  },
  {
    Name: "Костерево",
    Region_id: "33"
  },
  {
    Name: "Курлово",
    Region_id: "33"
  },
  {
    Name: "Лакинск",
    Region_id: "33"
  },
  {
    Name: "Меленки",
    Region_id: "33"
  },
  {
    Name: "Муром",
    Region_id: "33"
  },
  {
    Name: "Петушки",
    Region_id: "33"
  },
  {
    Name: "Покров",
    Region_id: "33"
  },
  {
    Name: "Радужный",
    Region_id: "33"
  },
  {
    Name: "Собинка",
    Region_id: "33"
  },
  {
    Name: "Струнино",
    Region_id: "33"
  },
  {
    Name: "Судогда",
    Region_id: "33"
  },
  {
    Name: "Суздаль",
    Region_id: "33"
  },
  {
    Name: "Юрьев-Польский",
    Region_id: "33"
  },
  {
    Name: "Волгоград",
    Region_id: "34"
  },
  {
    Name: "Волжский",
    Region_id: "34"
  },
  {
    Name: "Дубовка",
    Region_id: "34"
  },
  {
    Name: "Жирновск",
    Region_id: "34"
  },
  {
    Name: "Калач-на-Дону",
    Region_id: "34"
  },
  {
    Name: "Камышин",
    Region_id: "34"
  },
  {
    Name: "Котельниково",
    Region_id: "34"
  },
  {
    Name: "Котово",
    Region_id: "34"
  },
  {
    Name: "Краснослободск",
    Region_id: "34"
  },
  {
    Name: "Ленинск",
    Region_id: "34"
  },
  {
    Name: "Михайловка",
    Region_id: "34"
  },
  {
    Name: "Николаевск",
    Region_id: "34"
  },
  {
    Name: "Новоаннинский",
    Region_id: "34"
  },
  {
    Name: "Палласовка",
    Region_id: "34"
  },
  {
    Name: "Петров Вал",
    Region_id: "34"
  },
  {
    Name: "Серафимович",
    Region_id: "34"
  },
  {
    Name: "Суровикино",
    Region_id: "34"
  },
  {
    Name: "Урюпинск",
    Region_id: "34"
  },
  {
    Name: "Фролово",
    Region_id: "34"
  },
  {
    Name: "Бабаево",
    Region_id: "35"
  },
  {
    Name: "Белозерск",
    Region_id: "35"
  },
  {
    Name: "Великий Устюг",
    Region_id: "35"
  },
  {
    Name: "Вологда",
    Region_id: "35"
  },
  {
    Name: "Вытегра",
    Region_id: "35"
  },
  {
    Name: "Грязовец",
    Region_id: "35"
  },
  {
    Name: "Кадников",
    Region_id: "35"
  },
  {
    Name: "Кириллов",
    Region_id: "35"
  },
  {
    Name: "Красавино",
    Region_id: "35"
  },
  {
    Name: "Никольск",
    Region_id: "35"
  },
  {
    Name: "Сокол",
    Region_id: "35"
  },
  {
    Name: "Тотьма",
    Region_id: "35"
  },
  {
    Name: "Устюжна",
    Region_id: "35"
  },
  {
    Name: "Харовск",
    Region_id: "35"
  },
  {
    Name: "Череповец",
    Region_id: "35"
  },
  {
    Name: "Бобров",
    Region_id: "36"
  },
  {
    Name: "Богучар",
    Region_id: "36"
  },
  {
    Name: "Борисоглебск",
    Region_id: "36"
  },
  {
    Name: "Бутурлиновка",
    Region_id: "36"
  },
  {
    Name: "Воронеж",
    Region_id: "36"
  },
  {
    Name: "Воронеж-45",
    Region_id: "36"
  },
  {
    Name: "Калач",
    Region_id: "36"
  },
  {
    Name: "Лиски",
    Region_id: "36"
  },
  {
    Name: "Нововоронеж",
    Region_id: "36"
  },
  {
    Name: "Новохоперск",
    Region_id: "36"
  },
  {
    Name: "Острогожск",
    Region_id: "36"
  },
  {
    Name: "Павловск",
    Region_id: "36"
  },
  {
    Name: "Поворино",
    Region_id: "36"
  },
  {
    Name: "Россошь",
    Region_id: "36"
  },
  {
    Name: "Семилуки",
    Region_id: "36"
  },
  {
    Name: "Эртиль",
    Region_id: "36"
  },
  {
    Name: "Вичуга",
    Region_id: "37"
  },
  {
    Name: "Гаврилов Посад",
    Region_id: "37"
  },
  {
    Name: "Заволжск",
    Region_id: "37"
  },
  {
    Name: "Иваново",
    Region_id: "37"
  },
  {
    Name: "Кинешма",
    Region_id: "37"
  },
  {
    Name: "Комсомольск",
    Region_id: "37"
  },
  {
    Name: "Кохма",
    Region_id: "37"
  },
  {
    Name: "Наволоки",
    Region_id: "37"
  },
  {
    Name: "Плес",
    Region_id: "37"
  },
  {
    Name: "Приволжск",
    Region_id: "37"
  },
  {
    Name: "Пучеж",
    Region_id: "37"
  },
  {
    Name: "Родники",
    Region_id: "37"
  },
  {
    Name: "Тейково",
    Region_id: "37"
  },
  {
    Name: "Фурманов",
    Region_id: "37"
  },
  {
    Name: "Шуя",
    Region_id: "37"
  },
  {
    Name: "Южа",
    Region_id: "37"
  },
  {
    Name: "Юрьевец",
    Region_id: "37"
  },
  {
    Name: "Алзамай",
    Region_id: "38"
  },
  {
    Name: "Ангарск",
    Region_id: "38"
  },
  {
    Name: "Байкальск",
    Region_id: "38"
  },
  {
    Name: "Бирюсинск",
    Region_id: "38"
  },
  {
    Name: "Бодайбо",
    Region_id: "38"
  },
  {
    Name: "Братск",
    Region_id: "38"
  },
  {
    Name: "Вихоревка",
    Region_id: "38"
  },
  {
    Name: "Железногорск-Илимский",
    Region_id: "38"
  },
  {
    Name: "Зима",
    Region_id: "38"
  },
  {
    Name: "Иркутск",
    Region_id: "38"
  },
  {
    Name: "Иркутск-45",
    Region_id: "38"
  },
  {
    Name: "Киренск",
    Region_id: "38"
  },
  {
    Name: "Нижнеудинск",
    Region_id: "38"
  },
  {
    Name: "Саянск",
    Region_id: "38"
  },
  {
    Name: "Свирск",
    Region_id: "38"
  },
  {
    Name: "Слюдянка",
    Region_id: "38"
  },
  {
    Name: "Тайшет",
    Region_id: "38"
  },
  {
    Name: "Тулун",
    Region_id: "38"
  },
  {
    Name: "Усолье-Сибирское",
    Region_id: "38"
  },
  {
    Name: "Усть-Илимск",
    Region_id: "38"
  },
  {
    Name: "Усть-Кут",
    Region_id: "38"
  },
  {
    Name: "Черемхово",
    Region_id: "38"
  },
  {
    Name: "Шелехов",
    Region_id: "38"
  },
  {
    Name: "Багратионовск",
    Region_id: "39"
  },
  {
    Name: "Балтийск",
    Region_id: "39"
  },
  {
    Name: "Гвардейск",
    Region_id: "39"
  },
  {
    Name: "Гурьевск",
    Region_id: "39"
  },
  {
    Name: "Гусев",
    Region_id: "39"
  },
  {
    Name: "Зеленоградск",
    Region_id: "39"
  },
  {
    Name: "Калининград",
    Region_id: "39"
  },
  {
    Name: "Краснознаменск",
    Region_id: "39"
  },
  {
    Name: "Ладушкин",
    Region_id: "39"
  },
  {
    Name: "Мамоново",
    Region_id: "39"
  },
  {
    Name: "Неман",
    Region_id: "39"
  },
  {
    Name: "Нестеров",
    Region_id: "39"
  },
  {
    Name: "Озерск",
    Region_id: "39"
  },
  {
    Name: "Пионерский",
    Region_id: "39"
  },
  {
    Name: "Полесск",
    Region_id: "39"
  },
  {
    Name: "Правдинск",
    Region_id: "39"
  },
  {
    Name: "Приморск",
    Region_id: "39"
  },
  {
    Name: "Светлогорск",
    Region_id: "39"
  },
  {
    Name: "Светлый",
    Region_id: "39"
  },
  {
    Name: "Славск",
    Region_id: "39"
  },
  {
    Name: "Советск",
    Region_id: "39"
  },
  {
    Name: "Черняховск",
    Region_id: "39"
  },
  {
    Name: "Балабаново",
    Region_id: "40"
  },
  {
    Name: "Белоусово",
    Region_id: "40"
  },
  {
    Name: "Боровск",
    Region_id: "40"
  },
  {
    Name: "Боровск-1",
    Region_id: "40"
  },
  {
    Name: "Ермолино",
    Region_id: "40"
  },
  {
    Name: "Жиздра",
    Region_id: "40"
  },
  {
    Name: "Жуков",
    Region_id: "40"
  },
  {
    Name: "Калуга",
    Region_id: "40"
  },
  {
    Name: "Киров",
    Region_id: "40"
  },
  {
    Name: "Козельск",
    Region_id: "40"
  },
  {
    Name: "Кондрово",
    Region_id: "40"
  },
  {
    Name: "Кременки",
    Region_id: "40"
  },
  {
    Name: "Людиново",
    Region_id: "40"
  },
  {
    Name: "Малоярославец",
    Region_id: "40"
  },
  {
    Name: "Медынь",
    Region_id: "40"
  },
  {
    Name: "Мещовск",
    Region_id: "40"
  },
  {
    Name: "Мосальск",
    Region_id: "40"
  },
  {
    Name: "Обнинск",
    Region_id: "40"
  },
  {
    Name: "Сосенский",
    Region_id: "40"
  },
  {
    Name: "Спас-Деменск",
    Region_id: "40"
  },
  {
    Name: "Сухиничи",
    Region_id: "40"
  },
  {
    Name: "Таруса",
    Region_id: "40"
  },
  {
    Name: "Юхнов",
    Region_id: "40"
  },
  {
    Name: "Юхнов-1",
    Region_id: "40"
  },
  {
    Name: "Юхнов-2",
    Region_id: "40"
  },
  {
    Name: "Вилючинск",
    Region_id: "41"
  },
  {
    Name: "Елизово",
    Region_id: "41"
  },
  {
    Name: "Петропавловск-Камчатский",
    Region_id: "41"
  },
  {
    Name: "Анжеро-Судженск",
    Region_id: "42"
  },
  {
    Name: "Белово",
    Region_id: "42"
  },
  {
    Name: "Березовский",
    Region_id: "42"
  },
  {
    Name: "Гурьевск",
    Region_id: "42"
  },
  {
    Name: "Калтан",
    Region_id: "42"
  },
  {
    Name: "Кемерово",
    Region_id: "42"
  },
  {
    Name: "Киселевск",
    Region_id: "42"
  },
  {
    Name: "Ленинск-Кузнецкий",
    Region_id: "42"
  },
  {
    Name: "Мариинск",
    Region_id: "42"
  },
  {
    Name: "Междуреченск",
    Region_id: "42"
  },
  {
    Name: "Мыски",
    Region_id: "42"
  },
  {
    Name: "Новокузнецк",
    Region_id: "42"
  },
  {
    Name: "Осинники",
    Region_id: "42"
  },
  {
    Name: "Полысаево",
    Region_id: "42"
  },
  {
    Name: "Прокопьевск",
    Region_id: "42"
  },
  {
    Name: "Салаир",
    Region_id: "42"
  },
  {
    Name: "Тайга",
    Region_id: "42"
  },
  {
    Name: "Таштагол",
    Region_id: "42"
  },
  {
    Name: "Топки",
    Region_id: "42"
  },
  {
    Name: "Юрга",
    Region_id: "42"
  },
  {
    Name: "Белая Холуница",
    Region_id: "43"
  },
  {
    Name: "Вятские Поляны",
    Region_id: "43"
  },
  {
    Name: "Зуевка",
    Region_id: "43"
  },
  {
    Name: "Киров",
    Region_id: "43"
  },
  {
    Name: "Кирово-Чепецк",
    Region_id: "43"
  },
  {
    Name: "Кирс",
    Region_id: "43"
  },
  {
    Name: "Котельнич",
    Region_id: "43"
  },
  {
    Name: "Луза",
    Region_id: "43"
  },
  {
    Name: "Малмыж",
    Region_id: "43"
  },
  {
    Name: "Мураши",
    Region_id: "43"
  },
  {
    Name: "Нолинск",
    Region_id: "43"
  },
  {
    Name: "Омутнинск",
    Region_id: "43"
  },
  {
    Name: "Орлов",
    Region_id: "43"
  },
  {
    Name: "Слободской",
    Region_id: "43"
  },
  {
    Name: "Советск",
    Region_id: "43"
  },
  {
    Name: "Сосновка",
    Region_id: "43"
  },
  {
    Name: "Уржум",
    Region_id: "43"
  },
  {
    Name: "Яранск",
    Region_id: "43"
  },
  {
    Name: "Буй",
    Region_id: "44"
  },
  {
    Name: "Волгореченск",
    Region_id: "44"
  },
  {
    Name: "Галич",
    Region_id: "44"
  },
  {
    Name: "Кологрив",
    Region_id: "44"
  },
  {
    Name: "Кострома",
    Region_id: "44"
  },
  {
    Name: "Макарьев",
    Region_id: "44"
  },
  {
    Name: "Мантурово",
    Region_id: "44"
  },
  {
    Name: "Нерехта",
    Region_id: "44"
  },
  {
    Name: "Нея",
    Region_id: "44"
  },
  {
    Name: "Солигалич",
    Region_id: "44"
  },
  {
    Name: "Чухлома",
    Region_id: "44"
  },
  {
    Name: "Шарья",
    Region_id: "44"
  },
  {
    Name: "Далматово",
    Region_id: "45"
  },
  {
    Name: "Катайск",
    Region_id: "45"
  },
  {
    Name: "Курган",
    Region_id: "45"
  },
  {
    Name: "Куртамыш",
    Region_id: "45"
  },
  {
    Name: "Макушино",
    Region_id: "45"
  },
  {
    Name: "Петухово",
    Region_id: "45"
  },
  {
    Name: "Шадринск",
    Region_id: "45"
  },
  {
    Name: "Шумиха",
    Region_id: "45"
  },
  {
    Name: "Щучье",
    Region_id: "45"
  },
  {
    Name: "Дмитриев",
    Region_id: "46"
  },
  {
    Name: "Железногорск",
    Region_id: "46"
  },
  {
    Name: "Курск",
    Region_id: "46"
  },
  {
    Name: "Курчатов",
    Region_id: "46"
  },
  {
    Name: "Льгов",
    Region_id: "46"
  },
  {
    Name: "Обоянь",
    Region_id: "46"
  },
  {
    Name: "Рыльск",
    Region_id: "46"
  },
  {
    Name: "Суджа",
    Region_id: "46"
  },
  {
    Name: "Фатеж",
    Region_id: "46"
  },
  {
    Name: "Щигры",
    Region_id: "46"
  },
  {
    Name: "Бокситогорск",
    Region_id: "47"
  },
  {
    Name: "Волосово",
    Region_id: "47"
  },
  {
    Name: "Волхов",
    Region_id: "47"
  },
  {
    Name: "Всеволожск",
    Region_id: "47"
  },
  {
    Name: "Выборг",
    Region_id: "47"
  },
  {
    Name: "Высоцк",
    Region_id: "47"
  },
  {
    Name: "Гатчина",
    Region_id: "47"
  },
  {
    Name: "Ивангород",
    Region_id: "47"
  },
  {
    Name: "Каменногорск",
    Region_id: "47"
  },
  {
    Name: "Кингисепп",
    Region_id: "47"
  },
  {
    Name: "Кириши",
    Region_id: "47"
  },
  {
    Name: "Кировск",
    Region_id: "47"
  },
  {
    Name: "Коммунар",
    Region_id: "47"
  },
  {
    Name: "Лодейное Поле",
    Region_id: "47"
  },
  {
    Name: "Луга",
    Region_id: "47"
  },
  {
    Name: "Любань",
    Region_id: "47"
  },
  {
    Name: "Никольское",
    Region_id: "47"
  },
  {
    Name: "Новая Ладога",
    Region_id: "47"
  },
  {
    Name: "Отрадное",
    Region_id: "47"
  },
  {
    Name: "Пикалево",
    Region_id: "47"
  },
  {
    Name: "Подпорожье",
    Region_id: "47"
  },
  {
    Name: "Приморск",
    Region_id: "47"
  },
  {
    Name: "Приозерск",
    Region_id: "47"
  },
  {
    Name: "Светогорск",
    Region_id: "47"
  },
  {
    Name: "Сертолово",
    Region_id: "47"
  },
  {
    Name: "Сланцы",
    Region_id: "47"
  },
  {
    Name: "Сосновый Бор",
    Region_id: "47"
  },
  {
    Name: "Сясьстрой",
    Region_id: "47"
  },
  {
    Name: "Тихвин",
    Region_id: "47"
  },
  {
    Name: "Тосно",
    Region_id: "47"
  },
  {
    Name: "Шлиссельбург",
    Region_id: "47"
  },
  {
    Name: "Грязи",
    Region_id: "48"
  },
  {
    Name: "Данков",
    Region_id: "48"
  },
  {
    Name: "Елец",
    Region_id: "48"
  },
  {
    Name: "Задонск",
    Region_id: "48"
  },
  {
    Name: "Лебедянь",
    Region_id: "48"
  },
  {
    Name: "Липецк",
    Region_id: "48"
  },
  {
    Name: "Усмань",
    Region_id: "48"
  },
  {
    Name: "Чаплыгин",
    Region_id: "48"
  },
  {
    Name: "Магадан",
    Region_id: "49"
  },
  {
    Name: "Сусуман",
    Region_id: "49"
  },
  {
    Name: "Апрелевка",
    Region_id: "50"
  },
  {
    Name: "Балашиха",
    Region_id: "50"
  },
  {
    Name: "Бронницы",
    Region_id: "50"
  },
  {
    Name: "Верея",
    Region_id: "50"
  },
  {
    Name: "Видное",
    Region_id: "50"
  },
  {
    Name: "Волоколамск",
    Region_id: "50"
  },
  {
    Name: "Воскресенск",
    Region_id: "50"
  },
  {
    Name: "Высоковск",
    Region_id: "50"
  },
  {
    Name: "Голицыно",
    Region_id: "50"
  },
  {
    Name: "Городской округ Черноголовка",
    Region_id: "50"
  },
  {
    Name: "Дедовск",
    Region_id: "50"
  },
  {
    Name: "Дзержинский",
    Region_id: "50"
  },
  {
    Name: "Дмитров",
    Region_id: "50"
  },
  {
    Name: "Долгопрудный",
    Region_id: "50"
  },
  {
    Name: "Домодедово",
    Region_id: "50"
  },
  {
    Name: "Дрезна",
    Region_id: "50"
  },
  {
    Name: "Дубна",
    Region_id: "50"
  },
  {
    Name: "Егорьевск",
    Region_id: "50"
  },
  {
    Name: "Железнодорожный",
    Region_id: "50"
  },
  {
    Name: "Жуковский",
    Region_id: "50"
  },
  {
    Name: "Зарайск",
    Region_id: "50"
  },
  {
    Name: "Звенигород",
    Region_id: "50"
  },
  {
    Name: "Ивантеевка",
    Region_id: "50"
  },
  {
    Name: "Истра",
    Region_id: "50"
  },
  {
    Name: "Истра-1",
    Region_id: "50"
  },
  {
    Name: "Кашира",
    Region_id: "50"
  },
  {
    Name: "Кашира-8",
    Region_id: "50"
  },
  {
    Name: "Климовск",
    Region_id: "50"
  },
  {
    Name: "Клин",
    Region_id: "50"
  },
  {
    Name: "Коломна",
    Region_id: "50"
  },
  {
    Name: "Королев",
    Region_id: "50"
  },
  {
    Name: "Котельники",
    Region_id: "50"
  },
  {
    Name: "Красноармейск",
    Region_id: "50"
  },
  {
    Name: "Красногорск",
    Region_id: "50"
  },
  {
    Name: "Краснозаводск",
    Region_id: "50"
  },
  {
    Name: "Краснознаменск",
    Region_id: "50"
  },
  {
    Name: "Кубинка",
    Region_id: "50"
  },
  {
    Name: "Куровское",
    Region_id: "50"
  },
  {
    Name: "Ликино-Дулево",
    Region_id: "50"
  },
  {
    Name: "Лобня",
    Region_id: "50"
  },
  {
    Name: "Лосино-Петровский",
    Region_id: "50"
  },
  {
    Name: "Луховицы",
    Region_id: "50"
  },
  {
    Name: "Лыткарино",
    Region_id: "50"
  },
  {
    Name: "Люберцы",
    Region_id: "50"
  },
  {
    Name: "Можайск",
    Region_id: "50"
  },
  {
    Name: "Мытищи",
    Region_id: "50"
  },
  {
    Name: "Наро-Фоминск",
    Region_id: "50"
  },
  {
    Name: "Ногинск",
    Region_id: "50"
  },
  {
    Name: "Одинцово",
    Region_id: "50"
  },
  {
    Name: "Ожерелье",
    Region_id: "50"
  },
  {
    Name: "Озеры",
    Region_id: "50"
  },
  {
    Name: "Орехово-Зуево",
    Region_id: "50"
  },
  {
    Name: "Павловский Посад",
    Region_id: "50"
  },
  {
    Name: "Пересвет",
    Region_id: "50"
  },
  {
    Name: "Подольск",
    Region_id: "50"
  },
  {
    Name: "Протвино",
    Region_id: "50"
  },
  {
    Name: "Пушкино",
    Region_id: "50"
  },
  {
    Name: "Пущино",
    Region_id: "50"
  },
  {
    Name: "Раменское",
    Region_id: "50"
  },
  {
    Name: "Реутов",
    Region_id: "50"
  },
  {
    Name: "Рошаль",
    Region_id: "50"
  },
  {
    Name: "Руза",
    Region_id: "50"
  },
  {
    Name: "Сергиев Посад",
    Region_id: "50"
  },
  {
    Name: "Сергиев Посад-7",
    Region_id: "50"
  },
  {
    Name: "Серпухов",
    Region_id: "50"
  },
  {
    Name: "Снегири",
    Region_id: "50"
  },
  {
    Name: "Солнечногорск",
    Region_id: "50"
  },
  {
    Name: "Солнечногорск-2",
    Region_id: "50"
  },
  {
    Name: "Солнечногорск-25",
    Region_id: "50"
  },
  {
    Name: "Солнечногорск-30",
    Region_id: "50"
  },
  {
    Name: "Солнечногорск-7",
    Region_id: "50"
  },
  {
    Name: "Старая Купавна",
    Region_id: "50"
  },
  {
    Name: "Ступино",
    Region_id: "50"
  },
  {
    Name: "Талдом",
    Region_id: "50"
  },
  {
    Name: "Фрязино",
    Region_id: "50"
  },
  {
    Name: "Химки",
    Region_id: "50"
  },
  {
    Name: "Хотьково",
    Region_id: "50"
  },
  {
    Name: "Черноголовка",
    Region_id: "50"
  },
  {
    Name: "Чехов",
    Region_id: "50"
  },
  {
    Name: "Чехов-2",
    Region_id: "50"
  },
  {
    Name: "Чехов-3",
    Region_id: "50"
  },
  {
    Name: "Чехов-8",
    Region_id: "50"
  },
  {
    Name: "Шатура",
    Region_id: "50"
  },
  {
    Name: "Щелково",
    Region_id: "50"
  },
  {
    Name: "Электрогорск",
    Region_id: "50"
  },
  {
    Name: "Электросталь",
    Region_id: "50"
  },
  {
    Name: "Электроугли",
    Region_id: "50"
  },
  {
    Name: "Юбилейный",
    Region_id: "50"
  },
  {
    Name: "Яхрома",
    Region_id: "50"
  },
  {
    Name: "Апатиты",
    Region_id: "51"
  },
  {
    Name: "Гаджиево",
    Region_id: "51"
  },
  {
    Name: "Заозерск",
    Region_id: "51"
  },
  {
    Name: "Заполярный",
    Region_id: "51"
  },
  {
    Name: "Кандалакша",
    Region_id: "51"
  },
  {
    Name: "Кировск",
    Region_id: "51"
  },
  {
    Name: "Ковдор",
    Region_id: "51"
  },
  {
    Name: "Кола",
    Region_id: "51"
  },
  {
    Name: "Мончегорск",
    Region_id: "51"
  },
  {
    Name: "Мурманск",
    Region_id: "51"
  },
  {
    Name: "Оленегорск",
    Region_id: "51"
  },
  {
    Name: "Оленегорск-1",
    Region_id: "51"
  },
  {
    Name: "Оленегорск-2",
    Region_id: "51"
  },
  {
    Name: "Оленегорск-4",
    Region_id: "51"
  },
  {
    Name: "Островной",
    Region_id: "51"
  },
  {
    Name: "Полярные Зори",
    Region_id: "51"
  },
  {
    Name: "Полярный",
    Region_id: "51"
  },
  {
    Name: "Североморск",
    Region_id: "51"
  },
  {
    Name: "Снежногорск",
    Region_id: "51"
  },
  {
    Name: "Арзамас",
    Region_id: "52"
  },
  {
    Name: "Балахна",
    Region_id: "52"
  },
  {
    Name: "Богородск",
    Region_id: "52"
  },
  {
    Name: "Бор",
    Region_id: "52"
  },
  {
    Name: "Ветлуга",
    Region_id: "52"
  },
  {
    Name: "Володарск",
    Region_id: "52"
  },
  {
    Name: "Ворсма",
    Region_id: "52"
  },
  {
    Name: "Выкса",
    Region_id: "52"
  },
  {
    Name: "Горбатов",
    Region_id: "52"
  },
  {
    Name: "Городец",
    Region_id: "52"
  },
  {
    Name: "Дзержинск",
    Region_id: "52"
  },
  {
    Name: "Заволжье",
    Region_id: "52"
  },
  {
    Name: "Княгинино",
    Region_id: "52"
  },
  {
    Name: "Кстово",
    Region_id: "52"
  },
  {
    Name: "Кулебаки",
    Region_id: "52"
  },
  {
    Name: "Лукоянов",
    Region_id: "52"
  },
  {
    Name: "Лысково",
    Region_id: "52"
  },
  {
    Name: "Навашино",
    Region_id: "52"
  },
  {
    Name: "Нижний Новгород",
    Region_id: "52"
  },
  {
    Name: "Павлово",
    Region_id: "52"
  },
  {
    Name: "Первомайск",
    Region_id: "52"
  },
  {
    Name: "Перевоз",
    Region_id: "52"
  },
  {
    Name: "Саров",
    Region_id: "52"
  },
  {
    Name: "Семенов",
    Region_id: "52"
  },
  {
    Name: "Сергач",
    Region_id: "52"
  },
  {
    Name: "Урень",
    Region_id: "52"
  },
  {
    Name: "Чкаловск",
    Region_id: "52"
  },
  {
    Name: "Шахунья",
    Region_id: "52"
  },
  {
    Name: "Боровичи",
    Region_id: "53"
  },
  {
    Name: "Валдай",
    Region_id: "53"
  },
  {
    Name: "Великий Новгород",
    Region_id: "53"
  },
  {
    Name: "Малая Вишера",
    Region_id: "53"
  },
  {
    Name: "Окуловка",
    Region_id: "53"
  },
  {
    Name: "Пестово",
    Region_id: "53"
  },
  {
    Name: "Сольцы",
    Region_id: "53"
  },
  {
    Name: "Сольцы 2",
    Region_id: "53"
  },
  {
    Name: "Старая Русса",
    Region_id: "53"
  },
  {
    Name: "Холм",
    Region_id: "53"
  },
  {
    Name: "Чудово",
    Region_id: "53"
  },
  {
    Name: "Барабинск",
    Region_id: "54"
  },
  {
    Name: "Бердск",
    Region_id: "54"
  },
  {
    Name: "Болотное",
    Region_id: "54"
  },
  {
    Name: "Искитим",
    Region_id: "54"
  },
  {
    Name: "Карасук",
    Region_id: "54"
  },
  {
    Name: "Каргат",
    Region_id: "54"
  },
  {
    Name: "Куйбышев",
    Region_id: "54"
  },
  {
    Name: "Купино",
    Region_id: "54"
  },
  {
    Name: "Новосибирск",
    Region_id: "54"
  },
  {
    Name: "Обь",
    Region_id: "54"
  },
  {
    Name: "Татарск",
    Region_id: "54"
  },
  {
    Name: "Тогучин",
    Region_id: "54"
  },
  {
    Name: "Черепаново",
    Region_id: "54"
  },
  {
    Name: "Чулым",
    Region_id: "54"
  },
  {
    Name: "Чулым-3",
    Region_id: "54"
  },
  {
    Name: "Исилькуль",
    Region_id: "55"
  },
  {
    Name: "Калачинск",
    Region_id: "55"
  },
  {
    Name: "Называевск",
    Region_id: "55"
  },
  {
    Name: "Омск",
    Region_id: "55"
  },
  {
    Name: "Тара",
    Region_id: "55"
  },
  {
    Name: "Тюкалинск",
    Region_id: "55"
  },
  {
    Name: "Абдулино",
    Region_id: "56"
  },
  {
    Name: "Бугуруслан",
    Region_id: "56"
  },
  {
    Name: "Бузулук",
    Region_id: "56"
  },
  {
    Name: "Гай",
    Region_id: "56"
  },
  {
    Name: "Кувандык",
    Region_id: "56"
  },
  {
    Name: "Медногорск",
    Region_id: "56"
  },
  {
    Name: "Новотроицк",
    Region_id: "56"
  },
  {
    Name: "Оренбург",
    Region_id: "56"
  },
  {
    Name: "Орск",
    Region_id: "56"
  },
  {
    Name: "Соль-Илецк",
    Region_id: "56"
  },
  {
    Name: "Сорочинск",
    Region_id: "56"
  },
  {
    Name: "Ясный",
    Region_id: "56"
  },
  {
    Name: "Болхов",
    Region_id: "57"
  },
  {
    Name: "Дмитровск",
    Region_id: "57"
  },
  {
    Name: "Ливны",
    Region_id: "57"
  },
  {
    Name: "Малоархангельск",
    Region_id: "57"
  },
  {
    Name: "Мценск",
    Region_id: "57"
  },
  {
    Name: "Новосиль",
    Region_id: "57"
  },
  {
    Name: "Орёл",
    Region_id: "57"
  },
  {
    Name: "Белинский",
    Region_id: "58"
  },
  {
    Name: "Городище",
    Region_id: "58"
  },
  {
    Name: "Заречный",
    Region_id: "58"
  },
  {
    Name: "Каменка",
    Region_id: "58"
  },
  {
    Name: "Кузнецк",
    Region_id: "58"
  },
  {
    Name: "Кузнецк-12",
    Region_id: "58"
  },
  {
    Name: "Кузнецк-8",
    Region_id: "58"
  },
  {
    Name: "Нижний Ломов",
    Region_id: "58"
  },
  {
    Name: "Никольск",
    Region_id: "58"
  },
  {
    Name: "Пенза",
    Region_id: "58"
  },
  {
    Name: "Сердобск",
    Region_id: "58"
  },
  {
    Name: "Спасск",
    Region_id: "58"
  },
  {
    Name: "Сурск",
    Region_id: "58"
  },
  {
    Name: "Александровск",
    Region_id: "59"
  },
  {
    Name: "Березники",
    Region_id: "59"
  },
  {
    Name: "Верещагино",
    Region_id: "59"
  },
  {
    Name: "Горнозаводск",
    Region_id: "59"
  },
  {
    Name: "Гремячинск",
    Region_id: "59"
  },
  {
    Name: "Губаха",
    Region_id: "59"
  },
  {
    Name: "Добрянка",
    Region_id: "59"
  },
  {
    Name: "Кизел",
    Region_id: "59"
  },
  {
    Name: "Красновишерск",
    Region_id: "59"
  },
  {
    Name: "Краснокамск",
    Region_id: "59"
  },
  {
    Name: "Кудымкар",
    Region_id: "59"
  },
  {
    Name: "Кунгур",
    Region_id: "59"
  },
  {
    Name: "Лысьва",
    Region_id: "59"
  },
  {
    Name: "Нытва",
    Region_id: "59"
  },
  {
    Name: "Оса",
    Region_id: "59"
  },
  {
    Name: "Оханск",
    Region_id: "59"
  },
  {
    Name: "Очер",
    Region_id: "59"
  },
  {
    Name: "Пермь",
    Region_id: "59"
  },
  {
    Name: "Соликамск",
    Region_id: "59"
  },
  {
    Name: "Усолье",
    Region_id: "59"
  },
  {
    Name: "Чайковский",
    Region_id: "59"
  },
  {
    Name: "Чердынь",
    Region_id: "59"
  },
  {
    Name: "Чермоз",
    Region_id: "59"
  },
  {
    Name: "Чернушка",
    Region_id: "59"
  },
  {
    Name: "Чусовой",
    Region_id: "59"
  },
  {
    Name: "Великие Луки",
    Region_id: "60"
  },
  {
    Name: "Великие Луки-1",
    Region_id: "60"
  },
  {
    Name: "Гдов",
    Region_id: "60"
  },
  {
    Name: "Дно",
    Region_id: "60"
  },
  {
    Name: "Невель",
    Region_id: "60"
  },
  {
    Name: "Новоржев",
    Region_id: "60"
  },
  {
    Name: "Новосокольники",
    Region_id: "60"
  },
  {
    Name: "Опочка",
    Region_id: "60"
  },
  {
    Name: "Остров",
    Region_id: "60"
  },
  {
    Name: "Печоры",
    Region_id: "60"
  },
  {
    Name: "Порхов",
    Region_id: "60"
  },
  {
    Name: "Псков",
    Region_id: "60"
  },
  {
    Name: "Пустошка",
    Region_id: "60"
  },
  {
    Name: "Пыталово",
    Region_id: "60"
  },
  {
    Name: "Себеж",
    Region_id: "60"
  },
  {
    Name: "Азов",
    Region_id: "61"
  },
  {
    Name: "Аксай",
    Region_id: "61"
  },
  {
    Name: "Батайск",
    Region_id: "61"
  },
  {
    Name: "Белая Калитва",
    Region_id: "61"
  },
  {
    Name: "Волгодонск",
    Region_id: "61"
  },
  {
    Name: "Гуково",
    Region_id: "61"
  },
  {
    Name: "Донецк",
    Region_id: "61"
  },
  {
    Name: "Зверево",
    Region_id: "61"
  },
  {
    Name: "Зерноград",
    Region_id: "61"
  },
  {
    Name: "Каменск-Шахтинский",
    Region_id: "61"
  },
  {
    Name: "Константиновск",
    Region_id: "61"
  },
  {
    Name: "Красный Сулин",
    Region_id: "61"
  },
  {
    Name: "Миллерово",
    Region_id: "61"
  },
  {
    Name: "Морозовск",
    Region_id: "61"
  },
  {
    Name: "Новочеркасск",
    Region_id: "61"
  },
  {
    Name: "Новошахтинск",
    Region_id: "61"
  },
  {
    Name: "Пролетарск",
    Region_id: "61"
  },
  {
    Name: "Ростов-на-Дону",
    Region_id: "61"
  },
  {
    Name: "Сальск",
    Region_id: "61"
  },
  {
    Name: "Семикаракорск",
    Region_id: "61"
  },
  {
    Name: "Таганрог",
    Region_id: "61"
  },
  {
    Name: "Цимлянск",
    Region_id: "61"
  },
  {
    Name: "Шахты",
    Region_id: "61"
  },
  {
    Name: "Касимов",
    Region_id: "62"
  },
  {
    Name: "Кораблино",
    Region_id: "62"
  },
  {
    Name: "Михайлов",
    Region_id: "62"
  },
  {
    Name: "Новомичуринск",
    Region_id: "62"
  },
  {
    Name: "Рыбное",
    Region_id: "62"
  },
  {
    Name: "Ряжск",
    Region_id: "62"
  },
  {
    Name: "Рязань",
    Region_id: "62"
  },
  {
    Name: "Сасово",
    Region_id: "62"
  },
  {
    Name: "Скопин",
    Region_id: "62"
  },
  {
    Name: "Спас-Клепики",
    Region_id: "62"
  },
  {
    Name: "Спасск-Рязанский",
    Region_id: "62"
  },
  {
    Name: "Шацк",
    Region_id: "62"
  },
  {
    Name: "Жигулевск",
    Region_id: "63"
  },
  {
    Name: "Кинель",
    Region_id: "63"
  },
  {
    Name: "Нефтегорск",
    Region_id: "63"
  },
  {
    Name: "Новокуйбышевск",
    Region_id: "63"
  },
  {
    Name: "Октябрьск",
    Region_id: "63"
  },
  {
    Name: "Отрадный",
    Region_id: "63"
  },
  {
    Name: "Похвистнево",
    Region_id: "63"
  },
  {
    Name: "Самара",
    Region_id: "63"
  },
  {
    Name: "Сызрань",
    Region_id: "63"
  },
  {
    Name: "Тольятти",
    Region_id: "63"
  },
  {
    Name: "Чапаевск",
    Region_id: "63"
  },
  {
    Name: "Аркадак",
    Region_id: "64"
  },
  {
    Name: "Аткарск",
    Region_id: "64"
  },
  {
    Name: "Балаково",
    Region_id: "64"
  },
  {
    Name: "Балашов",
    Region_id: "64"
  },
  {
    Name: "Вольск",
    Region_id: "64"
  },
  {
    Name: "Вольск-18",
    Region_id: "64"
  },
  {
    Name: "Ершов",
    Region_id: "64"
  },
  {
    Name: "Калининск",
    Region_id: "64"
  },
  {
    Name: "Красноармейск",
    Region_id: "64"
  },
  {
    Name: "Красный Кут",
    Region_id: "64"
  },
  {
    Name: "Маркс",
    Region_id: "64"
  },
  {
    Name: "Новоузенск",
    Region_id: "64"
  },
  {
    Name: "Петровск",
    Region_id: "64"
  },
  {
    Name: "Пугачев",
    Region_id: "64"
  },
  {
    Name: "Ртищево",
    Region_id: "64"
  },
  {
    Name: "Саратов",
    Region_id: "64"
  },
  {
    Name: "Хвалынск",
    Region_id: "64"
  },
  {
    Name: "Шиханы",
    Region_id: "64"
  },
  {
    Name: "Энгельс",
    Region_id: "64"
  },
  {
    Name: "Энгельс-19",
    Region_id: "64"
  },
  {
    Name: "Энгельс-2",
    Region_id: "64"
  },
  {
    Name: "Александровск-Сахалинский",
    Region_id: "65"
  },
  {
    Name: "Анива",
    Region_id: "65"
  },
  {
    Name: "Долинск",
    Region_id: "65"
  },
  {
    Name: "Корсаков",
    Region_id: "65"
  },
  {
    Name: "Курильск",
    Region_id: "65"
  },
  {
    Name: "Макаров",
    Region_id: "65"
  },
  {
    Name: "Невельск",
    Region_id: "65"
  },
  {
    Name: "Оха",
    Region_id: "65"
  },
  {
    Name: "Поронайск",
    Region_id: "65"
  },
  {
    Name: "Северо-Курильск",
    Region_id: "65"
  },
  {
    Name: "Томари",
    Region_id: "65"
  },
  {
    Name: "Углегорск",
    Region_id: "65"
  },
  {
    Name: "Холмск",
    Region_id: "65"
  },
  {
    Name: "Шахтерск",
    Region_id: "65"
  },
  {
    Name: "Южно-Сахалинск",
    Region_id: "65"
  },
  {
    Name: "Алапаевск",
    Region_id: "66"
  },
  {
    Name: "Арамиль",
    Region_id: "66"
  },
  {
    Name: "Артемовский",
    Region_id: "66"
  },
  {
    Name: "Асбест",
    Region_id: "66"
  },
  {
    Name: "Березовский",
    Region_id: "66"
  },
  {
    Name: "Богданович",
    Region_id: "66"
  },
  {
    Name: "Верхний Тагил",
    Region_id: "66"
  },
  {
    Name: "Верхняя Пышма",
    Region_id: "66"
  },
  {
    Name: "Верхняя Салда",
    Region_id: "66"
  },
  {
    Name: "Верхняя Тура",
    Region_id: "66"
  },
  {
    Name: "Верхотурье",
    Region_id: "66"
  },
  {
    Name: "Волчанск",
    Region_id: "66"
  },
  {
    Name: "Дегтярск",
    Region_id: "66"
  },
  {
    Name: "Екатеринбург",
    Region_id: "66"
  },
  {
    Name: "Заречный",
    Region_id: "66"
  },
  {
    Name: "Ивдель",
    Region_id: "66"
  },
  {
    Name: "Ирбит",
    Region_id: "66"
  },
  {
    Name: "Каменск-Уральский",
    Region_id: "66"
  },
  {
    Name: "Камышлов",
    Region_id: "66"
  },
  {
    Name: "Карпинск",
    Region_id: "66"
  },
  {
    Name: "Качканар",
    Region_id: "66"
  },
  {
    Name: "Кировград",
    Region_id: "66"
  },
  {
    Name: "Краснотурьинск",
    Region_id: "66"
  },
  {
    Name: "Красноуральск",
    Region_id: "66"
  },
  {
    Name: "Красноуфимск",
    Region_id: "66"
  },
  {
    Name: "Кушва",
    Region_id: "66"
  },
  {
    Name: "Лесной",
    Region_id: "66"
  },
  {
    Name: "Михайловск",
    Region_id: "66"
  },
  {
    Name: "Невьянск",
    Region_id: "66"
  },
  {
    Name: "Нижние Серги",
    Region_id: "66"
  },
  {
    Name: "Нижние Серги-3",
    Region_id: "66"
  },
  {
    Name: "Нижний Тагил",
    Region_id: "66"
  },
  {
    Name: "Нижняя Салда",
    Region_id: "66"
  },
  {
    Name: "Нижняя Тура",
    Region_id: "66"
  },
  {
    Name: "Новая Ляля",
    Region_id: "66"
  },
  {
    Name: "Новоуральск",
    Region_id: "66"
  },
  {
    Name: "Первоуральск",
    Region_id: "66"
  },
  {
    Name: "Полевской",
    Region_id: "66"
  },
  {
    Name: "Ревда",
    Region_id: "66"
  },
  {
    Name: "Реж",
    Region_id: "66"
  },
  {
    Name: "Североуральск",
    Region_id: "66"
  },
  {
    Name: "Серов",
    Region_id: "66"
  },
  {
    Name: "Среднеуральск",
    Region_id: "66"
  },
  {
    Name: "Сухой Лог",
    Region_id: "66"
  },
  {
    Name: "Сысерть",
    Region_id: "66"
  },
  {
    Name: "Тавда",
    Region_id: "66"
  },
  {
    Name: "Талица",
    Region_id: "66"
  },
  {
    Name: "Туринск",
    Region_id: "66"
  },
  {
    Name: "Велиж",
    Region_id: "67"
  },
  {
    Name: "Вязьма",
    Region_id: "67"
  },
  {
    Name: "Гагарин",
    Region_id: "67"
  },
  {
    Name: "Демидов",
    Region_id: "67"
  },
  {
    Name: "Десногорск",
    Region_id: "67"
  },
  {
    Name: "Дорогобуж",
    Region_id: "67"
  },
  {
    Name: "Духовщина",
    Region_id: "67"
  },
  {
    Name: "Ельня",
    Region_id: "67"
  },
  {
    Name: "Починок",
    Region_id: "67"
  },
  {
    Name: "Рославль",
    Region_id: "67"
  },
  {
    Name: "Рудня",
    Region_id: "67"
  },
  {
    Name: "Сафоново",
    Region_id: "67"
  },
  {
    Name: "Смоленск",
    Region_id: "67"
  },
  {
    Name: "Сычевка",
    Region_id: "67"
  },
  {
    Name: "Ярцево",
    Region_id: "67"
  },
  {
    Name: "Жердевка",
    Region_id: "68"
  },
  {
    Name: "Кирсанов",
    Region_id: "68"
  },
  {
    Name: "Котовск",
    Region_id: "68"
  },
  {
    Name: "Мичуринск",
    Region_id: "68"
  },
  {
    Name: "Моршанск",
    Region_id: "68"
  },
  {
    Name: "Рассказово",
    Region_id: "68"
  },
  {
    Name: "Тамбов",
    Region_id: "68"
  },
  {
    Name: "Уварово",
    Region_id: "68"
  },
  {
    Name: "Андреаполь",
    Region_id: "69"
  },
  {
    Name: "Бежецк",
    Region_id: "69"
  },
  {
    Name: "Белый",
    Region_id: "69"
  },
  {
    Name: "Бологое",
    Region_id: "69"
  },
  {
    Name: "Весьегонск",
    Region_id: "69"
  },
  {
    Name: "Вышний Волочек",
    Region_id: "69"
  },
  {
    Name: "Западная Двина",
    Region_id: "69"
  },
  {
    Name: "Зубцов",
    Region_id: "69"
  },
  {
    Name: "Калязин",
    Region_id: "69"
  },
  {
    Name: "Кашин",
    Region_id: "69"
  },
  {
    Name: "Кимры",
    Region_id: "69"
  },
  {
    Name: "Конаково",
    Region_id: "69"
  },
  {
    Name: "Красный Холм",
    Region_id: "69"
  },
  {
    Name: "Кувшиново",
    Region_id: "69"
  },
  {
    Name: "Лихославль",
    Region_id: "69"
  },
  {
    Name: "Нелидово",
    Region_id: "69"
  },
  {
    Name: "Осташков",
    Region_id: "69"
  },
  {
    Name: "Ржев",
    Region_id: "69"
  },
  {
    Name: "Старица",
    Region_id: "69"
  },
  {
    Name: "Тверь",
    Region_id: "69"
  },
  {
    Name: "Торжок",
    Region_id: "69"
  },
  {
    Name: "Торопец",
    Region_id: "69"
  },
  {
    Name: "Удомля",
    Region_id: "69"
  },
  {
    Name: "Асино",
    Region_id: "70"
  },
  {
    Name: "Кедровый",
    Region_id: "70"
  },
  {
    Name: "Колпашево",
    Region_id: "70"
  },
  {
    Name: "Северск",
    Region_id: "70"
  },
  {
    Name: "Стрежевой",
    Region_id: "70"
  },
  {
    Name: "Томск",
    Region_id: "70"
  },
  {
    Name: "Алексин",
    Region_id: "71"
  },
  {
    Name: "Белев",
    Region_id: "71"
  },
  {
    Name: "Богородицк",
    Region_id: "71"
  },
  {
    Name: "Болохово",
    Region_id: "71"
  },
  {
    Name: "Венев",
    Region_id: "71"
  },
  {
    Name: "Донской",
    Region_id: "71"
  },
  {
    Name: "Ефремов",
    Region_id: "71"
  },
  {
    Name: "Кимовск",
    Region_id: "71"
  },
  {
    Name: "Киреевск",
    Region_id: "71"
  },
  {
    Name: "Липки",
    Region_id: "71"
  },
  {
    Name: "Новомосковск",
    Region_id: "71"
  },
  {
    Name: "Плавск",
    Region_id: "71"
  },
  {
    Name: "Советск",
    Region_id: "71"
  },
  {
    Name: "Суворов",
    Region_id: "71"
  },
  {
    Name: "Тула",
    Region_id: "71"
  },
  {
    Name: "Узловая",
    Region_id: "71"
  },
  {
    Name: "Чекалин",
    Region_id: "71"
  },
  {
    Name: "Щекино",
    Region_id: "71"
  },
  {
    Name: "Ясногорск",
    Region_id: "71"
  },
  {
    Name: "Заводоуковск",
    Region_id: "72"
  },
  {
    Name: "Ишим",
    Region_id: "72"
  },
  {
    Name: "Тобольск",
    Region_id: "72"
  },
  {
    Name: "Тюмень",
    Region_id: "72"
  },
  {
    Name: "Ялуторовск",
    Region_id: "72"
  },
  {
    Name: "Барыш",
    Region_id: "73"
  },
  {
    Name: "Димитровград",
    Region_id: "73"
  },
  {
    Name: "Инза",
    Region_id: "73"
  },
  {
    Name: "Новоульяновск",
    Region_id: "73"
  },
  {
    Name: "Сенгилей",
    Region_id: "73"
  },
  {
    Name: "Ульяновск",
    Region_id: "73"
  },
  {
    Name: "Аша",
    Region_id: "74"
  },
  {
    Name: "Бакал",
    Region_id: "74"
  },
  {
    Name: "Верхнеуральск",
    Region_id: "74"
  },
  {
    Name: "Верхний Уфалей",
    Region_id: "74"
  },
  {
    Name: "Еманжелинск",
    Region_id: "74"
  },
  {
    Name: "Златоуст",
    Region_id: "74"
  },
  {
    Name: "Карабаш",
    Region_id: "74"
  },
  {
    Name: "Карталы",
    Region_id: "74"
  },
  {
    Name: "Касли",
    Region_id: "74"
  },
  {
    Name: "Катав-Ивановск",
    Region_id: "74"
  },
  {
    Name: "Копейск",
    Region_id: "74"
  },
  {
    Name: "Коркино",
    Region_id: "74"
  },
  {
    Name: "Куса",
    Region_id: "74"
  },
  {
    Name: "Кыштым",
    Region_id: "74"
  },
  {
    Name: "Магнитогорск",
    Region_id: "74"
  },
  {
    Name: "Миасс",
    Region_id: "74"
  },
  {
    Name: "Миньяр",
    Region_id: "74"
  },
  {
    Name: "Нязепетровск",
    Region_id: "74"
  },
  {
    Name: "Озерск",
    Region_id: "74"
  },
  {
    Name: "Пласт",
    Region_id: "74"
  },
  {
    Name: "Сатка",
    Region_id: "74"
  },
  {
    Name: "Сим",
    Region_id: "74"
  },
  {
    Name: "Снежинск",
    Region_id: "74"
  },
  {
    Name: "Трехгорный",
    Region_id: "74"
  },
  {
    Name: "Трехгорный-1",
    Region_id: "74"
  },
  {
    Name: "Троицк",
    Region_id: "74"
  },
  {
    Name: "Усть-Катав",
    Region_id: "74"
  },
  {
    Name: "Чебаркуль",
    Region_id: "74"
  },
  {
    Name: "Челябинск",
    Region_id: "74"
  },
  {
    Name: "Южноуральск",
    Region_id: "74"
  },
  {
    Name: "Юрюзань",
    Region_id: "74"
  },
  {
    Name: "Балей",
    Region_id: "75"
  },
  {
    Name: "Борзя",
    Region_id: "75"
  },
  {
    Name: "Краснокаменск",
    Region_id: "75"
  },
  {
    Name: "Могоча",
    Region_id: "75"
  },
  {
    Name: "Нерчинск",
    Region_id: "75"
  },
  {
    Name: "Петровск-Забайкальский",
    Region_id: "75"
  },
  {
    Name: "Сретенск",
    Region_id: "75"
  },
  {
    Name: "Хилок",
    Region_id: "75"
  },
  {
    Name: "Чита",
    Region_id: "75"
  },
  {
    Name: "Шилка",
    Region_id: "75"
  },
  {
    Name: "Гаврилов-Ям",
    Region_id: "76"
  },
  {
    Name: "Данилов",
    Region_id: "76"
  },
  {
    Name: "Любим",
    Region_id: "76"
  },
  {
    Name: "Мышкин",
    Region_id: "76"
  },
  {
    Name: "Переславль-Залесский",
    Region_id: "76"
  },
  {
    Name: "Пошехонье",
    Region_id: "76"
  },
  {
    Name: "Ростов",
    Region_id: "76"
  },
  {
    Name: "Рыбинск",
    Region_id: "76"
  },
  {
    Name: "Тутаев",
    Region_id: "76"
  },
  {
    Name: "Углич",
    Region_id: "76"
  },
  {
    Name: "Ярославль",
    Region_id: "76"
  },
  {
    Name: "Зеленоград",
    Region_id: "77"
  },
  {
    Name: "Москва",
    Region_id: "77"
  },
  {
    Name: "Московский",
    Region_id: "77"
  },
  {
    Name: "Московский",
    Region_id: "77"
  },
  {
    Name: "Троицк",
    Region_id: "77"
  },
  {
    Name: "Щербинка",
    Region_id: "77"
  },
  {
    Name: "Зеленогорск",
    Region_id: "78"
  },
  {
    Name: "Колпино",
    Region_id: "78"
  },
  {
    Name: "Красное Село",
    Region_id: "78"
  },
  {
    Name: "Кронштадт",
    Region_id: "78"
  },
  {
    Name: "Ломоносов",
    Region_id: "78"
  },
  {
    Name: "Павловск",
    Region_id: "78"
  },
  {
    Name: "Петергоф",
    Region_id: "78"
  },
  {
    Name: "Пушкин",
    Region_id: "78"
  },
  {
    Name: "Санкт-Петербург",
    Region_id: "78"
  },
  {
    Name: "Сестрорецк",
    Region_id: "78"
  },
  {
    Name: "Биробиджан",
    Region_id: "79"
  },
  {
    Name: "Облучье",
    Region_id: "79"
  },
  {
    Name: "Нарьян-Мар",
    Region_id: "83"
  },
  {
    Name: "Белоярский",
    Region_id: "86"
  },
  {
    Name: "Когалым",
    Region_id: "86"
  },
  {
    Name: "Лангепас",
    Region_id: "86"
  },
  {
    Name: "Лянтор",
    Region_id: "86"
  },
  {
    Name: "Мегион",
    Region_id: "86"
  },
  {
    Name: "Нефтеюганск",
    Region_id: "86"
  },
  {
    Name: "Нижневартовск",
    Region_id: "86"
  },
  {
    Name: "Нягань",
    Region_id: "86"
  },
  {
    Name: "Покачи",
    Region_id: "86"
  },
  {
    Name: "Пыть-Ях",
    Region_id: "86"
  },
  {
    Name: "Радужный",
    Region_id: "86"
  },
  {
    Name: "Советский",
    Region_id: "86"
  },
  {
    Name: "Сургут",
    Region_id: "86"
  },
  {
    Name: "Урай",
    Region_id: "86"
  },
  {
    Name: "Ханты-Мансийск",
    Region_id: "86"
  },
  {
    Name: "Югорск",
    Region_id: "86"
  },
  {
    Name: "Анадырь",
    Region_id: "87"
  },
  {
    Name: "Билибино",
    Region_id: "87"
  },
  {
    Name: "Певек",
    Region_id: "87"
  },
  {
    Name: "Губкинский",
    Region_id: "89"
  },
  {
    Name: "Лабытнанги",
    Region_id: "89"
  },
  {
    Name: "Муравленко",
    Region_id: "89"
  },
  {
    Name: "Надым",
    Region_id: "89"
  },
  {
    Name: "Новый Уренгой",
    Region_id: "89"
  },
  {
    Name: "Ноябрьск",
    Region_id: "89"
  },
  {
    Name: "Салехард",
    Region_id: "89"
  },
  {
    Name: "Тарко-Сале",
    Region_id: "89"
  },
  {
    Name: "Алупка",
    Region_id: "91"
  },
  {
    Name: "Алушта",
    Region_id: "91"
  },
  {
    Name: "Армянск",
    Region_id: "91"
  },
  {
    Name: "Армянськ",
    Region_id: "91"
  },
  {
    Name: "Бахчисарай",
    Region_id: "91"
  },
  {
    Name: "Белогорск",
    Region_id: "91"
  },
  {
    Name: "Джанкой",
    Region_id: "91"
  },
  {
    Name: "Джанкой",
    Region_id: "91"
  },
  {
    Name: "Евпатория",
    Region_id: "91"
  },
  {
    Name: "Керчь",
    Region_id: "91"
  },
  {
    Name: "Красноперекопск",
    Region_id: "91"
  },
  {
    Name: "Красноперекопск",
    Region_id: "91"
  },
  {
    Name: "Подгорное",
    Region_id: "91"
  },
  {
    Name: "Саки",
    Region_id: "91"
  },
  {
    Name: "Саки",
    Region_id: "91"
  },
  {
    Name: "Симферополь",
    Region_id: "91"
  },
  {
    Name: "Старый крым",
    Region_id: "91"
  },
  {
    Name: "Судак",
    Region_id: "91"
  },
  {
    Name: "Феодосия",
    Region_id: "91"
  },
  {
    Name: "Щелкино",
    Region_id: "91"
  },
  {
    Name: "Ялта",
    Region_id: "91"
  },
  {
    Name: "Инкерман",
    Region_id: "92"
  },
  {
    Name: "Севастополь",
    Region_id: "92"
  }
];

export default arrCities;
