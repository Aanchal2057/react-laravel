import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItemFromOrder } from '../../store/order/order-action';
import { clearOrder } from '../../store/order/order-action';

const Cart = ({ orderItems ,id}) => {

    const navigate = useNavigate();
    const dispatch=useDispatch();
    const changeRoute = () => {
        navigate("/checkout");
    }
    const removeItem= (orderItem) => {
        dispatch(removeItemFromOrder(orderItems, orderItem));
    }
    const removeAll = () => {
        dispatch(clearOrder());
    }

    return (
        <>
            {
                !orderItems && (
                    <>
                        <div>
                            <h1 className="d-flex justify-content-center align-items-center">There is nothing in the cart</h1>
                        </div>
                    </>
                )
            }
            {
                orderItems && (
                    <>
                        <div className="container my-5">
                            <h1>Your Cart</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price per piece</th>
                                        <th scope="col">Total price</th>
                                        <th scope="col">Delete All</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderItems.map((orderItem) => {

                                            return (<tr key={orderItem.id}>
                                                <td>{orderItem.name}</td>
                                                <td>{orderItem.category}</td>
                                                <td>{orderItem.quantity}</td>
                                                <td>{orderItem.price}</td>
                                                <td>{orderItem.price * orderItem.quantity}</td>
                                                <td><div className="btn btn-warning mb-2 text-white" onClick={(e) =>removeItem(orderItem)}>Delete</div></td>
                                            </tr>)
                                        })
                                    }

                                </tbody>
                            </table>
                            <div className="btn btn-warning text-white mb-2" onClick={changeRoute}>Proceed</div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Cart;