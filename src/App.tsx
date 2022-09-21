import React, { useEffect, useState, useRef } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import ViewPost from './Components/ViewPost';
import Navbar from './Components/Navbar';
import About from './Components/About';
import UpdatePost from './Components/UpdatePost';
import DeletePost from './Components/DeletePost';
import ShowScrollBtn from './Components/ShowScrollBtn';
import NotFound from './Components/NotFound';
import { BlogData } from "./interfaces";
import Button from '@mui/material/Button';

function App() {
  const [blogData, setBlogData] = useState<BlogData["blogData"] | undefined >([]);
  // const [content, setContent] = useState({loading: true});
  // const fieldRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
       await fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(result =>
          setBlogData(
            result
          ),
        //   setContent({
        //     loading: false
        //   }),
          )
          .catch(console.log);
        }
    fetchData();
}, []);

let blogArray: BlogData["blogData"] = blogData !=undefined ? blogData : [];

   return (
    <>
    <ShowScrollBtn />
    <Button
        variant="contained"
        color="success"
        onClick={() => console.log('clicked button')}
    >Home Page Button</Button>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} >
              <Route path="/" element={<Home />} >
                  <Route path=":slug" element={<ViewPost blogarray={blogArray}  />} />
              </Route>
              <Route path="/create/*" element={<CreatePost />} >
              </Route>
              <Route path="/update" element={<UpdatePost blogarray={blogArray}/> } /> 
                  <Route path="/update:slug/*" element={<UpdatePost blogarray={blogArray} />} />
              <Route path="/delete" element={<DeletePost blogarray={blogArray}/> } />
                  <Route path="/delete:slug/*" element={<DeletePost blogarray={blogArray} />} />
              <Route path="/about" element={<About /> } />
              <Route path="*" element={<NotFound />} /> 
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;