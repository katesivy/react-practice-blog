import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface AppProps {
    postInfo: {
        title?: string | undefined,
        article?: string | undefined,
        id?: string | undefined,
        image?: string | undefined
    }
  };

  interface MoreProps {
    props : {
        statusMessage: boolean | null,
        action: string,
        route: string,
        postInfo: {},
    }
  }

export default function SubmissionMessage( { props } : MoreProps)  {
console.log('submit props', props)
    const [message, setMessage] = useState('');
    
    const [id, setId] = useState('');
    const [styles, setStyles] = useState({display: "none"});
    const navigate = useNavigate(); 
    const location = useLocation();
    const locationString = location.pathname.toString();

    // useEffect(() => {
    //     if (props.statusMessage === true && locationString.includes('delete'))  {
    //         setStyles({display: 'block', transform: 'none'})
    //         setMessage(`"${props.title}" was successfully ${props.action}!`)
    //     } else if (props.statusMessage === true) {
    //         setStyles({display: 'block'})
    //         setMessage(`"${props.title}" was successfully ${props.action}!`)
    //     } else if (props.statusMessage === false) {
    //         setStyles({display: 'block'})
    //         setMessage("Submit Failed")
    //     } 
    // }, []);

    // function handlePopUp() {
    //     if (props.statusMessage === true && locationString.includes('delete')) {
    //         setTitle("");
    //         setArticle("");
    //         setImage("");
    //         navigate('/');
    //     } else if (props.statusMessage === true) {
    //         setTitle("");
    //         setArticle("");
    //         setImage("");
    //         setId("")
    //         navigate('/');
    //     } else if (props.statusMessage === false) {
    //         navigate(`${props.route}`);
    //     }
    // }
    
    return ( 
        <div style={styles} className="modal">
            <div className="modal_content">Submit Message
                {/* <h1>{message}</h1>
                <button className="close" onClick={handlePopUp}>Close</button> */}
            </div>
        </div>
    )
}