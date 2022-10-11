import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {setProducts} from '../redux/actions/productActions';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Pages.css';
import { Link } from 'react-router-dom';


const ProductList = () => {
	// const products=useSelector((state)=>state.allProducts.products);
	// const dispatch=useDispatch();
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const baseURL = 'http://127.0.0.1:8000/api/data';
	// 		const response = await axios.get(baseURL);
	// 		setData(response.data);
	// 	}
	// 	fetchData();
	// }, []);
	const products=useSelector((state)=>state.product);
	const dispatch=useDispatch();
	
	  console.log("Products :", products);
	return (
		<React.Fragment>
			{/* <div className='d-flex flex-wrap justify-content-around container mb-5'>
				{data.map((a, i) => {
					return (
						<React.Fragment key={i}>

							<div className='card col-sm-4 my-3 ProductCard'>
								<img
									className='card-img-top rounded-5'
									src={a.img_src}
									width='200px'
									height='230px'
									alt='Card image cap'
								></img>
								<div className='card-body p-2 d-flex flex-column align-items-center text-center'>
									<h5 className='card-title mt-2'>{a.name}</h5>
									<p className='card-text mt-2 mb-3'>Price : Rs{a.price}</p>
									<Link
										className='btn btn-warning align-center'
										to={`/product/${a.slug}`}
									>
										View details
									</Link>
								</div>
                
							</div>
							
           
						</React.Fragment>
					);
				})}
			</div> */}
			<div>Products</div>
			
		</React.Fragment>
	);
};

export default ProductList;