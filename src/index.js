import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import SidebarContextAPI from "./context-api/sidebar.context";
import AuthContextProvider from "./context-api/auth.context";

ReactDOM.render(
  <SidebarContextAPI>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </SidebarContextAPI>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
