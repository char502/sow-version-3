// import React from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
} from "antd";
import "./App.css";
import Nav from "./components/Nav";
import SOW_Form from "./components/SOW_Form";
import RetrievePrevious from "./components/RetrievePrevious";
import ProfessionalServices from "./components/ProfessionalServices";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={SOW_Form} />
          <Route path="/RetrievePrevious" component={RetrievePrevious} />
          <Route
            path="/ProfessionalServices"
            component={ProfessionalServices}
          />
        </Switch>
      </Router>

      <Footer style={{ textAlign: "center" }}>SOW PDF Generator</Footer>
    </div>
  );
}

export default App;
