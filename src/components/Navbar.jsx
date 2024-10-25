import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React User</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item justify-content-end">
                            <Link className="nav-link border rounded" to="/add">Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar
