"use client"
import Button from "@/app/components/button/button";

export default function ContactForm() {
    
  return (
    <Button title="Contact me" onClickHandler={()=> alert("on click by contact page")}/>
  )
}
