import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Form, Control, Label , Group, Button, Row, Col } from 'react-bootstrap';

class  MyForm extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        username : '',
        password : '',
        errormsg : '',
      };
    
    }




    myChangeHandle = (event) => {
      let nam =  event.target.name;
      let val = event.target.value;
      let err = '';
      if (nam === "password")
      {
         if(val !="" && !Number(val))
         {
           err = <p className="error-msg">enter correct details</p>;
         }
      }
      this.setState({errormsg : err});
      this.setState({[nam] : val});
    }

   

    render() {
    return (

      <div className="form-wrapper py-5">
      <Container>
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1>

        <Row className="justify-content-center">
          <Col lg="6">
       <Form onSubmit={this.myOnsubmitHandle}>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
                <Form.Control
                 type="text" 
                 name="username"
                 onChange={this.myChangeHandle} 
                 placeholder="Enter Name" />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="text"
              name="password"
              onChange = {this.myChangeHandle}
              placeholder="Password" />
              {this.state.errormsg}
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
  }

export default MyForm;