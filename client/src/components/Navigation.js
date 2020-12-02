import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./css/Navigation";

function Navigation() {
    return (
        <Navbar expand="lg" fixed="top" className="custom-navbar">
        <Navbar.Brand href="/" className="custom-brand">Agnes Chueng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/about"
                className={
                    window.location.pathname === "/" || 
                    window.location.pathname === "/about"
                      ? "active" : ""
                }
                >About</Nav.Link>
                <Nav.Link href="/portfolio" className={window.location.pathname === "/portfolio" ? "active" : ""}>Portfolio</Nav.Link>
                <Nav.Link href="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;