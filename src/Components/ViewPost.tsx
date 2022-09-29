import React, {useEffect, useState, useRef, useContext} from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogContext } from "../App";
// import {ThemeContext, themes} from './theme-context';
import { BlogArray, BlogContextType, BlogData } from "../interfaces";

interface SelectedBlog {
        title?: string | undefined,
        article?: string | undefined,
        id?: string | undefined,
        image?: string | undefined,
}


export default function ViewPost({ children }: any) {
    const { slug } = useParams<"slug">();
    let numberSlug: number = Number(slug).valueOf()

    const blogData = useContext(BlogContext) as BlogContextType;
    console.log('viewpost blogdata', blogData)
    
    let blogArray: BlogData["blogData"] = blogData.blogData !=undefined ? blogData.blogData : [];
    let selectedBlog: SelectedBlog = blogArray[numberSlug];
    console.log('selected blog', selectedBlog)

    return (
        <div className="view-post" ><h1>View Post</h1>
            <div className="title-container">
                <h3 className="post-title">{selectedBlog ? selectedBlog.title : ''}</h3> 
                <div className="viewpostLinks">
                    <Link to={`/delete${slug}`} >
                        <button className="deletebtn">Delete</button>
                    </Link>
                <Link to={ `/update${slug}`}>
                    <button className="updatebtn">Update</button>
                </Link>
                </div>
            </div>
            <p className="post-article">{selectedBlog ? selectedBlog.article : ''}</p>
            <img className="post-image" src={`./Images/${selectedBlog ? selectedBlog.image : ''}`} alt="blog picture"/>
        </div>
    );
  }