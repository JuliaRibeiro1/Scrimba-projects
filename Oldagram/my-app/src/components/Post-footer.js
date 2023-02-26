import React from "react"

//Icons//
import iconHeart from "../images/icon-heart.png"
import iconHeartFilled from "../images/filled-heart.png"
import iconComment from "../images/icon-comment.png"
import iconDm from "../images/icon-dm.png"
import userAvatar from "../images/marie-antoinette.jpg"


export default function PostFooter(props) {
    let [postValues,setPost] = React.useState({
        isLiked: props.isLiked,
        likesNumber : props.likes
    })
    let [comment,setComment] = React.useState(props.comments)
    let [postc,setc] = React.useState(props.comments)
     let heartIcon = !postValues.isLiked ? iconHeart : iconHeartFilled
    function addLikes() {
       
      setPost(prev => {
       
        return{
        ...prev,   
        isLiked : !prev.isLiked,
       
        }
      })
        
    }
    function addComment() {
        setComment(comment => !comment)
    }
    function pushComment() {
       // props.comments+= document.querySelector("textarea").value
       setc([
        ...comment,document.querySelector("textarea").value
    ])
    }
 
    let userComment = comment? 
    <section className="comment-section">
        <div className="flex">
            <img className="main-user-comment-img" src={userAvatar}/>
            <form className="flex"></form>
            <textarea placeholder="Add a comment..." className="textarea"></textarea>
            <button  className="submit-comment" onClick={pushComment}>Publish</button>
            
            
        </div>
    </section>
    : ""
   
   let likes =  !postValues.isLiked ? postValues.likesNumber : postValues.likesNumber + 1
    return(
        <footer className="post-footer">
            <section>
            <ul className="btns-container flex">
                <li><button><img src={heartIcon} onClick={addLikes}/></button></li>
                <li><button><img src={iconComment} onClick={addComment}/></button></li>
                <li><button><img src={iconDm}/></button></li>
            </ul>
            </section>
            <section>
                <span className="likesNumberSpan">{likes}<span>likes</span></span>
            </section>
            <section className="main-comments-container">
                <p className="main-comment">
                    <span className="comment-main-username">{props.username}</span>
                    {props.quote}</p>
            </section>
            <section>
                {userComment}
            </section>
        </footer> 
        
    )
}