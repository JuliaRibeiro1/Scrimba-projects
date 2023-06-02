import React from "react"
import avatarDucreux from "../images/avatar-ducreux.jpg"
import { useParams } from "react-router-dom"

export default function Profile(props) {
   
    const {id} = useParams()
    console.log(props)
    const thisProfile = props.props.find(profile => profile.id === id)
    thisProfile.posts.map(ittem => {
        console.log("OI")
    })

    return (

        <header className="header-profile">
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
            </div>
            <section className="posts-section">
            {thisProfile.posts.map(image => {
               return ( 
               <>
                <div>oii</div>
                    <img src={image}/>
                    </>
                )})}
            </section>
        </header>
    )
}