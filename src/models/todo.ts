export interface Todo {
    id: number,
    title: string,
    description: string,
    isDone: boolean,
    date: Date,
    time: Date,
    isDelayed: boolean,
    missedTime: number
}