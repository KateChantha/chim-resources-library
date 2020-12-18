import { useEffect, useState } from 'react';
import './Library.css';

const mockLibraries = [
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@abc.com",
    "gender": "Male",
    "status": "Terminated"
  },
  {
    "id": 2,
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "janedoe@abc.com",
    "gender": "Female",
    "status": "New"
  },
  {
    "id": 3,
    "first_name": "Alice",
    "last_name": "Doe",
    "email": "alicedoe@abc.com",
    "gender": "Female",
    "status": "Leaving"
  },
  {
    "id": 4,
    "first_name": "Bob",
    "last_name": "Doe",
    "email": "bobdoe@abc.com",
     "gender": "Male",
    "status": "Active"
  }
]

const LibraryPage = () => {
  const [libraries, setLibraries] = useState([]);
  
  /**
    * Fetch Data
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

  return (
    <div>
      This is a Library page
    </div>
  )
}

export default LibraryPage;