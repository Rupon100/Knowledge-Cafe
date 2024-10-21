
const Blog = ({ blog }) => {
    const {id, cover, title, author, authorRealImage, postedDateTime, hashtag, readingTime} = blog;
    return (
        <div>
            <img src={cover} alt={`cover page of ${title}`} />
            <div>
                {/* <img src={authorRealImage} alt={`user of ${title}`} /> */}

            </div>
        </div>
    );
};

 

export default Blog;