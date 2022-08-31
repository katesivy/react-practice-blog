import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate} from 'react-router-dom';
import SubmissionMessage from "./SubmissionMessage";

export default function DeletePost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const blogData = JSON.parse(localStorage.getItem("storedBlogData"));
    const selectedBlog = blogData[Number(slug)];
    const [title, setTitle] = useState(selectedBlog.title);
    const [article, setArticle] = useState(selectedBlog.article);
    const [image, setImage] = useState(selectedBlog.image);
    const [id, setId] = useState(selectedBlog.id);
    const [statusMessage, setStatusMessage] = useState('');
    const [action, setAction] = useState('');
    const [route, setRoute] = useState('');

    const returnToHome = () => {
        navigate('/');
    }

    const deleteBlogPost = () => {
        fetch("http://localhost:3000/posts/" + selectedBlog.id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({title, article, image})
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

    return (
        <>
        <div className="delete-post">
            <h4>Are you sure you want to delete {title}?</h4>
            <button className="deleteYes" onClick={deleteBlogPost}>Yes</button>
            <button className="deleteNo" onClick={returnToHome}>No</button>
            <Routes>
                <Route path="submit" element={ <SubmissionMessage statusMessage={statusMessage} title={title} action={action} route={route}/> } />
            </Routes>
        </div>
        </>
    );
  }