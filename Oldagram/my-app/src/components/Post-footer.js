import React from "react"

//Icons//
import iconHeart from "../images/icon-heart.png"
import iconComment from "../images/icon-comment.png"
import iconDm from "../images/icon-dm.png"


export default function PostFooter(props) {
    let [countLikes, setLikes] = React.useState(props.likes)

    function addLikes() {
        setLikes(likes => likes + 1)
    }

    return(
       
        <footer className="post-footer">
            <section>
            <ul className="btns-container flex">
                <li><button><img src={iconHeart} onClick={addLikes}/></button></li>
                <li><button><img src={iconComment}/></button></li>
                <li><button><img src={iconDm}/></button></li>
            </ul>
            </section>
            <section>
                <span className="likesNumberSpan">{countLikes}<span>likes</span></span>
            </section>
            <section className="main-comments-container">
                <p className="main-comment">
                    <span className="comment-main-username">{props.username}</span>
                    {props.comment}</p>
            </section>
        </footer> 
        
    )
}