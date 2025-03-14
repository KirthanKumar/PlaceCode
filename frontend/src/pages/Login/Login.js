import React from "react";
import { useStore } from "effector-react";
import { auth } from "@model";
import { loginForm } from "./model";
import { LoginInput } from "./LoginInput";
import { PasswordInput } from "./PasswordInput";
import { LoginButton } from "./LoginButton";
import styles from "./Login.module.css";

export const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    loginForm.login();
  };

  const loginPending = useStore(auth.$store).loginPending;
  const error = useStore(loginForm.$loginFailed);
  const canSubmit = useStore(loginForm.$canSubmit);

  return (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <h2>{error ? "Invalid data" : "Login"}</h2>
      <LoginInput disabled={loginPending} error={error} />
      <PasswordInput disabled={loginPending} error={error} />
      <LoginButton disabled={loginPending || !canSubmit} error={error} />
    </form>
  );
};
