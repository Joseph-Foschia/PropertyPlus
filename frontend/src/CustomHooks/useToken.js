import { useState } from 'react';

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

  return {
    setToken: saveToken,
    token
  }

}