"use client"
import axios from "axios"
import {useState, useEffect} from "react"
export default function Todos() {
    const [todos, setTodos] = useState([])
    const [file, setFile] = useState({})
    const [loader, setLoader] = useState(false)
    const [update, setUpdate] = useState(false)
    
    useEffect(()=>{
      alert("Todos")
      getTodos()
    },[update])
    

    const getTodos = async ()=>{
         try {
          setLoader(true)
         const result = await axios.get('https://dummyjson.com/todos')
         console.log("data from api",result.data.todos);
         setTodos(result.data.todos)
         } catch (error) {
            console.log("error",error);
         }
         finally{
          setLoader(false)
         }
    }
const reFetch = ()=>{
  setUpdate(true)
}

  return (
    <div>
        <button className="bg-red-500" onClick={reFetch}>get todos</button>
        {loader && "loading..."}
        {todos.map((todo)=>{
            return <div>
                {todo.id} - {todo.todo}
            </div>
        })}
    </div>
  )
}

