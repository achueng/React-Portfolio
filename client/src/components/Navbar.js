function Navbar() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand to="/">Agnes Chueng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link to="/about"
                className={
                    window.location.pathname === "/" || 
                    window.location.pathname === "/about"
                      ? "active" : ""
                }
                >About</Nav.Link>
                <Nav.Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "active" : ""}>Portfolio</Nav.Link>
                <Nav.Link to="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar;