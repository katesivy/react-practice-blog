import React, { useEffect, useState, useRef } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import About from './Components/About';
import ViewPost from './Components/ViewPost';
import UpdatePost from './Components/UpdatePost';
import DeletePost from './Components/DeletePost';
import ShowScrollBtn from './Components/ShowScrollBtn';
import NotFound from './Components/NotFound';


function App() {
  const [content, setContent] = useState({loading: true});
  const [blogData, setBlogData] = useState([]);
  const fieldRef = useRef();




   return (
    <>
    <ShowScrollBtn />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} >
              <Route path="/" element={<Home />} >
                  <Route path=":slug" element={<ViewPost  
                   fieldRef={fieldRef}
                   />} />
              </Route>
              <Route path="/create/*" element={<CreatePost />} >
              </Route>
              <Route path="/update" element={<UpdatePost /> } />
                  <Route path="/update:slug/*" element={<UpdatePost  />} />
              <Route path="/delete" element={<DeletePost /> } />
                  <Route path="/delete:slug/*" element={<DeletePost  />} />
              <Route path="/about" element={<About /> } />
              <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;