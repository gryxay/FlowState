import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';

const Header = () => {

    return (
        <Navbar expand="lg" id="header" variant='dark' className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={require('../media/logo-white.png')}
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Flow State Žirgynas
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#services">Paslaugos</Nav.Link>
                    <Nav.Link href="#gallery">Galerija</Nav.Link>
                    <Nav.Link href="#contacts">Kontaktai</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;