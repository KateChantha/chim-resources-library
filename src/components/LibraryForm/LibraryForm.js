import { Form, Button, Container } from 'react-bootstrap';

const LibraryForm = () => {
  return (
    <Container>
       <Form>
        <Form.Text>Please fill out resource info</Form.Text>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Category"></Form.Control>
        </Form.Group>
          <Form.Label>Sub Category</Form.Label>
          <Form.Control type="text" placeholder="Sub-Category"></Form.Control>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title"></Form.Control>
          <Form.Label>Note</Form.Label>
          <Form.Control type="text" placeholder="Note"></Form.Control>
          <Form.Label>Link URL</Form.Label>
          <Form.Control type="text" placeholder="Link URL"></Form.Control>
          <Form.Label>Image URL</Form.Label>
          <Form.Control  type="text" placeholder="Image URL"></Form.Control>
          <Form.Label>Tag</Form.Label>
          <Form.Control  type="text" placeholder="Tag"></Form.Control>
          <Button className="m-2" variant="secondary" type="submit">Submit and Create Resource</Button>
      </Form>
    </Container>
   
  )
};

export default LibraryForm;