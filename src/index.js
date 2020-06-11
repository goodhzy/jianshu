import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style";
import {Iconfont} from './statics/iconfont/iconfont'
import App from "./App";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Iconfont />
    <App />
  </Fragment>,
  document.getElementById("root")
);
