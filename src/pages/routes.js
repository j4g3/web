import React from "react";
import Home from "./Home/index";
import { BrowserRouter, Route } from "react-router-dom";

export default function routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}
