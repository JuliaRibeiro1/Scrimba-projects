import React from "react"
import { useParams } from "react-router-dom"
import {Link,Routes, Route} from "react-router-dom"
import Post from "../components/Post.js"

export default function Profile(props) {
   console.log(props)
    const {id} = useParams()
    console.log(props)
    const thisProfile = props.props.find(profile => profile.id === id)
  

    return (
        <>
        <header className="header-profile">
         
            <h3>{thisProfile.username}</h3>
           
            <div className="header-profile-container">
                
                <img src={thisProfile.avatar} className="profile-img"></img>
                <div className="profile-info">
                    <div id="posts-info" >
                        <div className="info-numbers">{thisProfile.posts.length}</div>
                        <div>Posts</div>
                    </div>
                    <div id="followers-info" >
                        <div className="info-numbers">{thisProfile.followers}</div>
                        <div>Followers</div>
                    </div>
                    <div id="following-info" >
                        <div className="info-numbers">{thisProfile.following}</div>
                        <div>Following</div>
                    </div>
                </div>
                <h4>{thisProfile.name}</h4>
               
                <button className="followBtn">Following</button>
                {thisProfile.profileDescription && <h4 className="title">{thisProfile.profileTitle}</h4>}
                <p>{thisProfile.profileDescription}</p>
                
            </div>
           
            </header>
            <Routes>
                <Route exact path={`/${thisProfile.id}/posts`} element={<Post props={thisProfile}/>}></Route>
            </Routes>
            <section className="posts-section">
            <span>POSTS</span>
           <div className="posts"> {thisProfile.posts.map(image => {
            
               return ( 
                    <>
                       <Link to={`/${thisProfile.id}/posts`}><img className="profile-posts-img" src={image}/></Link> 
                    </>
                )})}
                </div>
            </section>
            </>
    )
}