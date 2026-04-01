import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    const filtered = carts.filter((c) => c.id !== item.id);
    setCarts(filtered);
    toast.error("Removed from cart!");
  };

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Checkout successful!");
  };

return (
  <div className="max-w-[1000px] mx-auto py-10">
    <div className="border rounded-2xl p-6 bg-[#f9f9fb]">
      <h2 className="text-2xl font-semibold mb-5">Your Cart</h2>

      {carts.length === 0 ? (
        <p className="text-center text-lg">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full">
                    <img className="h-10 w-10" src={item.image} />
                  </div>

                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item)}
                  className="text-pink-500 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-gray-500">Total:</span>
            <span className="text-2xl font-bold">${totalPrice}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#422ad5] to-purple-500"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  </div>
);
};

export default Cart;