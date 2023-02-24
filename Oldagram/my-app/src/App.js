

//import { useState } from "react"
import React from "react"
import  Header from "./components/Header.js"
import Post from "./components/Post.js"
import posts from "./data.js"




export default function App() {
  
 const postIterate = posts.map(post => {
    
    return (
      <Post
       key={post.id}
       {...post}
        />
   )
         
  })

  return (
    <>
      <Header/>
      <main>
        <section>
          {postIterate}
        </section>
      </main>
    </>
  );

  }
 

