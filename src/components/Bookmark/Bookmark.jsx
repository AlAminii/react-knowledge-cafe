import propTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='p-4'>
         <h3>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: propTypes.object
}
export default Bookmark;