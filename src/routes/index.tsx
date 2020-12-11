import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Watched from "../pages/Watched";
import NotFound from "../pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/watched" component={Watched} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
