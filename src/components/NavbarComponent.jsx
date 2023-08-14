import { useState, useEffect } from "react";

import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import {navLinks} from '../data/index'

const NavbarComponent = () => {

  const [ChangeColor, setChangeColor] = useState(false)

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true)

    }else{
      setChangeColor(false)
    }
  }

  useEffect(() => {
    changeBackgroundColor()

    window.addEventListener("scroll", changeBackgroundColor)
  })
  

  return (
    <Navbar expand="lg" className={ChangeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand className="fs-3 fw-bold" href="#home">Ngoding.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link)=>{
              return (
                <div className="nav-link" key={link.id}>
                     <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } end>{link.text}</NavLink>
                </div>
              )
            })}
           
          </Nav>
          <div className='text-center'>
            <Button variant="outline-danger">Join With Us</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent