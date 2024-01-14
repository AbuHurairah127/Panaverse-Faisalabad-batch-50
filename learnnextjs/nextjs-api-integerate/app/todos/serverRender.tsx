import axios from "axios"


const getTodos = async ()=>{
  try {

  const result = await fetch('https://dummyjson.com/todos')
  console.log("data from api");
 const  data = await result.json()
 console.log("data",data);
 
  return data?.todos
  } catch (error) {
     console.log("error",error);
  }

}

export default async function Todos() {
  
    const todos = await getTodos()
  return (
    <div>
        {todos?.map((todo)=>{
            return <div>
                {todo.id} - {todo.todo}
            </div>
        })}
    </div>
  )
}


