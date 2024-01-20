import React from "react"
import "./login.css"
import back from "../../../asstes/image/my-account.jpg"

function Singup() {
  return (
    <section className='login'>
      <div className='container'>
        <div className='backImg'>
          <img src={back} alt='' />
          <div className='text'>
            <h3>Register</h3>
            <h1>My account</h1>
          </div>
        </div>

        <form>
          <span>Email address *</span>
          <input type='text' required />
          <span>Username *</span>
          <input type='text' required />
          <span>Password *</span>
          <input type='password' required />
          <span>Conform Password *</span>
          <input type='password' required />
          <button className='button'>Register</button>
        </form>
      </div>
    </section>
  )
}

export default Singup
