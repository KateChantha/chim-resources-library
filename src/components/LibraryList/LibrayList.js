import LibraryItem from '../LibraryItem/LibraryItem';
import './LibraryList.css';

const LibraryList = ({ libraries }) => {
  return (
    <div>
      {libraries.map((item,idx) => (
        <LibraryItem key={idx} item={item} />
      ))}
    </div>
  )
};

export default LibraryList;