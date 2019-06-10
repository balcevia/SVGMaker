import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index";
import "./styles.css";
import {Provider} from "react-redux";
import ImageContainer from "./container/ImageContainer";
import TabsContainer from "./container/TabsContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="setting-form-container">
        <TabsContainer/>
        <ImageContainer/>
      </div>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
