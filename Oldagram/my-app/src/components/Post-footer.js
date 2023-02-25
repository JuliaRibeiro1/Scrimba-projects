import React from "react"

//Icons//
import iconHeart from "../images/icon-heart.png"
import iconHeartFilled from "../images/filled-heart.png"
import iconComment from "../images/icon-comment.png"
import iconDm from "../images/icon-dm.png"


export default function PostFooter(props) {
    let [countLikes, setLikes] = React.useState(props.liked)
    
   // let [pic, setPic ] = React.useState(props.isLiked)
  //  let check = true;
   
    //let heartIcon = !props.isLiked ? iconHeart : iconHeartFilled
    function addLikes() {
       
      //  setLikes(likes => !check ? likes + 1 : likes - 1)
      setLikes(prev => !prev)
        
    }
   
 

    return(
        <footer className="post-footer">
            <section>
            <ul className="btns-container flex">
                <li><button><img src={countLikes? iconHeartFilled : iconHeart} onClick={addLikes}/></button></li>
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