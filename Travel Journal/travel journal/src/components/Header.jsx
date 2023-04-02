import React from 'react'
import worldIcon from "../assets/world.png"

export default function Header() {
    return(
        <header className="app-header">
            <nav>
                <li>
                    <img src={worldIcon}/>
                    <h3>my travel jounal</h3>
                </li>
            </nav>
        </header>
    )
}