// import React, { useState } from "react";
// import { Routes, Route, useParams, useNavigate} from 'react-router-dom';
// import SubmissionMessage from "./SubmissionMessage";

// interface PostInfo {
//     title: string | undefined,
//     article: string | undefined,
//     image: string | undefined,
// }
// interface AppProps {
//     blogarray: {
//         title?: string | undefined,
//         article?: string | undefined,
//         id?: string | undefined,
//         image?: string | undefined,
//     }[]
// };

// interface SelectedBlog {
//         title?: string | undefined,
//         article?: string | undefined,
//         id?: string | undefined,
//         image?: string | undefined,
// }

// export default function UpdatePost() {
//     const [statusMessage, setStatusMessage] = useState<boolean | null>(null);
//     const [action, setAction] = useState<string>('');
//     const [route, setRoute] = useState<string>('');
//     const { slug } = useParams();
//     let numberSlug: number = Number(slug).valueOf()
//     const selectedBlog: SelectedBlog  = blogarray[numberSlug];    
//     const defaultPostInfo : PostInfo = {
//         title: selectedBlog.title,
//         article: selectedBlog.article,
//         image: selectedBlog.image,
//     }
//     const [postInfo, setPostInfo] = useState<PostInfo>(defaultPostInfo);
//     const {title, article, image } = postInfo;
//     const navigate = useNavigate();

//     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
//         setPostInfo((prevState => ({
//             ...prevState,
//             [e.target.name]: e.target.value
//         })))
//     };
//     const saveInfo = (e: React.FormEvent<HTMLFormElement>) => {
//         console.log('saving info', postInfo)
//         e.preventDefault();
//         updatePost();
//     }
    
//     const updatePost = () => {
//         console.log('updating', postInfo)
//         fetch("http://localhost:3000/posts/" + selectedBlog.id, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(postInfo)
//         }).then(() => {
//             setStatusMessage(true);
//             setAction("updated");
//             navigate(`/update${slug}/submit`);
//         }).catch((err) => {
//             console.log(err)
//             setRoute(`/update${slug}`);
//             setStatusMessage(false);
//             navigate(`/update${slug}/submit`);
//         })
//     }

//     const postinfo : {
//         title?: string,
//         article?: string,
//         image?: string,
//         id?: string, 
//     } = postInfo
    
//     const props : {
//         statusMessage: boolean | null,
//         action: string,
//         route: string,
//         postInfo: {},
//     }  = {
//         statusMessage: statusMessage,
//         action: action,
//         route: route,
//         postInfo: postInfo,
//     }

//     return (
//         <>
//             <div>
//                 <h3 style={{ paddingLeft: 50 }}>Update This Post</h3>
//             </div>
//             <form className="form" onSubmit={saveInfo}>
//                 <label className="form-title">
//                     Title:
//                     <input type="text" name="title" value={title} onChange={onChange}/>
//                 </label>
//                 <label>
//                     Article Content:
//                    {/*change input to textarea, resolve with appropriate type*/}
//                    <input type="text" name="article" value={article} onChange={onChange}/>
//                 </label>
//                 <label>
//                     Image Link:
//                     <input type="text" name="image" value={image} onChange={onChange}/>
//                 </label>
//                     <input type="submit" value="Submit" className="submit-button"/>
//             </form>
//             <Routes>
//                 <Route path="submit" element={ <SubmissionMessage props={props} /> } />
//             </Routes>
//         </>
//     )
// }