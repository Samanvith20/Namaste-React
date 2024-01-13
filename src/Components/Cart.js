import { useSelector } from "react-redux";
import { clearCart } from "../utils/Cartslice";
import { useDispatch } from "react-redux";
import ItemList from "./Itemlist";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="w-6/12 mx-auto bg-white p-4 rounded-md shadow-lg">
        <button
          className="p-2 m-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1 className="text-gray-500">Your cart is currently empty. Add items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
