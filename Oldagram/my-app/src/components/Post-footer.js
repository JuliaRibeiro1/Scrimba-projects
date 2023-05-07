import React from "react"

//Icons//
import iconHeart from "../images/icon-heart.png"
import iconHeartFilled from "../images/filled-heart.png"
import iconComment from "../images/icon-comment.png"
import iconDm from "../images/icon-dm.png"
import data from "../data.js"
import userData from "../userData.js"
 
export default function PostFooter(props) {
   
 //   let [showComments,setShowComments] = React.useState(false)

    let [postComment,setComment] = React.useState(props.comments)

    let [commentText, setcommentText] = React.useState('');

    let heartIcon = props.isLiked? iconHeartFilled : iconHeart //SE O ISLIKED FOR VERDADEIRO A ICONE É TROCADO POR UM CORAÇÃO VERMELHO, CASO CONTRÁRIO CONTINUA O MESMO
 
   // let likes =  props.isLiked ? props.likes + 1: props.likes //SE O ISLIKED FOR FALSO O VALOR DE LIKES CONTINUA O MEMSO, CASO CONTRÁRIO O NÚMERO DE O LIKES AUMENTA 1

   

    
  /*  function comments() {
        setShowComments(comment => !comment)
    }*/
    
   let userComment = //showComments? 
    <section className="comment-section">
        <ul className="comments-list">  {/*IRÁ RENDERIZAR OS COMENTÁRIOS ANTERIORES(OBJETOS)*/}
        {postComment.map(user => (  
          <li>
            <img src={user.userPic} alt="user" className="user-comment-img span"/>
            <h1>{user.username}</h1>
            <p>{user.text}</p>
          </li>
        ))}
        </ul>
        <div className="flex"> {/*ONDE O USUÁRIO IRÁ DIGITAR SEU COMENTÁRIO*/}
            <img className="main-user-comment-img" alt="user" src={userData.profileImg}/>
            <textarea placeholder="Add a comment..." className="textarea" value={commentText} onChange={e => setcommentText(e.target.value)} ></textarea>
            <button  className="submit-comment" onClick={() => {
                
            setComment([ //IRÁ ADICIONAR AO ARRAY UM OBJETO COM A FOTO,USERNAME E COMENTÁRIO DO USUÁRIO
                ...postComment,
                {userPic: userData.profileImg,text:commentText,username:userData.username}
                ])
                setcommentText("") //LIMPAR O TEXTAREA DEPOIS QUE O BOTÃO DE PUBLICAR FOR CLICADO
            }}>Publish</button>
          
        </div>
    </section>
   // : "" 
   
    return(
        <footer className="post-footer">
            <section>
            <ul className="btns-container flex">
                
                <li><button><img src={heartIcon} alt="like" onClick={props.toggleLike}/></button></li>
                <li><button><img src={iconComment} alt="comment" onClick={props.toggleComments}/></button></li>
                <li><button><img src={iconDm} alt="dm"/></button></li>
            </ul>
            </section>
            <section>
                <span className="likesNumberSpan">{props.likes}<span>likes</span></span>
            </section>
            <section className="main-comments-container">
                <p className="main-comment">
                    <span className="comment-main-username">{props.username}</span>
                    {props.quote}</p>
            </section>
            {props.commentsOn && <section className="user-comments-container">
                {userComment}
            </section>}
        </footer> 
    )
}