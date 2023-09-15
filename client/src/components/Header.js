import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

// ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Header({ user, setUser }) {


  return (
    <header>
      <Container className='header'>
        <Row>
          <Col md='5'><Link to='/'><h1>Gourmet Gossip</h1></Link></Col>
          <Col md='7' className='navbar-right'>
            <NavLink to='/recipes'>All recipes</NavLink>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"><FontAwesomeIcon icon={faUser} size='lg' style={{ color: '#fff' }} /></Dropdown.Toggle>
              <Dropdown.Menu>
                { user ?
                  <>
                    <Dropdown.Item as={NavLink} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/favorites">Favorites</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/recipes/add">Add Recipe</Dropdown.Item>
                    <Dropdown.Item as={NavLink} onClick={() => setUser(false)}>Logout</Dropdown.Item>
                  </>
                  :
                  <>
                    <Dropdown.Item as={NavLink} to="/login" onClick={() => setUser(true)}>Login</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/register">Register</Dropdown.Item>
                  </>
                }
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </header>
  )
}