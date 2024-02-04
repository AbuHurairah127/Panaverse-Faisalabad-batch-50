import { ExpenseType } from "./commonTypes"

export type ButtonProps = {
    title: string
    data?:string,
    onClickHandler: ()=> void
}

export type CardPropsType = {
    courseTitle: string,
    tag:string,
    description: string,
    showTag?: boolean,
    isDescription?: boolean,
    style:{}
}


export type TagPropsType = {
    tagText: string
}


export type ExpensePropsType = {
    note: string,
    date: string,
    amount: number,
    category: string,
    id: string
}

export type ExpenseModalProps = {
    isOpen: boolean,
    onClose: ()=> void,
    expense: ExpenseType
    onAddExpense: (expense:ExpenseType)=> void
    onUpdateExpense: (expense:ExpenseType)=> void
}