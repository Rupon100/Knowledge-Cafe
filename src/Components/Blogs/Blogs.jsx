import { useState, useEffect } from "react";


const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h2 className="text-xl">Vlog</h2>
        </div>
    );
};

export default Blog;