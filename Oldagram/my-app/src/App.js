

//import { useState } from "react"
import React from "react"
import  Header from "./components/Header.js"
import Post from "./components/Post.js"
import posts from "./data.js"
import userData from "./userData.js"
import Profile from "./components/Profile.js"
import {Routes, Route} from "react-router-dom"


export default function App() {
  localStorage.clear()
  const [postsData,setData] = React.useState(JSON.parse( localStorage.getItem("postsData")) || posts)
  function toggleLike(id) {
      setData(prev => {
          return prev.map(post => {
              return post.id === id ? {...post, isLiked: !post.isLiked, likes: post.isLiked? post.likes - 1 : post.likes + 1} : post   
          })
      })
  }

  function addComment(id,data) {
   
      setData(prev => {
        return prev.map(
          post => {
            return post.id === id ? {...post, comments: [...post.comments, {userPic: userData.profileImg,text:data,username:userData.username}]} : post
          })})
     
    }

React.useEffect(() => {
  localStorage.setItem("postsData",JSON.stringify(postsData))
},[postsData])

 const postIterate = postsData.map(item => {
    return (
    
      <Post
       key={item.id}
       toggleLike={() => toggleLike(item.id)}
       addComment={addComment}
       {...item}
        />
   )
         
  })

  return (
    <>
      <Header/>
     
      <main>
      
        <section className="main-section">
        <Routes>
          <Route path="/*" element={postIterate}>
          </Route>   
            <Route path="/profile/:id/*" element={<Profile props={postsData}/>}></Route>
         </Routes>

        </section>
      </main>
    
    </>
  );

  }
 