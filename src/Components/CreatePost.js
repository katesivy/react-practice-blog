import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SubmissionMessage from "./SubmissionMessage";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [image, setImage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [action, setAction] = useState('');
    const [route, setRoute] = useState('');
    const navigate = useNavigate();

    const submitPost = (e) => {
        e.preventDefault();
        setTitle(title)
        setArticle(article)
        setImage(image)
        saveInfo();
    }

    const saveInfo = async () => {
        await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, article, image})
        }).then(() => {
            setStatusMessage(true);
            setAction("created");
            navigate('/create/submit');
        }).catch((err) => {
            console.log(err);
            setRoute(`/create`);
            setStatusMessage(false);
            navigate('/create/submit');
        })
    }

    return (
        <>
            <div>
                <h3 style={{ paddingLeft: 50 }}>Create a new post</h3>
            </div>
            <form className="form" onSubmit={submitPost}>
                <label className="form-title">
                    Title:
                    <input type="text" name="title" required value={title} onChange={e => setTitle(e.target.value)}/>
                </label>
                <label>
                    Article Content:
                    <textarea type="text" name="article" value={article} onChange={e => setArticle(e.target.value)}/>
                </label>
                <label>
                    Image Link:
                    <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)}/>
                </label>
            <input type="submit" value="Submit" className="submit-button"/>
            </form>
            <Routes>
                <Route path="submit" element={ <SubmissionMessage statusMessage={statusMessage} title={title} action={action} route={route}/> } />
            </Routes>
        </>
    )
}