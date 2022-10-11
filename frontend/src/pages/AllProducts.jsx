import React from 'react';
import Products from './Products';
import {Pagination} from 'react-bootstrap';

const AllProducts = () => {
  return (
    <div>
      <Products/>
      <Pagination>
		<Pagination.Prev />
        <Pagination.Ellipsis />
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
							</Pagination>
    </div>
  )
}

export default AllProducts;
