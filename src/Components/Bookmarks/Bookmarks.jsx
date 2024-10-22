import Bookmark from "../Bookmark/Bookmark";

 
// import Bookmarks from './Bookmarks';
const Bookmarks = ({ bookMark, setTime }) => {
    return (
        <div className="md:w-1/3 space-y-4">
            <div className="border border-blue-600 bg-blue-100 p-3 rounded-lg">
                <h1 className="text-lg text-center font-semibold text-blue-600">Spent time on read:{setTime} min</h1>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg flex flex-col gap-4">
                <Bookmark bookMark={bookMark}></Bookmark>
            </div>
        </div>
    );
};

export default Bookmarks;