"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

export default function Login() {
    const doLogin = async ()=>{
        await signIn("credentials", {
            username: "test@test.com",
            password: "sadf",
            redirect: false,
          });
    }
  return (
    <div>

        <button onClick={doLogin}>login</button>
    </div>
  )
}
