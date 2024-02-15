import { Card, Container } from "react-bootstrap";

export default function DashBoard() {
  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        <Card className="col-4">
          <Card.Body>
            <Card.Title>Sigma School Analytics</Card.Title>

            <Card.Text>
              People who graduate who get jobs: 80%
            </Card.Text>

          </Card.Body>
        </Card>
      </Container>
    </>
  )
}