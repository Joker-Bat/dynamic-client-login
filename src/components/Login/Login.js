import React from 'react';
import { useParams } from 'react-router-dom';

const Login = (props) => {
  const { clientId } = useParams();

  return (
    <div>
      <p>Client {clientId}</p>
      <h1>Login page</h1>
    </div>
  );
};

export default Login;
