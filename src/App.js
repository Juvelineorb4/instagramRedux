import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Routes from "./routes";


function App(props) {
  const {store} = props;
  
  return (
    <Provider store = {store}>
      <Routes store = {store} />
    </Provider>
    
  );
}

export default App;

