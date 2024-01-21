"use client"
import axios from "axios"
import { useRouter } from "next/router"
import {useState, useEffect} from "react"
export default function Todos() {
    const [todos, setTodos] = useState([])
    const [file, setFile] = useState({})
    const [loader, setLoader] = useState(false)
    const router = useRouter()
    
    useEffect(()=>{

      getTodos()
    },[])
    

    const getTodos = async ()=>{
         try {
          setLoader(true)
         const result = await axios.get('https://dummyjson.com/todos')
         console.log("data from api",result.data.todos);
         setTodos(result.data.todos)
         router.push("/todos")
         } catch (error) {
            console.log("error",error);
         }
         finally{
          setLoader(false)
         }
    }


  return (
    <div>
    {/* <Link href="/service"></Link> */}
        {/* <button className="bg-red-500" onClick={getTodos}>get todos</button> */}
        {loader && "loading..."}
        {todos.map((todo)=>{
            return <div>
                {todo.id} - {todo.todo}
            </div>
        })}
    </div>
  )
}


