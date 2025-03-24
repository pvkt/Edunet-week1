import { useState } from 'react'
import './App.css'
import './Navbar'

function Profile(){
    const navigate = useNavigate();
    return(
        <>

        <h1 className="head" style={{ textAlign: "center" }}>HacKart Website</h1>
        <p style={{ textAlign: "center" }}>We sell A to Z</p>

        <Navbar />


        </>
    )
}

export default Profile