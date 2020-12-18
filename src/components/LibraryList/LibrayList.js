import LibraryItem from '../LibraryItem/LibraryItem';
import './LibraryList.css';

// TODO: key={item.id}
const LibraryList = ({ libraries }) => {
  return (
    <div className="library-list-container">
      {libraries.map((item,idx) => (
        <LibraryItem key={idx} item={item} />
      ))}
    </div>
  )
};

export default LibraryList;