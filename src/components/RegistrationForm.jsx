import React, { useState } from "react";

function RegistrationForm() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // clear success message while typing
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email.includes("@") &&
      formData.phone.length === 10 &&
      formData.password.length >= 6 &&
      formData.password === formData.confirmPassword &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.country &&
      formData.zipCode.length === 6
    ) {
      setSuccessMessage("Form submitted successfully ");

      // clear form after submit
      setFormData(initialFormData);
    } else {
      setSuccessMessage("Please fill all fields correctly ");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Registration Form
      </h2>

      {successMessage && (
        <p
          style={{
            color: successMessage.includes("successfully")
              ? "green"
              : "red",
            textAlign: "center",
            marginBottom: "15px",
            fontWeight: "bold"
          }}
        >
          {successMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        {formData.name === "" && <p style={errorStyle}>Name is required</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {formData.email && !formData.email.includes("@") && (
          <p style={errorStyle}>Enter valid email</p>
        )}

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        {formData.phone && formData.phone.length !== 10 && (
          <p style={errorStyle}>Phone must be 10 digits</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />
        {formData.password && formData.password.length < 6 && (
          <p style={errorStyle}>Minimum 6 characters</p>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={inputStyle}
        />
        {formData.confirmPassword &&
          formData.password !== formData.confirmPassword && (
            <p style={errorStyle}>Passwords do not match</p>
          )}

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="state"
          placeholder="Enter State"
          value={formData.state}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="country"
          placeholder="Enter Country"
          value={formData.country}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="zipCode"
          placeholder="Enter Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          style={inputStyle}
        />
        {formData.zipCode && formData.zipCode.length !== 6 && (
          <p style={errorStyle}>Zip code must be 6 digits</p>
        )}

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

const containerStyle = {
  maxWidth: "500px",
  margin: "30px auto",
  padding: "25px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "12px",
  background: "#fff"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none"
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  margin: "0 0 5px 0"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
  fontSize: "16px"
};

export default RegistrationForm;