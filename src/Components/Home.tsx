import React, { useEffect, useState, useRef, createContext, useContext } from "react";
import { Link, Outlet, useNavigate, Routes, Route } from "react-router-dom";
import { BlogContext } from "../App";
import { BlogArray, BlogContextType, BlogData, Content } from "../interfaces";
import ViewPost from "./ViewPost";


const Home = ( { children }: any) => {
    // const fieldRef = useRef('');
    const navigate = useNavigate();

    const blogData = useContext(BlogContext) as BlogContextType;
    console.log('blogdata', blogData)
    const {setBlogData}  = useContext(BlogContext) as BlogContextType;

    useEffect(() => {
        const fetchData = async () => {
           await fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(result =>
              setBlogData(
                result
              ))
              .catch(console.log);
            }
        fetchData();
    }, []);
   
    let homeBlogArray: BlogData["blogData"] = blogData.blogData !=undefined ? blogData.blogData : [];
  

    return (
    <>
            <div className="homepage">
                <h1 className="home-title">Welcome to my blog!</h1>
            </div>
            <div className="postslist">
                    <ul>
                        {homeBlogArray.map((item, slug) => (
                            <div key={slug} className="blogPost">
                                <div >
                                {/* onClick={scrollToPost} */}
                                <Link key={slug} to={`${slug}`}  >
                                    {/* ref={fieldRef} */}
                                    <h3 className="posts-title" >{item.title}</h3>
                                    <img className="home-img" src={`./Images/${item.image}`} alt="something blog-related"></img>
                                </Link>
                                </div>
                            </div> 
                        ))}
                    </ul>
                </div>
            <Outlet />
        </>
    )
}

export default Home;