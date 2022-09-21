import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SubmissionMessage from "./SubmissionMessage";



// function add<Type>(arg: Type): Type {
//     let a : Type = 2;
//     if (typeof arg === 'string') {
//         //
//     }else if (typeof arg === 'number') {
//         //
//     }
//     console.log(a);
//     return arg;
// }

// console.log(identity<number>(2));

interface PostInfo {
    title: string,
    article: string,
    image: string,
}
export default function CreatePost()  {
    const DEFAULT_POSTINFO : PostInfo = {
        title: "",
        article: "",
        image: "",
    }

    const [postInfo, setPostInfo] = useState<PostInfo>(DEFAULT_POSTINFO);
    const {title, article, image } = postInfo;
    const [statusMessage, setStatusMessage] = useState<boolean | null>(null);
    const [action, setAction] = useState<string>('');
    const [route, setRoute] = useState<string>('');
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setPostInfo((prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })))
    };

    const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('submitting', postInfo)
        e.preventDefault();
        saveInfo();
    }

    const saveInfo = async () => {
        await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postInfo)
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


    const postinfo : {
        title?: string,
        article?: string,
        image?: string,
        id?: string, 
    } = postInfo
    
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
            <div>
                <h3 style={{ paddingLeft: 50 }}>Create a new post</h3>
            </div>
            <form className="form" onSubmit={submitPost}>
                <label className="form-title">
                    Title:
                    <input type="text" name="title" required value={title} onChange={onChange}/>
                </label>
                <label>
                    Article Content:
                    {/*change input to textarea, resolve with appropriate type*/}
                    <input type="text" name="article" value={article} onChange={onChange}/>
                </label>
                <label>
                    Image Link:
                    <input type="text" name="image" value={image} onChange={onChange}/>
                </label>
            <input type="submit" value="Submit" className="submit-button"/>
            </form>
            <Routes>
                <Route path="submit" element={ <SubmissionMessage props={props} />  } />
            </Routes>
        </>
    )
}