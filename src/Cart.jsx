import { useCart } from "./CartContext"; // ✅ Correct Import
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Cart() {
    const { cart, totalPrice, removeFromCart, clearCart } = useCart(); // ✅ Get Cart Data
    const navigate = useNavigate();

    // Function to handle buying products
    const handleBuy = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items before purchasing!");
            return;
        }
        alert("Thank you for your purchase! Your order has been placed.");
        clearCart(); // Clear the cart after buying
        navigate("/"); // Redirect to home page
    };

    return (
        <>
            <h1 className="head" style={{ textAlign: "center" }}>HacKart Website</h1>
            <p style={{ textAlign: "center" }}>We sell A to Z Books</p>

            <Navbar />

            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <img src={item.image} width="50" alt={item.title} />
                                <b>{item.title}</b> - ₹{item.price} × {item.quantity}
                                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px", color: "red" }}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ₹{totalPrice.toLocaleString()} </h3>
                    <button onClick={handleBuy} style={{ marginRight: "10px", backgroundColor: "green", color: "white" }}>Buy Now</button>
                </>
            )}
            <button onClick={() => navigate("/")}>Back to Home</button>
        </>
    );
}

export default Cart;
