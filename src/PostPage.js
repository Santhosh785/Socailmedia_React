import React from 'react'
import { Route, Routes,Link } from "react-router-dom";


const PostPage = () => {
  return (
    <div>
      <main>
  <h1>PostPage</h1>
      <Link to="/postpage/1">Post 1</Link>
  <br></br>
      <Link to="/postpage/2">Post 2</Link>
  <br></br>
  <Link to="/postpage/3">Post 3</Link>
  </main>
      
    </div>
  )
}

export default PostPage
