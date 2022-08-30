import React,{Component} from 'react'
import { Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render(){
        return(
            <React.Fragment>
            <Navbar dark expand='md'>
        <div className="container">
            <NavbarToggler  onClick={this.toggleNav}/>
        <NavbarBrand className='mr-auto' href='/'>
            <img src='assets/images/logo.png' height='30' width='41' alt='suck'></img>
        </NavbarBrand>
        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
        </div>

         </Navbar>
         <div className="container-fluid  text-dark p-2 jumb">
            <div className="container  p-5">
                <h1 className="display-4 fw-bold">Welcome to Admin Dashboard</h1>
            <hr></hr>
                <p>Welcome to the best of aboSako OnlyFans pics and Videos our content is up to dated and we deal directly with 2boSako to make sure to give you the best experince
                    <u>  *adel botty on the way*</u>
                </p>
               
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Header;