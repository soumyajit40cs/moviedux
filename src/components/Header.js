import React from "react";
import "../styles.css";
import { useContext } from "react";
import MessageContext from "../context/MessageContext";

export default function Header() {
  const message = useContext(MessageContext);
  return (
    <div className="header">
      <div className="container-switch">
        <span>Change Theme </span>
        <label className="switch">
          <input type="checkbox" onClick={message.toogleTheme} />
          <span className="slider"></span>
        </label>
      </div>
      <img className="logo" src="logo.png" alt="moviedux" />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
      {message.message}
    </div>
  );
}
