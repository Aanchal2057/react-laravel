import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearOrder, clearTotal } from "../../store/order/order-action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/users/user-selector";


const Checkout = ({ orderItems, total }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [id, setId] = useState(user ? user.id : null);
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phoneno, setPhoneno] = useState(user ? user.phoneno : "");
  const [address, setAddress] = useState(user ? user.address : "");

  const order = async() => {
      let order = { name, email, phoneno, address, total, id, orderItems};
      console.log({ name, email, phoneno, address, total, id, orderItems});
      let response = await fetch("http://127.0.0.1:8000/api/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          body: JSON.stringify(order)
      });
      response = await response.json();
      console.log(response);
      dispatch(clearTotal());
      dispatch(clearOrder());
      navigate('/');
  }
  
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 p-2">
            {!user && (
              <>
                <div>
                  <a href="/register">Register</a>
                </div>
                OR
                <div className="mb-3 mt-3">
                  <label htmlFor="name" className="form-label">
                    User Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter user name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </>
            )}
            {user && (
              <>
                <h5>
                  <div className="d-block">Hello, {user.name}</div>
                  <div className="d-block ms-5"></div>
                </h5>
              </>
            )}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter user address"
                name="address"
                defaultValue={user && user.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneno" className="form-label">
                Phone number:
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneno"
                placeholder="Enter user phoneno"
                name="phoneno"
                defaultValue={user && user.phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
              />
            </div>

            <button className="btn btn-warning text-white mb-5" onClick={order}>
              Submit
            </button>
          </div>
          <div className="col-sm-6 bg-warning">
            <h3 className="m-3">Cart</h3>
            <div className="row my-3 mx-1 px-2">
              <div className="col-5">Name:</div>
              <div className="col-3">Quantity:</div>
              <div className="col-2">Price:</div>
              <div className="col-2">Total:</div>
            </div>

            {orderItems.map((orderItem) => {
              return (
                <div
                  className="row bg-warning rounded-3 my-3 mx-1  px-2 py-2"
                  key={orderItem.id}
                >
                  <div className="col-5">{orderItem.name}</div>
                  <div className="col-3">{orderItem.quantity}</div>
                  <div className="col-2">${orderItem.price}</div>
                  <div className="col-2">
                    ${orderItem.price * orderItem.quantity}
                  </div>
                </div>
              );
            })}

            <div className="row bg-warning rounded-3 my-3 mx-1  px-2 py-2">
              <div className="col-10">Total</div>
              <div className="col-2">${total}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
