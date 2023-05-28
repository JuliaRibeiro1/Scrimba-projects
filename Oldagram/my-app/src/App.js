

//import { useState } from "react"
import React from "react"
import  Header from "./components/Header.js"
import Post from "./components/Post.js"
import posts from "./data.js"


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
  function addComment(data) {
    setData(prev => {
      

    })}

React.useEffect(() => {
  localStorage.setItem("postsData",JSON.stringify(postsData))
  console.log("OI")
},[postsData])
 const postIterate = postsData.map(post => {
    console.log(post)
    return (
      <Post
       key={post.id}
       toggleLike={() => toggleLike(post.id)}
       addComment={addComment}
     
       
       {...post}
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
 

