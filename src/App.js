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

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <div className="title">
        <h1 className="main-heading">Statement of Work (SOW) Application</h1>
      </div>

      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">PDF Generator</Menu.Item>
          <Menu.Item key="2">Retrieve Previous</Menu.Item>
          <Menu.Item key="3">Professional Services </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "25px" }}>
        <div className="site-layout-content">
          <Form>
            <Form.Item name="radio-group" label="Service Region">
              <div>
                <Radio.Group>
                  <Radio value="a">EMEA</Radio>
                  <Radio value="b">APAC</Radio>
                  <Radio value="c">NA & LATAM</Radio>
                </Radio.Group>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        SOW PDF Generator
      </Footer> */}
    </Layout>
  );
}

export default App;
