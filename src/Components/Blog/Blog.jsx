import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, addToBookMark, addTime }) => {
    const {id, cover, title, author, authorRealImage, postedDateTime, hashtag, readingTime} = blog;
    return (
        <div className="space-y-5 border p-2">
            <img src={cover} alt={`cover page of ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img className="w-14" src={authorRealImage} alt={`user of ${title}`} />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">{author}</h2>
                    <p className="text-gray-700 text-sm">{postedDateTime}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                    <span>{readingTime} min read</span>

                    <button onClick={() => addToBookMark(blog)} className="text-lg text-gray-600"><FaBookmark /></button>

                </div>
            </div>
            <h1 className="text-2xl font-semibold py-2">{title}</h1>
            <span className="text-gray-600">{hashtag}</span>
            <br />
            <button className="text-blue-700 underline" onClick={() => addTime(readingTime, id)}>mark as read</button>
        </div>
    );
};

 

export default Blog;