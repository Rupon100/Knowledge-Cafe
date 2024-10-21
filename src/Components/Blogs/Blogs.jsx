import { useState, useEffect } from "react";
import Blog from '../Blog/Blog'


const Blogs = ({addToBookMark, addTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 flex flex-col gap-10">
        {
            blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                addToBookMark={addToBookMark}
                addTime={addTime}
                ></Blog>)
        }
        </div>
    );
};

export default Blogs;