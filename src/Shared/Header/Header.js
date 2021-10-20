import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo/logo.jpg';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'



// use it just like a RRv4/5 <Link>
// the `to` prop can be a string or an object, see RRv4/5 api for details
<HashLink to="/some/path#with-hash-fragment">Link to Hash Fragment</HashLink>


const Header = () => {
    const element1 = <FontAwesomeIcon icon={faEnvelopeOpen} />

    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '150px ' }} src={logo} alt="" /></Navbar.Brand>
                    <Nav.Link href="#home"><h4 className="fw-bold">Hot-Line:</h4><span>0973625638245</span></Nav.Link>
                    <Nav.Link href="#home " className="fw-bold fs-4"><span> {element1} :</span>doctorBari@gmail.com</Nav.Link>


                </Container>
            </Navbar>
            <Navbar bg="info" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start">
                        <Nav.Link as={HashLink} className=" text-black fs-5 fw-bold" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className=" text-black fs-5 fw-bold" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className=" text-black fs-5 fw-bold" to="/online">Online Doctor</Nav.Link>
                        <Nav.Link as={HashLink} className=" text-black fs-5 fw-bold" to="/home#aboutus">About Us</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">LouOut</Button> :
                            <Nav.Link as={Link} className=" text-black fs-5 fw-bold" to="/login">Log in</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in : <a href="#login" className=" p-2">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    );
};

export default Header;

