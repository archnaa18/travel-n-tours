import React, { Component } from 'react';
import "./NavbarStyles.css";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


class Navbar extends Component{
    state={clicked:false};
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
      return(
        <div>
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>TripWithUs</h1>
                <div className='menu-icons' onClick={this.handleClick}>
                <i className={this.state.clicked ? "fa-regular fa-circle-xmark":"fa-solid fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active1" :"nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>  <i className={item.icon}></i>{item.title}</Link>
                          </li>
                        )
                    })}
                    <button>Sign Up</button>
                  
                </ul>
            </nav>
        </div>
      )
    }
}
export default Navbar

