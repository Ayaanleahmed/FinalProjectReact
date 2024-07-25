import React, { useState } from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  const [name, setname]=useState();
  const [email, setemail]=useState();
  const [message, setMessage]=useState();
  console.log(name)
  function showmsg (e){
    e.preventDefault();
    alert("great we have", name)
  }
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' onChange={(e)=>setname(e.value)} />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button onSubmit={showmsg}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
