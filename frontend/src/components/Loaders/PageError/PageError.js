import React from "react";
import { Error } from "../../Icons";
import "./PageError.css";

export const PageError = () => (
  <div className="error">
    <Error />
    <p>An Error Occured</p>
  </div>
);
