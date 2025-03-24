import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

function App() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
      <h1 className="head" style={{ textAlign: "center" }}>HacKart Website</h1>
      <p style={{ textAlign: "center" }}>We sell A to Z Books</p>

      <Navbar />

      <div className='test1'>
        <h1>Email :</h1>
        <input type="text" placeholder="Enter your Email" />

        <h1>Password :</h1>
        <input type="password" placeholder="Enter your password" />

        <br /><br /><br />
        <button onClick={() => navigate("/Homepage")}>Log-IN</button>  {/* ✅ Changed to valid route */}
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate("/signup")}>SignUP/Create an Account</button>
      </div>
    </>
  );
}

export default App;
