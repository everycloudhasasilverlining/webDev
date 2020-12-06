import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header style={headerStyle}>
            <h1>ToDoList</h1>
            <Link style={linkstyle} to="/"> Home </Link> | 
            <Link style={linkstyle} to="/About"> About </Link>
            </header>
        </div>
    )
}

const headerStyle = {
    background : '#333',
    color : '#fff',
    textAlign : 'center',
    padding : '10px'
  }

const linkstyle = {
    color : '#fff',
    textDecoration : 'none'
  }


export default Header;

