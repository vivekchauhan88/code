import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

const Contact = () => {
    return (
       <div>
          <br /><br />
          <h1>Contact Me</h1>
          <br /><br />
          {/*<h5>Want to discuss an idea or just say Hi !!</h5>*/}
          <hr />
          <Form>
            <Row>
              <Col>
                <Form.Label>First name</Form.Label>
                <Form.Control />
              </Col>
              <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Form.Row>
            <Row>
              <Col>
                <Form.Label>Kindly tell us your Idea in brief and we'll be in touch shortly.
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="outline-secondary">Submit</Button>
              </Col>
            </Row>
          </Form>
         </div>
    );
}

export default Contact;
