"use client"
import { ButtonProps } from "@/types/componentsTypes";
var count:number = 1;
function Button(props:ButtonProps){
    return (
        <button onClick={props.onClickHandler}>{props.title}</button>
    )
}

export default  Button;