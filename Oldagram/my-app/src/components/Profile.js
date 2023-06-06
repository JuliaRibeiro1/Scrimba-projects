import React from "react"
import avatarDucreux from "../images/avatar-ducreux.jpg"
import { useParams } from "react-router-dom"

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
                <img src={avatarDucreux} className="profile-img"></img>
                <div className="profile-info">
                    <div id="posts-info" >
                        <div className="info-numbers">213</div>
                        <div>Posts</div>
                    </div>
                    <div id="followers-info" >
                        <div className="info-numbers">500</div>
                        <div>Followers</div>
                    </div>
                    <div id="following-info" >
                        <div className="info-numbers">125</div>
                        <div>Following</div>
                    </div>
                </div>
                <p>{thisProfile.profileDescription}</p>
                
            </div>
            <button>Following</button>
            </header>
            <section className="posts-section">
            {thisProfile.posts.map(image => {
               return ( 
                    <>
                        <img className="profile-posts-img" src={image}/>
                    </>
                )})}
            </section>
            </>
    )
}