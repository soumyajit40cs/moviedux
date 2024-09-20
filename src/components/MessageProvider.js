import MessageContext from "../context/MessageContext";
import React from "react";
import { useState } from "react";

export const MessageProvider = ({children}) => {
    const [message, setMessage] = useState('light');

    const toogleTheme = () => {
        setMessage(prevMessage => (prevMessage==='light'?'dark':'light'));
    }

    return (
      <MessageContext.Provider value={{ message, toogleTheme }}>
        {children}
      </MessageContext.Provider>
    );
}