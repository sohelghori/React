import { Container, Form, Control, Label , Group, Button, Row, Col } from 'react-bootstrap';


function MyForm() {



    return (
      <div className="form-wrapper py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6">
       <Form>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
        </Form>
        </Col>
        </Row>
      </Container>
      </div>
    );


    
  }

export default MyForm;