export type directorType = {
    name: string,
    title: string,
    intro: string,
    facebookUrl: string
}

export type studentType = {
    name: string,
    gender: string,
    physics: number,
    maths: number,
    english: number
}

export type contactTypes = {
        name: string,
        email:string,
        phone:number,
        message:string

}


export type onChangeEventType = {
     target: { value: string, name:string } 
}