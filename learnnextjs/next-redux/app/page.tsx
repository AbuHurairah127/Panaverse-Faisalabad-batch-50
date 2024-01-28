"use client"
import { useDispatch, useSelector } from "react-redux"
import CounterApp from "./components/counterApp"
import { changeUserName } from "@/store/slices/counterSlice"

export default function Home() {
  const dispatch = useDispatch()
  const counterSlice = useSelector((store) => store.counterSlice)

 const onClickHandler = ()=>{
  dispatch(changeUserName({user:"Ali"}))
 }
  return (
    <div>
      <button onClick={onClickHandler}>change user Name</button>
      <h1>  from home page - {counterSlice.userName} </h1>
      <h2>  from home page - {counterSlice.count} </h2>
      <CounterApp/>
    </div>
  )
}
