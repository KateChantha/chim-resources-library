import { Card, Container } from 'react-bootstrap';

const HomeDashboard = () => {
  const libraryDashboardList = ["Food","Margeting", "Media", "Software", "Operations", "Tools", "Opportunities", "Influencers", "Reandom" ]

  return (
    <Container>
      {libraryDashboardList.map((library, idx) => (
        <Card key={`${library}-${idx}`} className="m-3">
          <h4>{library}</h4>
        </Card>
      ))}
    </Container>
  )
};

export default HomeDashboard;