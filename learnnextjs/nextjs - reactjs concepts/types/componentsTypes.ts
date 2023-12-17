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
