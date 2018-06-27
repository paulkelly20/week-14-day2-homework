import React, {Component} from 'react';
import { Nav,NavItem,Navbar} from 'react-bootstrap';


export default class NavBar extends Component{

  render(){
    return(
    <div>
      <Navbar>
        <Navbar.Header>

        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/chart">
            Songs
          </NavItem>
          <NavItem eventKey={2} href="/movies">
            Movies
          </NavItem>
          <NavItem eventKey={3} href="/books">
            Books
          </NavItem>

        </Nav>
      </Navbar>
    </div>
  )
  }
}
