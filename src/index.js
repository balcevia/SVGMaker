import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index";

import "./styles.css";
import { Provider } from "react-redux";
import Timeline from "./container/TimelineContainer";

function App() {
  return (
    <Provider store={store}>
      <Timeline />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
