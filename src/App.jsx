import React, { useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import UploadPage from "./components/UploadPage.jsx";
import AnalysisPage from "./components/AnalysisPage.jsx";
import HistoryPage from "./components/HistoryPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [page, setPage] = useState("landing");

  const showNavbar = ["dashboard", "upload", "analysis", "history", "profile"].includes(page);

  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar && <Navbar currentPage={page} onNavigate={setPage} onLogout={() => setPage("landing")} />}

      {page === "landing" && (
        <LandingPage
          onGetStarted={() => setPage("signup")}
          onSignIn={() => setPage("login")}
        />
      )}

      {page === "signup" && (
        <SignupPage
          onBack={() => setPage("landing")}
          onSwitch={() => setPage("login")}
          onSuccess={() => setPage("dashboard")}
        />
      )}

      {page === "login" && (
        <LoginPage
          onBack={() => setPage("landing")}
          onSwitch={() => setPage("signup")}
          onSuccess={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && <Dashboard />}
      {page === "upload" && <UploadPage />}
      {page === "analysis" && <AnalysisPage />}
      {page === "history" && <HistoryPage />}
      {page === "profile" && <ProfilePage />}
    </div>
  );
}