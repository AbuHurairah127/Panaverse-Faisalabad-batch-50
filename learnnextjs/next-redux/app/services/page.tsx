"use client"

import { useSelector } from "react-redux"

export default function Services() {
    const services = useSelector((store)=> store.serviceSlice.services)
  return (
    <div>
       <h1>List of services</h1>
       {services?.map((service)=>{
        return <div>{service.title}</div>
       })}

    </div>
  )
}
