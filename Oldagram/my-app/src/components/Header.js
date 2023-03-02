import React from 'react';

import logo from '../images/logo.png'
import userAvatar from "../images/marie-antoinette.jpg"

export default function Header(){
    return(
    <header className='header'>
        <ul className='ul-header flex'>
            <li> <img className='logo-img' alt="oldagram logo" src={logo}/> </li>
            <li> <img className='main-user-avatar-img' alt="user" src={userAvatar}/> </li>  
        </ul>
    </header>
    )
}