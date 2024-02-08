import { useState } from 'react';
// import {jwtDecode} from 'jwt-decode';

export default function useToken() {

  const getToken = () => {
    
    const email = localStorage.getItem('token');
   return email;


  };

  const [token, setToken] = useState( getToken());


  const saveToken = (userToken, user) => {
    
    localStorage.setItem('token', userToken);
    localStorage.setItem('user', JSON.stringify(user));
    
    setToken(userToken);
  };



  const getUser = () => {
    return token;
  }

  const getUserType = () => {
    const userDataString = localStorage.getItem('user');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  return userData ? userData.type : null;
  }

  return {
    setToken: saveToken,
    token,
    getUser,
    getUserType
  }

}