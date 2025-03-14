import React from 'react';
import { useStore } from 'effector-react';
import { Input } from '@components/Inputs';
import { loginForm } from './model';

export const LoginInput = ({ disabled, error }) => {
  const value = useStore(loginForm.$login);

  return (
    <Input
      value={value}
      onChange={(e) => loginForm.loginChanged(e.target.value)}
      label="Login"
      disabled={disabled}
      error={error}
    />
  );
};
