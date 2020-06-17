import "./App.css";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { reducer } from "./reducers/reducer";

const store = createStore(reducer);
console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </Provider>
  );
}

export default App;
