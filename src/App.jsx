import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Router from './routes'
import Layout from './components/Layout/index'

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Router />
      </Layout>
    </HashRouter>
  );
};

export default App;
