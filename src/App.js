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

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/newpost">NewPost</Link></li>
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/newpost" element={<NewPost/>}/>
        <Route path="/postpage" element={<PostPage/>}/>
        <Route path="/postpage/:id" element={<Post/>}/>
        <Route path="*" element={<Missing/>}/>

        
      </Routes >
    {/* <Header/>
    <Nav/>
    <Home/>
    <NewPost/>
    <PostPage/>
    <About/>
    <Missing/>
    <Footer/> */}

    </div>

   
  );
}

export default App;
