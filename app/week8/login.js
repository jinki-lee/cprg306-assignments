// src/Login.js
import React from 'react';
import { useUserAuth } from './_utils/auth-context';

const Login = () => {
  const { gitHubSignIn } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign in with GitHub</button>
    </div>
  );
};

export default Login;
