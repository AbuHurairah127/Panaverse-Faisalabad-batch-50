import { CardPropsType } from "@/types/componentsTypes";
import Tag from "../tag/tag";
var courseTitle: string[] = ["Web and Mobile"]

var count:number  = 10;
var countShow: boolean = false;
export default function Card(props: CardPropsType) {
    if(count > 5) {
        // do this
        countShow=true
    }
    return (
        <div style={props.style} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{props.courseTitle} - {props.tag}</h2>
            {props.isDescription && <p className="text-gray-600 mb-4">{props.description}</p> }
            <div className="flex flex-wrap">
                {props.showTag ? <Tag tagText={props.tag} /> : "No tags available"}
            </div>
           {countShow ? <span>{count}</span>:null } 
           {count > 5 && <span>{count}</span>} 
        </div>
    )
}