
//import './App.css';
//import logo from './logo.svg';
import  Header from "./components/Header.js"
import Post from "./components/Post.js"
import posts from "./data.js"
import PostFooter from "./components/Post-footer"
console.log(posts)
export const iterate = posts.map(post => {
  console.log(post)
  return (
    <PostFooter
    {...post}
    />
  )
})
export default function App() {
  const postIterate = posts.map(post => {
    console.log(post)
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
          {iterate}
        </section>
      </main>
    </>
  );
}


