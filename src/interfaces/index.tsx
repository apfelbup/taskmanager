export type Status = 'Не сделано' | 'В процессе' | 'Выполнено';
export type BookStatus = 'Не Прочитано' | 'В процессе' | 'Прочитано';
export type step = {
    completed: boolean,
    content: string,
    id:string
};
export type comment = {
    id: string,
    content: string,
    date: string
}

export type radioOption = {
    id: string,
    name: string,
    value: string,
    title: string
};


//interfaces

export interface task {
    id:string,
    index?:any,
    content?:string,
    status?:Status,
    type?:string,
    deadline:string,
    createdDate:string,
    description?:string,
    completedDate?: undefined | string,
    steps?: step[] | [],
    comments?: comment[]
}

export interface book {
    id:string,
    index?:string,
    name:string,
    author:string,
    status?:string,
    rating:number,
    pagesLeft?: number,
    pages: number,
}

export interface IRadio {
    options: radioOption[],
    handler: (arg:string) => void;

}



//statistic

export type statisticTypes = {
    work:number,
    study:number,
    hobby:number,
    other:number
}

export type statisticDays = {
    mon:[] | any[],
    tue:[] | any[],
    wed:[] | any[],
    thu:[] | any[],
    fri:[] | any[],
    sat:[] | any[],
    sun:[] | any[]
}

export type statisticWeeks = {
    first: [] | any[],
    second: [] | any[],
    third: [] | any[] ,
    fourth: [] | any[],
    fifth: [] | any[]

}

export type statisticTimeDays = {
    mon: number,
    tue: number,
    wed: number,
    thu: number,
    fri: number,
    sat: number,
    sun: number
}

export type statisticTimeWeeks = {
    first: number,
    second: number,
    third: number,
    fourth: number,
    fifth: number

}

export type statisticRange = {
    daily: statisticTypes,
    weekly: statisticTypes
}


export interface IStatistic {
    dailyTotalTime:number,
    weeklyTotalTime:number,
    dayOfMonth:number,
    weekOfMonth:number,
    month:number,

    statistic: {
        daily:statisticTypes,
        weekly:statisticTypes,
    },
    completedTasks:{
        weekly: statisticDays,
        monthly: statisticWeeks
    },
    time:{
        weekly: statisticTimeDays,
        monthly: statisticTimeWeeks
    },



}

export interface IUpdateStatistic {
    type:string,
    time:number,
    week: string | undefined,
    day: string
}