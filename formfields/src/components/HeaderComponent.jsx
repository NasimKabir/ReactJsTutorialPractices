import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class HeaderComponent extends Component {
    render() {

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome">Home</Link></li>
                        <li><Link className="nav-link" to="/contact">Contact</Link></li>
                        <li><Link className="nav-link" to="/block">Block</Link></li>
                    </ul>

                </nav>
            </header>
        )
    }
}

export default HeaderComponent