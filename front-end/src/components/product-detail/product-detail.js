import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOrder, setTotal } from '../../store/order/order-action';
import { useNavigate } from 'react-router-dom';
import { getTotal, selectOrder } from '../../store/order/order-selector';
import { useSelector } from "react-redux";

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const {  name, category, price, img_src, description } = product;

  const [quantity, setQuantity] = useState(1);
  const quantityInput = (e) => {
    setQuantity(e.target.value);
  };

  const orderItems = useSelector(selectOrder);
  const total = useSelector(getTotal);
  const dispatch = useDispatch();
  const orderInput = () => {
      dispatch(setOrder(orderItems, {...product, quantity: quantity}));
      dispatch(setTotal(total, {...product, quantity: quantity}));
      navigate("/cart");
     
  }
  return (
    <>
      <div className="container m-5 p-5">
        <div className="row">
          <div className="col-6">
            <img src={img_src} width="70%" height="250px" />
          </div>
          <div className="col-6">
            <div>
              <h2>{name}</h2>
            </div>
            <div>Product Category:{category}</div>
            <div>Price:Rs{price}</div>
            <div>{description}</div>
            <div>
              <span>Quantity: </span>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="100"
                value={quantity}
                onChange={(e) => quantityInput(e)}
              />
            </div>
            <div
                type="submit"
                className="btn btn-warning text-white m-2 px-3 me-5"
                onClick={orderInput}
              >
                Add to cart
              </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
