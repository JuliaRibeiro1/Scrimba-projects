import React from "react"
import PostFooter from "../components/Post-footer.js"
import {Link} from "react-router-dom"


export default function Post(props) {
    console.log(props.id)
 //O POST EM SI COM A FOTO, NOME, LOCAL E POST DO USUÁRIO
    return(
        <article>
            <header className="header-post">
                <ul className="ul-post">
              
                    <li className="span">
                    <Link to={`/${props.id}`}><img src={props.avatar} alt="profile"/></Link>
                    </li> 
                    <li>
                    <Link style={{textDecoration: 'none', color:"black"}} to={`/${props.id}`}> 
                        <h1>{props.name}</h1>
                    </Link>
                    </li>
                   
                    <li>
                        <h2>{props.location}</h2>
                    </li>
                </ul>
            </header>
            <img className="post-img" alt="post"src={props.post}/>

            <PostFooter 
         {...props} //POSTFOOTER IRÁ COMPARTILHAR DA MESMAS PROPS DE POST
       />
         
        </article>
         
    )
}