import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import StorePage from "./pages/StorePage";
import { CartProvider } from "./context/CartContext";



function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Navbar />
          <Content style={{ padding: "0 50px", marginTop: "24px" }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Routes>
                <Route path="/" element={<StorePage />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </CartProvider>
    </Router>
  );
}

const { Content } = Layout;

export default App;
