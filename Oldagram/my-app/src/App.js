

//import { useState } from "react"
import React from "react"
import  Header from "./components/Header.js"
import Post from "./components/Post.js"
import posts from "./data.js"


export default function App() {
  const [data,setData] = React.useState(posts)
  function toggleLike(id) {
 
      setData(prev => {
          return prev.map(post => {
              return post.id === id ? {...post, isLiked: !post.isLiked, likes: post.likes + 1} : post   
          })
      })
  }
  function toggleComments(id) {
 
    setData(prev => {
        return prev.map(post => {
            return post.id === id ? {...post, commentsOn: !post.commentsOn} : post   
        })
    })
}
 const postIterate = data.map(post => {
    
    return (
      <Post
       key={post.id}
       toggleLike={() => toggleLike(post.id)}
       toggleComments={() => toggleComments(post.id)}
       
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
 

