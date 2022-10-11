import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Footer = () => {
  return (
   <>
    <div className="d-flex justify-content-between p-5">
    <div className="">
            <img
                src="./download.png"
                alt=""
                className=""
          height="90px"
                width="90px"
            
    
            />
            <h4>Contact</h4>
            <p>
                <strong>Address: </strong>NewRoad, Mahabaudha, Planchok Bhagbati Store
    </p>
            <p><strong>Phone: </strong> +014158602, 9841319037</p>
            <p><strong>Hours:</strong>8:00-5:00, Sunday-Friday</p>
            <div className="">
                <h4>Follow Us</h4>
                <div className="">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-whatsapp"></i>
                </div>
            </div>
        </div>
        <div className=" d-flex flex-column">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Delivery Information</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Privacy Policy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Teams & Conditions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Contact Us</a>
                </li>
            </ul>
        </div>
    
        <div className=" d-flex flex-column">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link text-dark text-dark" href="#">My Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Sign In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">View Cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Privacy Policy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Track My Order</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Help</a>
                </li>
            </ul>
        </div>
        <div>
            <h4>Install App</h4>
            <p>From Google Play store</p>
            <div className="row">
              <img src="./goo.png" height="90px" width="150px" />
            </div>
            <p>Secured Payment Gateways</p>
            <div>
                <img src="./ss.jpg" alt="" width='150px' />
            </div>
        </div>
    
    </div>
   
   </>
  )
};

export default Footer;
