import React from "react"
import PostFooter from "../components/Post-footer.js"

export default function Post(props) {
    return(
        <article>
            <header className="header-post">
                <ul className="ul-post">
                <li className="span"><img src={props.avatar} alt=""/></li>
                    <li>
                        <h1>{props.name}</h1>
                    </li>
                    <li>
                        <h2>{props.location}</h2>
                    </li>
                </ul>
            </header>
            <img className="post-img" src={props.post}/>
            <PostFooter
         {...props}
       />
        </article>
         
    )
}