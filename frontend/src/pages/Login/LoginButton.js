import React from 'react';
import { PrimaryButton } from '@components/Buttons';

export const LoginButton = ({ disabled, error }) => {
  return (
    <PrimaryButton type="submit" disabled={disabled || error}>
      Log in
    </PrimaryButton>
  );
};
