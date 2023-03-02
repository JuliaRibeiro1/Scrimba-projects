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
    
        window.localStorage.setItem("postValues", JSON.stringify(postValues.isLiked));
      
    let [showComments,setShowComments] = React.useState(props.comments)

    let [postComment,setComment] = React.useState(props.comments)

    let [commentText, setcommentText] = React.useState('');

   let heartIcon = postValues.isLiked? iconHeartFilled : iconHeart

   
  window.localStorage.setItem("img",heartIcon)
   let likes =  !postValues.isLiked ? postValues.likesNumber : postValues.likesNumber + 1
  

    function addLikes() { 
      setPost(prev => {
        return{
        ...prev,   
        isLiked : !prev.isLiked,
        }
      }) 
    }
    


    function comments() {
        setShowComments(comment => !comment)
    }

    let userComment = !showComments? 
    <section className="comment-section">
        <ul className="comments-list">
        {postComment.map(user => (
          <li>
            <img src={user.userPic} alt="user" className="user-comment-img span"/>
            <h1>{user.username}</h1>
            <p>{user.text}</p>
          </li>
        ))}
        </ul>
        <div className="flex">
            <img className="main-user-comment-img" alt="user" src={userAvatar}/>
            <form className="flex"></form>
            <textarea placeholder="Add a comment..." className="textarea" onChange={e => setcommentText(e.target.value)} ></textarea>
            <button  className="submit-comment" onClick={() => {
        ;
        setComment([
          ...postComment,
          {userPic: userAvatar,text:commentText,username:"Marie"}
        ]
        )}}>Publish</button>
          
        </div>
    </section>
    : ""
   

    return(
        <footer className="post-footer">
            <section>
            <ul className="btns-container flex">
                <li><button><img src={heartIcon} alt="like" onClick={addLikes}/></button></li>
                <li><button><img src={iconComment} alt="comment" onClick={comments}/></button></li>
                <li><button><img src={iconDm} alt="dm"/></button></li>
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
            <section className="user-comments-container">
                {userComment}
            </section>
        </footer> 
        
    )
}