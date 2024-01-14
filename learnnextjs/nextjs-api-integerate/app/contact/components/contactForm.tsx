"use client"
import { useState } from "react"
import * as yup from "yup"
import DisplayContact from "./displayContact"
import { contactTypes, onChangeEventType } from "@/types/commonTypes"




export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    email: "",
    phone: 0,
    message:"",
  })

  const [errors, setError ] = useState<string[]>([])

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(10),
    email: yup.string().email().required(),
    message: yup.string().required()
 })

  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }


  const onClickHandler = async () => {
     try {
      const result = await contactInfoSchema.validate(contactInfo,{ abortEarly: false })
      console.log(result);
      
       
      if (!result) {
        return 
      }
      
      let newContactList:contactTypes[] = [...contactList, contactInfo]
      setContactList(newContactList)
  
      setError([])
      setContactInfo({
        name:"",
        email:"",
        phone:0,
        message:""
      })
     } catch (err:any) {

      setError(err.errors)
      let errorsObject:any = {}
      err.inner.forEach((err:any) => {
        errorsObject[err.path] = err.errors;
    });

    console.log(errorsObject);

       console.log("error",err.errors);

       
     }
   
    
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
      {/* <form className="max-w-md mx-auto"> */}
      <div className="mb-4">

        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          value={contactInfo.name}
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
          value={contactInfo.email}
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
          value={contactInfo.phone}
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
         value={contactInfo.message}
         onChange={onChangeHandler}
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>
        {errors.map((item, index)=>{
          return (
            <div key={index} style={{color:"red"}}>
              <h1>{item}</h1>
            </div>
          )
        })}
      <div className="mb-6">
        <button
          onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      {/* </form> */}
      <DisplayContact contactData={contactList} />
    </>
  )
}
