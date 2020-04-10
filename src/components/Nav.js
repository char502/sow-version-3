import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

const { Header } = Layout;

function Nav() {
  return (
    <div>
      <div className="title">
        <h1 className="main-heading">Statement of Work (SOW) Application</h1>
        {/* <Header style={{ marginLeft: "0" }}> */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]}>
          <Menu.Item key="/">
            <NavLink to="/">PDF Generator</NavLink>
          </Menu.Item>
          <Menu.Item key="/RetrievePrevious">
            <NavLink to="/RetrievePrevious">Retrieve Previous</NavLink>
          </Menu.Item>
          <Menu.Item key="/ProfessionalServices">
            <NavLink to="/ProfessionalServices">PDF Generator</NavLink>
          </Menu.Item>
        </Menu>
        {/* </Header> */}
      </div>
    </div>
  );
}

export default Nav;
