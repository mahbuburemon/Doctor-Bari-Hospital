
import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log('came fram', location.state?.from)


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-3 p-2 text-center rounded">Please Login</h1>
                <Row className="mt-3">
                    <Col lg={5} md={6} sm={12} className="p-3 m-auto text-start shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>

                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                            <br />
                            <div className="d-grid">
                                <Button variant="success btn btn-block" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>

                    </Col>
                    <div className="text-center">......................or................</div>
                    <div className=" g-2 p-2 m-2">

                        <button type="button" onClick={handleGoogleLogIn} className="btn btn-danger m-2">Google Signin</button>
                        <p>new user?please <Link className="text-primary" to="/register">register</Link> </p>
                    </div>
                </Row>

            </Container>
        </>
    );
};

export default Login;