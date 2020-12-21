import { Link } from 'react-router-dom';
import { Nav, Card, Container } from 'react-bootstrap';

const LibraryDashboard = () => {
  const libraryDashboardList = ["food","marketing", "media", "software", "operations", "tools", "opportunities", "influencers", "random" ]

  return (
    <Container>
      {libraryDashboardList.map((library, idx) => (
        <Card key={`${library}-${idx}`} className="m-3">
        <Nav.Link as={Link} to={`/${library}`}>{`${library.toUpperCase()} LIBRARY`}</Nav.Link>
        </Card>
      ))}
    </Container>
  )
};

export default LibraryDashboard;