import React, { useEffect, useState, useRef, useContext, createContext } from 'react';
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
// import UpdatePost from './Components/UpdatePost';
import DeletePost from './Components/DeletePost';
import ShowScrollBtn from './Components/ShowScrollBtn';
import NotFound from './Components/NotFound';
import { BlogContextType, BlogData } from "./interfaces";
import { ThemeProvider } from '@mui/material/styles';
import { ButtonTheme } from './ButtonTheme';

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

function App() {

  const [blogData, setBlogData] = useState<BlogData["blogData"] | undefined>(undefined);

  return (
    <>
    <ShowScrollBtn />
    <ThemeProvider theme={ButtonTheme}>
    {/* <BlogProvider> */}
    <BlogContext.Provider value={{ blogData, setBlogData }}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navbar />} >
                  <Route path="/" element={<Home />} >
                      <Route path=":slug" element={
                          <ViewPost  />
                        } 
                        />
                  </Route>
                  {/* <Route path="/update" element={<UpdatePost blogarray={blogData}/> } /> 
                      <Route path="/update:slug/*" element={<UpdatePost blogarray={blogData}/>} /> */}
                  <Route path="/delete" element={<DeletePost /> } />
                      <Route path="/delete:slug/*" element={<DeletePost />} />
                  <Route path="/create/*" element={<CreatePost />} >
                  </Route>
                  <Route path="/about" element={<About /> } />
                  <Route path="*" element={<NotFound />} /> 
                </Route>
          </Routes>
      </BrowserRouter>
                      </BlogContext.Provider>
    {/* </BlogProvider> */}
    </ThemeProvider>
    </>
  );
}

export default App;


{/* <Route path="/" element={<Home />} >
<Route path=":slug" element={
  <BlogContext.Provider value={blogArray}>
    <ViewPost blogarray={blogArray} />
  </BlogContext.Provider>
} 
/> */}