import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";


function Navbars({ setSearchtext, setSearchrating }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link ><Link to="/" >Home</Link></Nav.Link>
            <Nav.Link ><Link to="/about" >About</Link></Nav.Link>
          </Nav>

          <Form className="d-flex" >
            <Form.Select
              aria-label="Default select example"
              className="rate"
              onChange={(e) => setSearchrating(e.target.value)}
            >
              <option value="0">Search by rate</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>

            <Form.Control
            style={{ marginLeft: "50px" }}
              type="search"
              placeholder="Search by name"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchtext(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
