import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({Search ,SetSearch}) => {
  return (
   <nav className='Nav'>
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="search">
        Search Posts
      </label>
      <input type="text" placeholder='Search Posts' id="search" value={Search} onChange={(e)=>SetSearch(e.target.value)} />
    </form>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="post">Post</Link></li>
      <li><Link to="about">About</Link></li>
</ul>
   </nav>
  )
}

export default Nav