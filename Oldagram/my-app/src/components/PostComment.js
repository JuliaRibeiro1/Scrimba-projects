import React from "react"

export default function PostComment(props) {
    return (
        <li>
        <img src={props.userPic} alt="user" className="user-comment-img span"/>
        <h1>{props.username}</h1>
        <p>{props.text}</p>
      </li>
    )
}