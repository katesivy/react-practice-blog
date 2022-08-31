import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate} from 'react-router-dom';
import SubmissionMessage from "./SubmissionMessage";

export default function UpdatePost() {
    const { slug } = useParams();
    const blogData = JSON.parse(localStorage.getItem("storedBlogData"));
    const selectedBlog = blogData[Number(slug)];
    const [title, setTitle] = useState(selectedBlog.title);
    const [article, setArticle] = useState(selectedBlog.article);
    const [image, setImage] = useState(selectedBlog.image);
    const [statusMessage, setStatusMessage] = useState('');
    const [action, setAction] = useState('');
    const [route, setRoute] = useState('');
    const navigate = useNavigate();

    const saveInfo = (e) => {
        e.preventDefault();
        setTitle(title)
        setArticle(article)
        setImage(image)
        updatePost();
    }
    
    const updatePost = () => {
        fetch("http://localhost:3000/posts/" + selectedBlog.id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({title, article, image})
        }).then(() => {
            setStatusMessage(true);
            setAction("updated");
            navigate(`/update${slug}/submit`);
        }).catch((err) => {
            console.log(err)
            setRoute(`/update${slug}`);
            setStatusMessage(false);
            navigate(`/update${slug}/submit`);
        })
    }

    return (
        <>
            <div>
                <h3 style={{ paddingLeft: 50 }}>Update This Post</h3>
            </div>
            <form className="form" onSubmit={saveInfo}>
                <label className="form-title">
                    Title:
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
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