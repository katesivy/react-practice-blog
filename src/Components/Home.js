import React, { useEffect, useState, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Home() {
    const [content, setContent] = useState({loading: true});
    const [blogData, setBlogData] = useState([]);
    const fieldRef = useRef('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            navigate('/');
           await fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(result =>
              setBlogData({
                blogData: result
              }),
              setContent({
                loading: false,
              }),
              )
              .catch(console.log);
            }
        fetchData();
    }, []);
        
    const dataArray = Object.values(blogData)[0] ? Object.values(blogData)[0] : [];
    window.localStorage.setItem("storedBlogData", JSON.stringify(Object.values(dataArray)));
   
    function scrollToPost() {
        fieldRef.current.scrollIntoView({});
    }

    return (
        <>
            <div className="homepage">
                <h1 className="home-title">Welcome to my blog!</h1>
            </div>
            <div className="postslist">
                    <ul>
                        {dataArray.map((item, slug) => (
                            <div key={slug} className="blogPost">
                                <div onClick={scrollToPost}>
                                <Link to={`${slug}`} ref={fieldRef}>
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