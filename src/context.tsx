import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { BlogContextType, BlogData } from './interfaces';

export const BlogContext = React.createContext<BlogData["blogData"] | null>(null);


const BlogProvider = ({ children }: any) => {
    const [blogData, setBlogData] = useState<BlogData["blogData"] | undefined >([]);
    // const [content, setContent] = useState({loading: true});
    // const fieldRef = useRef();

    useEffect(() => {
    const fetchData = async () => {
        await fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(result =>
            setBlogData(
            result
            ),
        //   setContent({
        //     loading: false
        //   }),
            )
            .catch(console.log);
        }
    fetchData();
    }, []);

    let blogArray: BlogData["blogData"] = blogData !=undefined ? blogData : [];
    // console.log('app blogarray', blogArray)

    return (
        <BlogContext.Provider value={ blogArray }>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogProvider;
