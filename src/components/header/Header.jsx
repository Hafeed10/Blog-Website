import React from "react"
import logo from "../../asstes/image/logo.svg"
import "./header.css"
import { User } from "./User"
import { nav } from "../../asstes/data/data"
import { Link } from "react-router-dom"

export const Header = () => {
   window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            {/* <img src={logo} alt='logo' width='100px' /> */}
            <h1 style={{color:" rgb(46, 46, 101)"}}>HAFEEX</h1>
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header>
    </>
  )
}