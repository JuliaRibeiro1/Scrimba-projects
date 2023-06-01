import React from 'react';
import userData from "../userData.js"
import logo from '../images/logo.png'
import {Link} from "react-router-dom"

export default function Header(){
 // IRÁ CONTER APENAS O LOGO E A FOTO DE PERFIL DO "USUÁRIO"
    return(
    <header className='header'>
        <ul className='ul-header flex'>
           <Link to="/"><li> <img className='logo-img' alt="oldagram logo" src={logo}/> </li></Link> 
            <li> <img className='main-user-avatar-img' alt="user" src={userData.profileImg}/> </li>  
        </ul>
    </header>
    )
}