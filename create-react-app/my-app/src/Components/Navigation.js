import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

class Navigation extends React.Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
			  <Navbar.Brand href="#home">WhereYouWannaBe</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="#cities">Cities</Nav.Link>
			      <Nav.Link href="#professions">Professions</Nav.Link>
			      <Nav.Link href="#col">Cost of living</Nav.Link>
			      <Nav.Link href="#about">About</Nav.Link>
			    </Nav>
			    <Form inline>
			      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			      <Button variant="outline-success">Search</Button>
			    </Form>
			  </Navbar.Collapse>
			</Navbar>
			)
	}
}

export default Navigation;