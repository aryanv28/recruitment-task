import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useParams} from "react-router";
import redux from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import UserMainPage from "./components/UserMainPage";
import UserDetails from "./components/UserDetails";
import SinglePost from "./components/SinglePost";


const thunk = reduxThunk.default;
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/users/:id" component={UserMainPage}  />
      <Route path="/users/:id/:postId" component={SinglePost} />
    </Switch>
  </BrowserRouter>,

  rootElement
);
