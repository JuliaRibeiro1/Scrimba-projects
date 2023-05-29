

//import { useState } from "react"
import React from "react"
import  Header from "./components/Header.js"
import Post from "./components/Post.js"
import posts from "./data.js"
import userData from "./userData.js"


export default function App() {

  const [postsData,setData] = React.useState(JSON.parse( localStorage.getItem("postsData")) || posts)
  function toggleLike(id) {
      setData(prev => {
          return prev.map(post => {
              return post.id === id ? {...post, isLiked: !post.isLiked, likes: post.isLiked? post.likes - 1 : post.likes + 1} : post   
          })
      })
  }
  console.log(postsData)
  function addComment(id) {
   
      setData(prev => {
        return prev.map(
          prev => {
            return {...prev, comments: {...prev.comments, userPic: userData.profileImg,text:"oi",username:userData.username}}
          })})/*post => {
          return post.id === id ? {...post, comments: {...post.comments, userPic: userData.profileImg,text:"oi",username:userData.username}} : prev
        }*/
      console.log(postsData)
     
    }

React.useEffect(() => {
  localStorage.setItem("postsData",JSON.stringify(postsData))
  console.log('Mudou')
},[postsData])

 const postIterate = postsData.map(item => {
    return (
      <Post
       key={item.id}
       toggleLike={() => toggleLike(item.id)}
       addComment={() => addComment(item.id)}
       {...item}
        />
   )
         
  })

  return (
    <>
      <Header/>
      <main>
        <section className="main-section">
          {postIterate}
        </section>
      </main>
    </>
  );

  }
 

