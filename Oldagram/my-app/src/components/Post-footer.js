import React from "react"

//Icons//
import iconHeart from "../images/icon-heart.png"
import iconHeartFilled from "../images/filled-heart.png"
import iconComment from "../images/icon-comment.png"
import iconDm from "../images/icon-dm.png"
import PostComment from "../components/PostComment.js"
import userData from "../userData.js"
 
export default function PostFooter(props) {
   
 //   

    let [postComment,setComment] = React.useState(props.comments)

    let [commentText, setcommentText] = React.useState('');
    let [renderComments, setRenderComments] = React.useState(false)
    let heartIcon = props.isLiked? iconHeartFilled : iconHeart //SE O ISLIKED FOR VERDADEIRO A ICONE É TROCADO POR UM CORAÇÃO VERMELHO, CASO CONTRÁRIO CONTINUA O MESMO
    function toggleComments() {
        setRenderComments(prev => !prev)
    }

    
    function handleChange(event) {
        const {value} = event.target
        setcommentText(value)
    }
    
   let userComment = //showComments? 
    <section className="comment-section">
        <ul className="comments-list">  {/*IRÁ RENDERIZAR OS COMENTÁRIOS ANTERIORES(OBJETOS)*/}
        {postComment.map(user => (  
         <PostComment
            {...user}
         />
        ))}
       
        </ul>
        <div className="flex"> {/*ONDE O USUÁRIO IRÁ DIGITAR SEU COMENTÁRIO*/}
            <img className="main-user-comment-img" alt="user" src={userData.profileImg}/>
            <textarea placeholder="Add a comment..." className="textarea" value={commentText} onChange={handleChange}  ></textarea>
            <button className="submit-comment" onClick={() => {   
            setComment([ //IRÁ ADICIONAR AO ARRAY UM OBJETO COM A FOTO,USERNAME E COMENTÁRIO DO USUÁRIO
                ...postComment,
                {   userPic: userData.profileImg,
                    text:commentText,
                    username:userData.username}
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
                <li><button><img src={iconComment} alt="comment" onClick={toggleComments}/></button></li>
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
            {renderComments && <section className="user-comments-container">
                {userComment}
            </section>}
        </footer> 
    )
}