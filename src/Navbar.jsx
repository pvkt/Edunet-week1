import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate = useNavigate();
    return(
        <>
            <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "10px" }}>
                <button onClick={() => navigate("/Homepage")}>Homepage</button>
                <button onClick={() => navigate("/Cart")}>Cart</button>
                <button onClick={() => navigate("/")}>Signin/Signup</button>
            </nav>


        </>
    )
}

export default Navbar