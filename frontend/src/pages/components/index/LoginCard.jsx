import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./LoginCard.css";
import loginUser from "../../../helpers/loginUserHelper"


export default function LoginCard({ setToken }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenData = await loginUser({
        email,
        password
      });

      if (tokenData) {
        setToken(tokenData.user.email);
      } else {
        console.log(tokenData.user.email)
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
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
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
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
