import React, {useRef} from "react";
import { useParams, Link } from 'react-router-dom';

export default function ViewPost(props) {
    const { slug } = useParams();
    const blogData = JSON.parse(localStorage.getItem("storedBlogData"));
    const selectedBlog = blogData[Number(slug)];

    return (
        <div className="view-post" >
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