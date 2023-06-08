export type Status = 'Не сделано' | 'В процессе' | 'Выполнено';

export interface Data {
    id:any,
    content: string,
    status: Status,
    type:any
}