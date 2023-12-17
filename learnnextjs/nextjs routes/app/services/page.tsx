import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Button from "../components/button";

export default async function Services(){
   const session=  await getServerSession(authOptions)
//   if(!session) redirect("/")
  console.log("session", session);

  
    return (
        <div>
            <h2>{JSON.stringify(session)}</h2>
             <Button/>
        </div>
    )
}