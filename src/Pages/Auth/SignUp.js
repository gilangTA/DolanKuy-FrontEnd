import React from 'react';
import './Auth.css';
import "bootstrap/dist/css/bootstrap.css";
import {Row, Col, Form, Button, InputGroup} from 'react-bootstrap';
import LeftSide from "./LeftSide";
import NavbarTop from "../../Components/NavbarTop";

function SignUp() {
    return (
      <div className="App">
          <NavbarTop/>
        <Row className="landing">
            <Col><LeftSide /></Col>
            <Col xs lg="5">
                <Form style={{width:"60%", marginLeft:"10%", marginTop:"20%"}}>
                <b style={{fontSize:"40pt"}}>Create New</b>
                <br/>
                <b style={{fontSize:"40pt"}}>Account</b>
                    <Form.Group controlId="formBasicEmail" style={{marginTop:"5%"}}>
                        <Form.Label>Enter your email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button id="buttonLogIn" variant="basic" type="submit" block>
                        Sign Up
                    </Button>
                </Form>
            </Col>
        </Row>
      </div>
    );
}

export default SignUp;