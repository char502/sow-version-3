import React from "react";
import { Layout, Button } from "antd";
import "./App.css";

const { Header } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <h1 className="title">This is the title</h1>
        </Header>
      </Layout>
      <Button>This is a button</Button>
    </div>
  );
}

export default App;
