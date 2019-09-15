import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";

export default (
  <Switch>
    <Route component={Dashboard} exact path={"/"} />
    <Route component={Form} path={"/add"} />
    <Route component={Form} path={'/edit/:id'} />
  </Switch>
);
