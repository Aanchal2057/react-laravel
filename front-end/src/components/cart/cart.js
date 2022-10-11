import { useNavigate } from 'react-router-dom';


const Cart = ({ orderItems }) => {

    const navigate = useNavigate();

    const payment = () => {
        navigate("/checkout");
    }
    return (
        <>
            <div className="container my-5">
                <h1>Your Cart</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Catagory</th>
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
                                    <td>{ orderItem.price * orderItem.quantity }</td>
                                    <td>Delete</td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
                <div className="btn btn-warning text-white mb-2" onClick={payment}>Proceed</div>

            </div>
        </>
    );
}

export default Cart;