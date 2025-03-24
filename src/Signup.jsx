import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  return (
    <>
      <h1 className="head" style={{ textAlign: "center" }}>HacKart Website</h1>
      <p style={{ textAlign: "center" }}>We sell A to Z Books</p>

      <form id="form1" onSubmit={handleSubmit}>
        <div>
          <h2 style={{ textAlign: "center" }}>Signup Page</h2>
          <p style={{ textAlign: "center" }}>Welcome! Please create an account.</p>
          <table align="center">
            <tbody>
              <tr>
                <td><label><b>Full Name :</b></label></td>
                <td>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} onFocus={handleFocus} required />
                  <span className="error">{errors.fullName}</span>
                </td>
              </tr> 
              <div className="gender">
              <tr>
                
                <td><label><b>Gender :</b></label></td>
                <td>
                  <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
                  <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
                  <span className="error">{errors.gender}</span>
                </td>
              </tr>
              </div>

              <tr>
                <td><label><b>Phone Number :</b></label></td>
                <td>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} onFocus={handleFocus} required />
                  <span className="error">{errors.phone}</span>
                </td>
              </tr>
              <tr>
                <td><label><b>Email Id :</b></label></td>
                <td>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={handleFocus} required />
                  <span className="error">{errors.email}</span>
                </td>
              </tr>
              <tr>
                <td><label><b>Password :</b></label></td>
                <td>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} onFocus={handleFocus} required />
                  <span className="error">{errors.password}</span>
                </td>
              </tr>
              <tr>
                <td><label><b>Confirm Password :</b></label></td>
                <td>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} onFocus={handleFocus} required />
                  <span className="error">{errors.confirmPassword}</span>
                </td>
              </tr>
              <tr>
                <td><label><b>Address :</b></label></td>
                <td>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} onFocus={handleFocus} required />
                  <span className="error">{errors.address}</span>
                </td>
              </tr>
              <tr align="center">
                <td colSpan="2">
                  <button type="submit">Submit</button>
                  &nbsp;&nbsp;&nbsp;
                  <button type="button" onClick={() => navigate("/")}>Back</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
}

export default Signup;
