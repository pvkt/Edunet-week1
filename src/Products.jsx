import { useCart } from "./CartContext"; // ✅ Correct Import
import './Product.css';

const products = [
    { id: 1, image: "/images/book1.jpg", title: "Hacking with Python", price: 2000 },
    { id: 2, image: "/images/book2.jpg", title: "The Code Book", price: 1500 },
    { id: 3, image: "/images/book3.jpg", title: "GHOST in the WIRES", price: 1800 },
    { id: 4, image: "/images/book4.jpg", title: "Practical Malware Analysis", price: 1800 },
    { id: 5, image: "/images/book5.jpg", title: "HACKING 2nd Edition", price: 1800 },
    { id: 6, image: "/images/book6.jpg", title: "ETHICAL HACKING Pentesting Guide", price: 1800 },
    { id: 7, image: "/images/book7.jpg", title: "HACKING with KALI LINUX", price: 3800 },
    { id: 8, image: "/images/book8.jpg", title: "GREY HAT HACKING", price: 1800 }
];

function Products() {
    const { addToCart } = useCart(); // ✅ Get addToCart function

    return (
        <div className="product-container">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} width="150" alt={product.title} />
                    <h4><b>{product.title}</b></h4>
                    <h5><b>Price: </b> ₹{product.price}</h5>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
