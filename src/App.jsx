import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import CustomerManagement from "./pages/CustomerManagement";
import CustomerStatsPage from "./pages/CustomerStatsPage";
import { CustomerProvider } from "./context/CustomerContext";

const App = () => {
  return (
    <CustomerProvider>
      <Router>
        <div className="flex">

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<CustomerManagement />} />
              <Route path="/stats" element={<CustomerStatsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CustomerProvider>
  );
};

export default App;