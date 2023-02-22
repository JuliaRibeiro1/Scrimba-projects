import React from 'react';

import logo from '../images/logo.png'
import userAvatar from "../images/user-avatar.png"

export default function Header(){
    return(
    <header className='header'>
        <ul className='ul-header flex'>
            <li> <img className='logo-img' src={logo}/> </li>
            <li> <img className='main-user-avatar-img'src={userAvatar}/> </li>  
        </ul>
    </header>
    )
}