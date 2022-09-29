import React, { useState, useContext } from "react";
import { Routes, Route, useParams, useNavigate} from 'react-router-dom';
import { BlogContext } from "../App";

import { BlogContextType, BlogData, PostInfo, SelectedBlog } from "../interfaces";


import SubmissionMessage from "./SubmissionMessage";


export default function DeletePost() {
    const { slug } = useParams<"slug">();
    let numberSlug: number = Number(slug).valueOf()
    const blogData = useContext(BlogContext) as BlogContextType;
    let blogArray: BlogData["blogData"] = blogData.blogData !=undefined ? blogData.blogData : [];
    let selectedBlog: SelectedBlog = blogArray[numberSlug];

    const [statusMessage, setStatusMessage] = useState<boolean | null>(null);
    const [action, setAction] = useState<string>('');
    const [route, setRoute] = useState<string>('');

    const defaultPostInfo : PostInfo = {
        title: selectedBlog.title,
        article: selectedBlog.article,
        image: selectedBlog.image,
    }
    const [postInfo, setPostInfo] = useState<PostInfo>(defaultPostInfo);
    const {title, article, image } = postInfo;
    const navigate = useNavigate();
    const [id, setId] = useState<string | undefined>(selectedBlog.id);

    

    const returnToHome = () => {
        navigate('/');
        console.log('return')
    }

    const deleteBlogPost = () => {
        fetch("http://localhost:3000/posts/" + selectedBlog.id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(postInfo)
        }).then(() => {
            setStatusMessage(true);
            setAction("deleted");
            navigate(`/delete${slug}/submit`);
        }).catch((err) => {
            console.log(err)
            setRoute(`/delete${slug}`);
            setStatusMessage(false);
            navigate(`/delete${slug}/submit`);
        })
    }

    const props : {
        statusMessage: boolean | null,
        action: string,
        route: string,
        postInfo: {},
    }  = {
        statusMessage: statusMessage,
        action: action,
        route: route,
        postInfo: postInfo,
    }

    return (
        <>
        <div className="delete-post">
            <h4>Are you sure you want to delete {title}?</h4>
            <button className="deleteYes" onClick={deleteBlogPost}>Yes</button>
            <button className="deleteNo" onClick={returnToHome}>No</button>
            <Routes>
                <Route path="submit" element={ <SubmissionMessage props={props} /> } />
            </Routes>
        </div>
        </>
    );
  }