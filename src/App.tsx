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
import { ThemeProvider } from '@mui/material/styles';
import { ButtonTheme } from './ButtonTheme';

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
    <ThemeProvider theme={ButtonTheme}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} >
              <Route path="/" element={<Home />} >
                  <Route path=":slug" element={<ViewPost blogarray={blogArray} />} />
              </Route>
              <Route path="/create/*" element={<CreatePost />} >
              </Route>
              <Route path="/update" element={<UpdatePost blogarray={blogArray}/> } /> 
                  <Route path="/update:slug/*" element={<UpdatePost blogarray={blogArray}/>} />
              <Route path="/delete" element={<DeletePost blogarray={blogArray}/> } />
                  <Route path="/delete:slug/*" element={<DeletePost blogarray={blogArray}/>} />
              <Route path="/about" element={<About /> } />
              <Route path="*" element={<NotFound />} /> 
            </Route>
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;