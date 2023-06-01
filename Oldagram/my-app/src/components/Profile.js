import React from "react"
import avatarDucreux from "../images/avatar-ducreux.jpg"

export default function Profile() {
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
        </header>
    )
}