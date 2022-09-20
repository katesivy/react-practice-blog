import React, { useEffect, useState, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

interface Content {
    loading: boolean
}

interface BlogData {
    blogData :{}[] | unknown
    // title: string,
    // article: string,
    // id: string,
    // image: string
} 

interface DataArray {
    blogData: string[]
}

interface BlogArray {
    blogArray: string[]
}

export default function Home() {
    const [content, setContent] = useState<Content>({loading: true});
    // console.log('content', content)
    const [blogData, setBlogData] = useState<BlogData>();
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
            //   setContent({
            //     loading: false
            //   }),
              )
              .catch(console.log);
            }
        fetchData();
    }, []);

    let dataArray : DataArray = blogData ? (Object as any).values(blogData)[0] : [];
    let blogArray = Object.values(dataArray);
    // let blogArray : BlogArray = dataArray ? (Object as any).values(dataArray) : [];
    // console.log('dataarray', typeof dataArray, dataArray)
    // console.log(typeof blogArray, blogArray[1])

    // window.localStorage.setItem("storedBlogData", JSON.stringify(Object.values(dataArray)));
   
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
                                <Link to={`${slug}`} >
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