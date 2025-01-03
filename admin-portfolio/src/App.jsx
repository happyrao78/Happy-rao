import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import CreateTweet from "./components/Tweet";
import ListTweets from "./components/ListTweet";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component

function App() {
  const [tweets, setTweets] = useState([]);

  const AppContent = () => {
    const location = useLocation();

    // Check if the current route is the login page
    const isLoginPage = location.pathname === "/";

    return (
      <div className="min-h-screen flex bg-gray-100">
        {/* Render Sidebar only if not on the login page */}
        {!isLoginPage && <Sidebar />}

        {/* Main Content */}
        <div className={`${isLoginPage ? "w-full" : "flex-1"} p-6`}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/create-tweet"
              element={<CreateTweet setTweets={setTweets} tweets={tweets} />}
            />
            <Route path="/list-tweets" element={<ListTweets tweets={tweets} />} />
          </Routes>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
