import './App.css';
import Navbar from './Navbar';
import Products from './Products';

function Homepage() {
  return (
    <>
      <h1 className="head" style={{ textAlign: "center" }}>HacKart Website</h1>
      <p style={{ textAlign: "center" }}>We sell A to Z Books</p>

      <Navbar />

      <div>
        <h2 style={{ textAlign: "center" }}>Our Products</h2>
        <Products />
      </div>
    </>
  );
}

export default Homepage;
