function Navbar() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Agnes Chueng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link to="/">About</Nav.Link>
                <Nav.Link to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar;