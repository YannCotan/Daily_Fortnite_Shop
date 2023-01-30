import React from 'react'
import "./Header.css"
import ftn from"./fortnite_icon.svg"
import apex from"./apex legends.ico"
import house from"./house-solid.svg"
import {Link} from "react-router-dom"

function Header() {
    const style = {
        textDecoration : "none",
        outline : "none"
    }
  return (
    <nav className="Header">
        <div className="Logo"><h3>UR DAILY</h3></div>
        <div className="Menu">
            <ul className='Menu__options'>
                <Link to="Home" style={style}>
                    <li className='home'><img src={house} alt="" height="20px"/></li>
                </Link>
                <Link to="Fortnite" style={style}>
                    <li className='ftn'><img src={ftn} alt=""/></li>
                </Link>
                <Link to="Apex" style={style}>
                    <li className='apex'><img src={apex} alt="" /></li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Header