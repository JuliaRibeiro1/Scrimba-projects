import React from 'react';

import logo from '../images/logo.png'
import userAvatar from "../images/marie-antoinette.jpg"

export default function Header(){ // IRÁ CONTER APENAS O LOGO E A FOTO DE PERFIL DO "USUÁRIO"
    return(
    <header className='header'>
        <ul className='ul-header flex'>
            <li> <img className='logo-img' alt="oldagram logo" src={logo}/> </li>
            <li> <img className='main-user-avatar-img' alt="user" src={userAvatar}/> </li>  
        </ul>
    </header>
    )
}