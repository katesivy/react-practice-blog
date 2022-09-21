import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface PostInfo {
    title?: string,
    article?: string,
    id?: string,
    image?: string
  };

interface MoreProps {
    props : {
        statusMessage: boolean | null,
        action: string,
        route: string,
        postInfo: PostInfo,
    }
}

interface Styles {
    display?: string,
    transform?: string
}

export default function SubmissionMessage( { props } : MoreProps)  {
console.log('submit props', props)
    const [message, setMessage] = useState<string | undefined>('');
    const [styles, setStyles] = useState<Styles>({display: "none"});
    const navigate = useNavigate(); 
    const location = useLocation();
    const locationString = location.pathname.toString();
    let propsInfo: PostInfo = props.postInfo;
    let propsTitle: string | undefined= propsInfo.title;

    useEffect(() => {
        if (props.statusMessage === true && locationString.includes('delete'))  {
            setStyles({display: 'block', transform: 'none'})
            setMessage(`"${propsTitle}" was successfully ${props.action}!`)
        } else if (props.statusMessage === true) {
            setStyles({display: 'block'})
            setMessage(`"${propsTitle}" was successfully ${props.action}!`)
        } else if (props.statusMessage === false) {
            setStyles({display: 'block'})
            setMessage("Submit Failed")
        } 
    }, []);

    function handlePopUp() {
        if (props.statusMessage === true && locationString.includes('delete')) {
    //         setTitle("");
    //         setArticle("");
    //         setImage("");
            navigate('/');
        } else if (props.statusMessage === true) {
    //         setTitle("");
    //         setArticle("");
    //         setImage("");
    //         setId("")
            navigate('/');
        } else if (props.statusMessage === false) {
            navigate(`${props.route}`);
        }
    }
    
    return ( 
        <div style={styles} className="modal">
            <div className="modal_content">Submit Message
                <h1>{message}</h1>
                <button className="close" onClick={handlePopUp}>Close</button>
            </div>
        </div>
    )
}