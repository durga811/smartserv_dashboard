import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const loginStatus = localStorage.getItem("isAuthenticated") ? true : false;

  const PrivateRoute = ({ element: Component, ...rest }) => {
    return loginStatus ? <Component {...rest} /> : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard/>} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
