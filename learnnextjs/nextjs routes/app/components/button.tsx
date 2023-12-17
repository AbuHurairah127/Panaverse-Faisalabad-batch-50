"use client"
import { getSession, signOut, useSession } from 'next-auth/react'
import React from 'react'

export default function Button() {
    // const { data: session, status } = useSession()
    // console.log("session",session)
    const func = async ()=>{
       const data = await getSession()
       alert(JSON.stringify(data))
    }
  return (
    <button onClick={()=>signOut()}>logout</button>
  )
}
