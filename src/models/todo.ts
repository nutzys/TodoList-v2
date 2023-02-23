export interface Todo {
    id: number,
    title: string,
    description: string,
    isDone: boolean,
    date: string,
    time: string,
    isDelayed: boolean,
    missedTime: number
}