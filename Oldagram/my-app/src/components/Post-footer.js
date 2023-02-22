import React from "react"

//Icons//
import iconHeart from "../images/icon-heart.png"
import iconComment from "../images/icon-comment.png"
import iconDm from "../images/icon-dm.png"

export default function PostFooter(props) {
    return(
        <footer className="post-footer">
            <section>
            <ul className="btns-container flex">
                <li><button><img src={iconHeart}/></button></li>
                <li><button><img src={iconComment}/></button></li>
                <li><button><img src={iconDm}/></button></li>
            </ul>
            </section>
            <section>
                <span className="likesNumberSpan">{props.likes}<span>likes</span></span>
            </section>
            <section className="main-comments-container">
                <p className="main-comment">
                    <span className="comment-main-username">{props.username}</span>
                    {props.comment}</p>
            </section>
        </footer> 
    )
}