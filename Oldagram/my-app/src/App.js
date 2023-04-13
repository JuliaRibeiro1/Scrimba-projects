

//import { useState } from "react"
import React from "react"
import  Header from "./components/Header.js"
import Post from "./components/Post.js"
import posts from "./data.js"




export default function App() {
  const [data,setData] = React.useState(posts)
  function toggleLike(id) {
    console.log("Oiiii")
      setData(prev => {
          return prev.map(post => {
           
              return post.id === id ? {...post, isLiked: !post.isLiked} : post
          })
      })
  }
 const postIterate = data.map(post => {
    
    return (
      <Post
       key={post.id}
       toggleFunction={() => toggleLike(post.id)}
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
 

