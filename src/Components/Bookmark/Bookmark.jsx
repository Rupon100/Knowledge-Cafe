 

const Bookmark = ({ bookMark }) => {
    return (
        <div>
            <h1 className="font-semibold">Bookmarked Blogs: {bookMark.length}</h1>
            {
               bookMark.map((mark, index) => 
                
                    <h1 className="bg-white p-2 rounded-lg m-2" key={index}>{mark.title}</h1>
                
               )
            }
        </div>
    );
};

export default Bookmark;