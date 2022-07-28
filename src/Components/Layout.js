import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Layout() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   );
// }

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Around US</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About US</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

// export default ColorSchemesExample;

export default Layout;
