import React, { useEffect, useState } from 'react';
import {
  MemoryRouter,
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
import SubmissionMessage from './Components/SubmissionMessage';


function App() {
  const [content, setContent] = useState({loading: true});
  const [blogData, setBlogData] = useState([]);


useEffect(() => {
  const fetchData = async () => {
     await fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(result =>
        setBlogData({
          blogData: result
        }),
        setContent({
          loading: false,
        })
      ).catch((err) => console.log(err));
    }
      fetchData();
    }, []);

  return (
    <>
    <ShowScrollBtn />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} >
              <Route path="/" element={<Home />} >
                  <Route path=":slug" element={<ViewPost blogData={blogData} />} />
              </Route>
              <Route path="/create/*" element={<CreatePost />} >
              </Route>
              <Route path="/update" element={<UpdatePost /> } />
                  <Route path="/update:slug/*" element={<UpdatePost blogData={blogData} />} />
              <Route path="/delete" element={<DeletePost blogData={blogData}/> } />
                  <Route path="/delete:slug/*" element={<DeletePost blogData={blogData} />} />
              <Route path="/about" element={<About /> } />
              <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;