import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"


export default async function Mobile(){

    const  session = await getServerSession(authOptions)
    return (
        <div>
            <h2>Services / mobile {JSON.stringify(session)}</h2>
        </div>
    )
}