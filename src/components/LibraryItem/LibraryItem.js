import './LibraryItem.css';

const LibraryItem = ({ item }) => {
  console.log("ITEM:", item)
  const {linkURL, imagelink, tilte , note, subcategory, tags} = item;
  
  return (
    <div className="library-item-container">
      <img src={imagelink} alt={tilte} width="150px" />
      <h5>add source link</h5>
      <h3>{tilte}</h3>
      <h5>{note}</h5>
      <h6>tags</h6>
    </div>
  )
}

export default LibraryItem;