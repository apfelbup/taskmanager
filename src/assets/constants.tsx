import {AiFillBook, AiFillEdit, AiFillFund} from 'react-icons/ai'

export const LINKS = [
    {name:'Задачи', to:'/', icon: AiFillEdit},
    {name:'Статистика', to:'/statistic', icon: AiFillFund},
    {name:'Книги', to:'/books', icon: AiFillBook}
]

export const TITLES = {
    tasks:"Таски",
    focus:"Фокусировка",
    statistic:"Статистика",
    books:"Книги"
};


export const TASK_TYPES = [
    {
        name:"focusType",
        title:'работа',
        value:'work',
        id:'work'
    },
    {
        name:"focusType",
        title:'обучение',
        value:'study',
        id:'study'
    },
    {
        name:"focusType",
        title:'хобби',
        value:'hobby',
        id:'hobby'
    },
    {
        name:"focusType",
        title:'другое',
        value:'other',
        id:'other'
    },
];

export const DAYS = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat'
];

export const STATUSES_COLLECTION = [
    {
        title:"Не сделано",
        value:'notAchieved',
        id:'notAchieved',
    },
    {
        title:"В процессе",
        value:'inProcess',
        id:'notAchieved'
    },
    {
        
        title:"Выполнено",
        value:'fulfilled',
        id:'notAchieved',
    }
]

export const TAG_COLLECTION = [
    {value:"one", label:"пн"},
    {value:"two", label:"вт"},
    {value:"three", label:"ср"},
    {value:"four", label:"чт"},
    {value:"five", label:"пт"},
    {value:"six", label:"сб"},
    {value:"seven", label:"вс"},
]

export const STATUSES = ['Не сделано', 'В процессе','Выполнено'];
export const BOOKS_STATUSES = ['Не прочитано', 'В процессе','Прочитано'];