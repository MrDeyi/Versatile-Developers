import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DetailedviewProvider } from './Data_context'
// import reportWebVitals from './reportWebVitals';
// import Home from './components/Home/home.js';
// Importing the Bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.min.css';


import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
