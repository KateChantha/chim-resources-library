import { Card, Breadcrumb } from 'react-bootstrap';
import './LibraryItem.css';

const LibraryItem = ({ item }) => {
  console.log("ITEM:", item)
  const {linkURL, imagelink, tilte , note, subcategory, tags} = item;
  
  // TODO: Add Link component to redirect to source linkURL
  // TODO: make card responsive at lg={6}
  return (
    <div className="library-item-container">
      <Card className="m-2">
        <Card.Img src={imagelink} alt={tilte} />
        <Card.Body>
          <Card.Title>{tilte}</Card.Title>
          <Card.Text>{note}</Card.Text>
          <Breadcrumb>
            <Breadcrumb.Item>{tags[0]}</Breadcrumb.Item>
            <Breadcrumb.Item>{tags[1]}</Breadcrumb.Item>
          </Breadcrumb>
          <h6>TODO: add source link</h6>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LibraryItem;