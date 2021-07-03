import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function NavbarBeforeSignUp() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand id= "nav-brand"className ="NavBar-Brand" href="#">prep4<span className="span">PM</span></Navbar.Brand>
                    <div className="d-flex ml-auto pl-4" >
                        <Button id= "btn-practice" className=" btn m-2 primary" >Login</Button>
                        <Button id= "btn-outline"  className="btn m-2 primary bg-light" >Sign Up</Button>
                    </div>
            </Navbar>
        </div>
    )
}
export default NavbarBeforeSignUp;
