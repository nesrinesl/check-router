import React from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { moviesData } from "../../Data";

const Navigation = ({ setInputSearch, inputSearch ,setFilteredMovies}) => {
const handleSearch =()=>{
  const filteredMovies = moviesData.filter((movie) =>
  movie.title.toLowerCase().includes(inputSearch.toLowerCase()))


  setFilteredMovies(filteredMovies);

}


  return (
    <div>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand id="navtitle" href="#">
            TunsiFLIX
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/home" as={Link}>Home</Nav.Link>
              <Nav.Link to="/movies" as={Link}>Movies</Nav.Link>
             
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                className="me-2"
                aria-label="Search"
                //to filterMovie
                style={{ color: "red" }}
                placeholder="Search Movie..."
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
              />
              <Button onClick={handleSearch} variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
