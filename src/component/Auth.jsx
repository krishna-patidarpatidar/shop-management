import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const token = localStorage.getItem("auth");
    if (!token) {
        navigate("/");
        
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <>{children}</>;
};

export default Auth;
