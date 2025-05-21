import About from "./About";
import Footer from "./Footer";
import { Header } from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Nav from "./Nav";
import Post from "./Post";
import { Route, Routes,Link } from "react-router-dom";
import { useState } from "react";

function App() {

  const [posts, setPosts] = useState([
{
id: 1,
title: "My First Post",
datetime: "July 01, 2021 11:17:36 AM",
body: "Made a video about Tesla Q1 results"
},
{
id: 2,
title: "My 2nd Post",
datetime: "July 01, 2021 11:17:36 AM",
body: "I attended a DeFi blockchain event"
},
{
id: 3,
title: "My 3rd Post",
datetime: "July 01, 2021 11:17:36 AM",
body: "Web3 global summit next week"
}])

  const [search, setSearch] = useState('')

  const [Search ,SetSearch] =useState('')
  return (
    <div className="App">
    
    <Header title="Social Media"/>
    <Nav
    Search={Search} 
    SetSearch={SetSearch}
    />
    <Home/>
    <NewPost/>
    <PostPage/>
    <About/>
    <Missing/>
    <Footer/>

    </div>

   
  );
}

export default App;
