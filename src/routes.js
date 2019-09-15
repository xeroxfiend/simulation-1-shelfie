import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'
import Dashboard from "./components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route component={Dashboard} exact path={"/"} />
    <Route component={Form} path={"/add"} />
    <Route component={Form} path={'/edit/:id'} />
  </Switch>
);
