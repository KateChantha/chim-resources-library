import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import LibraryForm from '../../components/LibraryForm/LibraryForm';
import LibraryList from '../../components/LibraryList/LibrayList';
import './Library.css';

const mockLibraries = [
  {
    "id": 1,
    "linkURL": "https://www.youtube.com/watch?v=3rsyuK-OQ74",
    "imagelink": "https://yt3.ggpht.com/ytc/AAUvwnhSCFCQHP_7z2CpkOKl6CH5Z1lw5mwHpkkLQKdbGQ=s900-c-k-c0x00ffffff-no-rj",
    "tilte": "Best food in town",
    "note": "for people who love to eat",
    "category": "Food",
    "subcategory": "To Read",
    "tags": ["series, movie"]
  },
  {
    "id": 2,
    "linkURL": "https://www.youtube.com/watch?v=3rsyuK-OQ74",
    "imagelink": "https://yt3.ggpht.com/ytc/AAUvwnhSCFCQHP_7z2CpkOKl6CH5Z1lw5mwHpkkLQKdbGQ=s900-c-k-c0x00ffffff-no-rj",
    "tilte": "Welcome to NY",
    "note": "for people who love to eat",
    "category": "Food",
    "subcategory": "To Read",
    "tags": ["series, movie"]
  },
  {
    "id": 3,
    "linkURL": "https://www.youtube.com/watch?v=3rsyuK-OQ74",
    "imagelink": "https://yt3.ggpht.com/ytc/AAUvwnhSCFCQHP_7z2CpkOKl6CH5Z1lw5mwHpkkLQKdbGQ=s900-c-k-c0x00ffffff-no-rj",
    "tilte": "Food truck",
    "note": "for people who love to eat",
    "category": "Food",
    "subcategory": "To Read",
    "tags": ["series, movie"]
  },
  {
    "id": 4,
    "linkURL": "https://www.youtube.com/watch?v=3rsyuK-OQ74",
    "imagelink": "https://yt3.ggpht.com/ytc/AAUvwnhSCFCQHP_7z2CpkOKl6CH5Z1lw5mwHpkkLQKdbGQ=s900-c-k-c0x00ffffff-no-rj",
    "tilte": "Best grill checken",
    "note": "for people who love to eat",
    "category": "Food",
    "subcategory": "To Read",
    "tags": ["series, movie"]
  }
]

const LibraryPage = () => {
  const [libraries, setLibraries] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /**
    * Get Liabrary from API
    * and Set libraries state to data
    */
  // const libraryURL = "../../assets/fakedb.json";
  // useEffect(() => {
  //   // Use IFFE to handle asynchronous in useEffect 
  //   (async () => {
  //     try {
  //       const response = await fetch(libraryURL);
  //       const data = await response.json()

  //       setLibraries(data);

  //     } catch (error) {
  //       console.log("IN FETCHLIBRARY ERROR: ", error)
  //    // return error.message
  //     }
  //   })()
  // },[])

  useEffect(() => {
    setLibraries(mockLibraries);
  },[])


  /**
    * onSubmit input form
    * Post Liabrary to API
    * and set libraries state the response data
    */
  // const onSubmitHandler = (e) => {

  //   const body = {
  //       linkURL: linkURLInput.value,
  //       tilte: tilteInput.value,
  //       note: noteInput.value,
  //       category: categoryInput.value,
  //       subcategory: subcategoryInput.vale,
  //       tags: tagsInput.value
  //     }

  //   fetch('/reminders', {
  //     method: 'POST',
  //     headers: {
  //         'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(body)
  //   })
  //   .then(resp => resp.json())
  //   .then(data => {
  //     setLibraries(data);
  //   })
  //   .catch(error => console.log(error))
  // }

  // TODO: handle loading 
  // TODO: handle error message
  return (
    <div>
      <h1>This is a Library page</h1>

      
      <Button className="m-3" onClick={handleShow}>Add Resource</Button>
      <LibraryList libraries={libraries} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill out resource info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LibraryForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit and Create Resource
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default LibraryPage;