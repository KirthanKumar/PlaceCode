import React from 'react';
import { useStore } from 'effector-react';
import { Input } from '@components/Inputs';
import { loginForm } from './model';

export const PasswordInput = ({ disabled, error }) => {
  const value = useStore(loginForm.$password);

  return (
    <Input
      value={value}
      onChange={(e) => loginForm.passwordChanged(e.target.value)}
      type="password"
      label="Password"
      disabled={disabled}
      error={error}
    />
  );
};
