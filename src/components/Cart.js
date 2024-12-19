import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";  // Import the removeItem action

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Handle clear cart
  const handleClearItems = () => {
    dispatch(clearCart());
  };

  // Handle item deletion
  const handleDeleteItem = (itemId) => {
    dispatch(removeItem(itemId));  // Dispatch the removeItem action with the item's id
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold mb-4">CART</h1>

      <div>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearItems}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && <h1>Cart is Empty! Please Add Items:</h1>}

        {/* Item List with Delete Button */}
        {cartItems.length > 0 && (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id} // Assuming each item has a unique id
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <ItemList items={[item]} /> {/* Display individual item */}
                
                {/* Delete button for each item */}
                <button
                  className="bg-red-500 text-white p-2 rounded-lg"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
