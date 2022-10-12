import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser } from '../../store/users/user-selector';
import { removeUser } from '../../store/users/user-action';

const HeaderFooter = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const logout = () => {
        dispatch(removeUser());
	}
	const [search, setSearch] = useState('');
	const navigate = useNavigate();
	const url = `/products/${search}`;
	const searchData = (e) => {
		e.preventDefault();
		navigate(url);
	};
	return (
		<div>
			<Navbar bg='warning' variant='warning' my='0' p='0'>
				<Container>
					<Navbar.Brand className='mx-5'>
						<img src='./download.png' alt='' height='50px' width='70px'></img>
					</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/Home'>Home</Nav.Link>
						<Nav.Link href='/Products'>Products</Nav.Link>
						{
                            user && (
                                <li className="nav-item">
                                    <span className="nav-link">{user.name}</span>
                                </li>
                            )
                        }
                        
                        {
                            user && (
                                <li className="nav-item">
                                    <button type="submit" className="nav-link bg-warning border-0" onClick={logout}>LogOut</button>
                                </li>
                            )
                        }

                        {
                            !user && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/register">Register</a>
                                    </li>
                                </>
                            )
                        }
						
					</Nav>
				</Container>
				<Form className='d-flex mx-5' onSubmit={searchData}>
					<Form.Control
						type='search'
						placeholder='Search'
						className='me-2'
						aria-label='Search'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<Button type='submit' variant='outline-success'>
						Search
					</Button>
				</Form>
			</Navbar>

			<Outlet />

			<div className='d-flex justify-content-between p-5'>
				<div className=''>
					<img
						src='./download.png'
						alt=''
						className=''
						height='90px'
						width='90px'
					/>
					<h4>Contact</h4>
					<p>
						<strong>Address: </strong>NewRoad, Mahabaudha, Planchok Bhagbati
						Store
					</p>
					<p>
						<strong>Phone: </strong> +014158602, 9841319037
					</p>
					<p>
						<strong>Hours:</strong>8:00-5:00, Sunday-Friday
					</p>
					<div className=''>
						<h4>Follow Us</h4>
						<div className=''>
							<i className='fab fa-facebook-f'></i>
							<i className='fab fa-twitter'></i>
							<i className='fab fa-instagram'></i>
							<i className='fab fa-whatsapp'></i>
						</div>
					</div>
				</div>
				<div className=' d-flex flex-column'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								About
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								Delivery Information
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								Privacy Policy
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								Teams & Conditions
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								Contact Us
							</a>
						</li>
					</ul>
				</div>

				<div className=' d-flex flex-column'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link text-dark text-dark' href='#'>
								My Account
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								Sign In
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								View Cart
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								Privacy Policy
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								Track My Order
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-dark' href='#'>
								Help
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h4>Install App</h4>
					<p>From Google Play store</p>
					<div className='row'>
						<img src='./goo.png' height='90px' width='150px' />
					</div>
					<p>Secured Payment Gateways</p>
					<div>
						<img src='./ss.jpg' alt='' width='150px' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderFooter;