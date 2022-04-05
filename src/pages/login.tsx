import { signIn } from 'next-auth/react';
import React from 'react';

export const Login = () => {
  return <button onClick={() => signIn(`github`)}>GitHub</button>;
};

export default Login;
