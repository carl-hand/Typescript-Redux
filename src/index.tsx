import * as React from "react";
import * as ReactDOM from "react-dom";
import Counter from "./components/Counter";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
  document.getElementById("app")
);
