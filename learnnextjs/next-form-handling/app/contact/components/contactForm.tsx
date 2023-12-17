"use client"
import { useState } from "react"
import DisplayContact from "./displayContact"
import { contactTypes, onChangeEventType } from "@/types/commonTypes"

export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    email: "",
    phone: 0
  })

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }

  // const getUserNameHandler = (event: onChangeEventType) => {
  //   console.log("getUserNameHandler call", event.target.value);
  //   // userName = event.target.value
  //   setUserName(event.target.value)

  // }

  // const onChangeEmailHandler = (e: onChangeEventType) => {
  //   setEmail(e.target.value)
  // }

   // var userName:string  = "defaut"
  // const [userName, setUserName] = useState<string>("")
  // const [email, setEmail] = useState<string>("")
  // const [text, setText] = useState<string>("")
  // const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      <form className="max-w-md mx-auto">
        <div className="mb-4">

          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            onChange={onChangeHandler}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            onChange={onChangeHandler}
            type="number"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <DisplayContact contactData={contactInfo} />
    </>
  )
}
