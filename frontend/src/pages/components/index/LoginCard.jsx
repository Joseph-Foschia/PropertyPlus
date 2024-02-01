import React from "react";
import "./LoginCard.css";

export default function LoginCard() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // API call to the server to verify the user
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Perform actions on successful login
      if (data.userExists) {
        console.log("User exists! Proceed to next step.");
        // Handle user not existing
      } else {
        console.log("User does not exist.");
      }
      // Handle error
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="background-login">
      <div className="login-container">
        <div className="login-form">
          <h2>Property Plus</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-buttons">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
