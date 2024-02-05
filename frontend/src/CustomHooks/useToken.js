import { useState } from 'react';
// import {jwtDecode} from 'jwt-decode';

export default function useToken() {

  const getToken = () => {
    
    const email = localStorage.getItem('token');
   return email;


  };

  const [token, setToken] = useState( getToken());


  const saveToken = userToken => {
    
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const getUser = () => {
    // if(token) {
    //   const decodedToken = jwtDecode(token)
    //   return decodedToken
    // }
    return token;
 
  }

  return {
    setToken: saveToken,
    token,
    getUser
  }

}