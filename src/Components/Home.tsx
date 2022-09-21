import React, { useEffect, useState, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BlogArray, BlogData, Content } from "../interfaces";
import ViewPost from './ViewPost';

// interface Props {
//     props: {}[]
// }

export default function Home( ) {
    // console.log('blogprops', blogProps)
    const [content, setContent] = useState<Content>({loading: true});
    // console.log('content', content)
    const [blogData, setBlogData] = useState<BlogData["blogData"] | undefined >([]);
    const fieldRef = useRef('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            navigate('/');
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

    // function scrollToPost() {
    //     fieldRef.current.scrollIntoView({});
    // }

    return (
        <>
            <div className="homepage">
                <h1 className="home-title">Welcome to my blog!</h1>
            </div>
            <div className="postslist">
                    <ul>
                        {blogArray.map((item, slug) => (
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