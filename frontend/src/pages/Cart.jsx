import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Cart = () => {
  return (
  
    <>
        <div class="container my-5">
        <h4>Your Cart</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price per piece</th>
                        <th scope="col">Total price</th>
                        <th scope="col"><a href="/delete-all-session">Delete All</a></th>
                    </tr>
                </thead>
                <tbody>
                    {/* @foreach (Session::get('cart') as $cart) */}
                        <tr>
                            {/* <td>{{ $cart['name'] }}</td>
                            <td>{{ $cart['category'] }}</td>
                            <td>{{ $cart['quantity'] }}</td>
                            <td>Rs{{ $cart['price'] }}</td>
                            <td>Rs{{ $cart['quantity']*$cart['price']  }}</td> */}
                            <td>
                                {/* <a href="/delete-cart/{{ $cart['id'] }}">Delete</a> */}
                            </td>
                        </tr>
                    {/* @endforeach */}
                </tbody>
                <Link className='btn btn-warning mb-2 text-white' value="Add to cart"
										to={`/checkout`}
									>
										Proceed to continue 
									</Link>
                {/* <a class="btn btn-warning mb-2 text-white" href="/delivery-form">Proceed to continue</a> */}
            </table>

        </div>
    {/* @else */}
        <div class="container">
            <h1 class="d-flex justify-content-center align-items-center">There is nothing in the cart</h1>
        </div>
    {/* @endif */}
    </>
  )
};

export default Cart;
