import React, {useEffect, useState, useRef} from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogData } from "../interfaces";

interface AppProps {
    blogarray: {
        title?: string | undefined,
        article?: string | undefined,
        id?: string | undefined,
        image?: string | undefined,
    }[]
  };

interface SelectedBlog {
        title?: string | undefined,
        article?: string | undefined,
        id?: string | undefined,
        image?: string | undefined,
}

export default function ViewPost( { blogarray } : AppProps) {
    console.log('props in view', blogarray)
    const { slug } = useParams<"slug">();
    // const [blogData, setBlogData] = useState<BlogData | undefined>();
    const navigate = useNavigate();

    
    // console.log('blogdata in view', blogData)
    // let dataArray : DataArray[] = blogData ? (Object as any).values(blogData)[0] : [];
    // console.log('data array in view', dataArray)
    // const blogData = JSON.parse(localStorage.getItem("storedBlogData"));
    // console.log('slug', typeof slug, slug)
    let numberSlug: number = Number(slug).valueOf()
    const selectedBlog: SelectedBlog  = blogarray[numberSlug];
    // console.log(selectedBlog)

    return (
        <div className="view-post" ><h1>View Post</h1>
            <div className="title-container">
                <h3 className="post-title">{selectedBlog ? selectedBlog.title : ''}</h3> 
                <div className="viewpostLinks">
                <Link to={`/delete${slug}`} >
                    <button className="deletebtn">Delete</button>
                </Link>
                <Link to={`/update${slug}`} >
                    <button className="updatebtn">Update</button>
                </Link>
                </div>
            </div>
            <p className="post-article">{selectedBlog ? selectedBlog.article : ''}</p>
            <img className="post-image" src={`./Images/${selectedBlog ? selectedBlog.image : ''}`} alt="something blog-related"/>
        </div>
    );
  }