import propTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-4xl">Reading TIme: {readingTime}</h3>
            </div>
           <h1>blocks {bookmarks.length}</h1>
           {
            bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: propTypes.array,
    readingTime: propTypes.number
}
export default Bookmarks;