import Checkout from "../../components/checkout/checkout";
import { getTotal, selectOrder } from "../../store/order/order-selector";
import { useSelector } from 'react-redux';

const CheckoutPage = () => {

    const orderItems = useSelector(selectOrder);
    const total = useSelector(getTotal);

    return (
        <>
            {
                orderItems && <Checkout orderItems={orderItems} total={total} />
            }
        </>
    );
}

export default CheckoutPage;