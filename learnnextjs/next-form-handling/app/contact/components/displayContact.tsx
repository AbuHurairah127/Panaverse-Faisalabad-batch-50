import { contactTypes } from "@/types/commonTypes";

export default function DisplayContact(props:{contactData:contactTypes}) {
  return (
    <div>
        <h1>Name: {props.contactData.name}</h1>
        <h1>email: {props.contactData.phone}</h1>
    </div>
  )
}
