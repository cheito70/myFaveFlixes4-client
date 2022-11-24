import React, { useState }  from 'react';
import {Form, Col, Row, Container, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to server for authentication  */
        /* Then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        props.toRegister();
    };


    return (
<Container>
    <Row>
        <Col>
        <Form className="login-border">
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button 
            className="login-button mt-2 mr-2"
            variant="primary" 
            type="submit" 
            onClick={handleSubmit}>Submit</Button>

            <Button 
            className="register-button mt-2" 
            variant="secondary" 
            type="submit"
            onClick={handleRegisterClick}>Register</Button>
        </Form>
            </Col>
    </Row>
</Container>
    );
}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
}