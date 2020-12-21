import { Link } from 'react-router-dom';
import { Navbar, Nav, Card, Container } from 'react-bootstrap';

const LibraryDashboard = () => {
  const libraryDashboardList = ["Food","Margeting", "Media", "Software", "Operations", "Tools", "Opportunities", "Influencers", "Reandom" ]

  return (
    // <Container>
    //   {libraryDashboardList.map((library, idx) => (
    //     <Card key={`${library}-${idx}`} className="m-3">
    //       <h4>{library}</h4>
    //     </Card>
    //   ))}
    // </Container>

    <Container>
     
        
          <Nav.Link as={Link} to="/food">Food Library</Nav.Link>
          <Nav.Link as={Link} to="/marketing">Marketing Library</Nav.Link>
        
     
    </Container>
  )
};

export default LibraryDashboard;