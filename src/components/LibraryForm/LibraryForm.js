import { Form, Button, Container } from 'react-bootstrap';

const LibraryForm = () => {
  return (
    <Container>
       <Form>
        <Form.Group controlId="form.ControlCategorySelect">
          <Form.Label>Select Category</Form.Label>
          <Form.Control as="select">
            <option value="0">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Control>
        </Form.Group>
          <Form.Label>Sub Category</Form.Label>
          <Form.Control type="text" placeholder="Sub-Category"></Form.Control>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title"></Form.Control>
        <Form.Group controlId="form.ControlNoteTextarea">
          <Form.Label>Note</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
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