import React from "react";
import { useParams, Link } from 'react-router-dom';

export default function ViewPost() {
    const { slug } = useParams();
    const blogData = JSON.parse(localStorage.getItem("storedBlogData"));
    const selectedBlog = blogData[Number(slug)];

    return (
        <div className="view-post">
            <h3 className="post-title">{selectedBlog ? selectedBlog.title : ''}</h3> 
            <p className="post-article">{selectedBlog ? selectedBlog.article : ''}</p>
            <img className="post-image" src={`./Images/${selectedBlog ? selectedBlog.image : ''}`} alt="something blog-related"/>
            <Link to={`/delete${slug}`}>
                <button className="deletebtn">Delete</button>
            </Link>
            <Link to={`/update${slug}`}>
                <button className="updatebtn">Update</button>
            </Link>
        </div>
    );
  }