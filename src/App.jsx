import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import About from "./pages/About";
import Auth from "./pages/Auth";
import PageNotFound from "./pages/PageNotFound";
import Fetch from "./pages/Fetch";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      alert("Authenticate to continue");
      return <Navigate to="/auth" />;
    }
    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/add"
            element={
              <ProtectedRoute>
                <Add />
              </ProtectedRoute>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/fetch" element={<Fetch />} />
          <Route exact path="/fetch/:clipId" element={<Fetch />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
