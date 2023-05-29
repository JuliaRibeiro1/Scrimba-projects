import React from 'react';
import userData from "../userData.js"
import logo from '../images/logo.png'


export default function Header(){
 // IRÁ CONTER APENAS O LOGO E A FOTO DE PERFIL DO "USUÁRIO"
    return(
    <header className='header'>
        <ul className='ul-header flex'>
            <li> <img className='logo-img' alt="oldagram logo" src={logo}/> </li>
            <li> <img className='main-user-avatar-img' alt="user" src={userData.profileImg}/> </li>  
        </ul>
    </header>
    )
}