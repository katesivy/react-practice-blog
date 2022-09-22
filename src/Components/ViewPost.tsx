import React, {useEffect, useState, useRef} from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
// import {ThemeContext, themes} from './theme-context';

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
    const { slug } = useParams<"slug">();
    const navigate = useNavigate();
    let numberSlug: number = Number(slug).valueOf()
    const selectedBlog: SelectedBlog  = blogarray[numberSlug];

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