import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa'
const Blog = ({ blog, addTobookmarks, handaleMarkasRead  }) => {
    console.log(blog)
    const { title, cover, author_img, reading_time, author,posted_date ,
        hashtags
    } = blog;
    return (
        <div className='mb-20 space-y-5'>
            <img src={cover} alt="" />
          
 <div className='flex justify-between'>
    <div  className='flex'>
       <img className='w-14' src={author_img} alt="" />
     <div className='ml-6'>
       <h3>{author}</h3>
       <p>{posted_date}</p>
     </div>

    </div>
     <div className='flex'>
         <span>{reading_time}</span>
         <button onClick={()=> addTobookmarks (blog) }> <FaBookmark></FaBookmark></button>
    </div>
 </div>
 <h1 className='text-3xl'>{title}</h1>
 <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
                }
            </p>
            <button onClick={()=> handaleMarkasRead (reading_time)} className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;
