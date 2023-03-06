import React from "react"
import PostFooter from "../components/Post-footer.js"

export default function Post(props) { //O POST EM SI COM A FOTO, NOME, LOCAL E POST DO USUÁRIO
    return(
        <article>
            <header className="header-post">
                <ul className="ul-post">
                <li className="span"><img src={props.avatar} alt="profile"/></li>
                    <li>
                        <h1>{props.name}</h1>
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