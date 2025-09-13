import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import UploadPage from "./components/UploadPage";
import AnalysisPage from "./components/AnalysisPage";
import HistoryPage from "./components/HistoryPage";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("landing");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Show Navbar on all pages except landing/login/signup */}
      {page !== "landing" && page !== "signup" && page !== "login" && (
        <Navbar setPage={setPage} />
      )}

      {page === "landing" && (
        <LandingPage
          onGetStarted={() => setPage("signup")}
          onSignIn={() => setPage("login")}
        />
      )}
      {page === "signup" && (
        <SignupPage onBack={() => setPage("landing")} onSwitch={() => setPage("login")} onSuccess={() => setPage("home")} />
      )}
      {page === "login" && (
        <LoginPage onBack={() => setPage("landing")} onSwitch={() => setPage("signup")} onSuccess={() => setPage("home")} />
      )}
      {page === "home" && <Home />}
      {page === "upload" && <UploadPage />}
      {page === "analysis" && <AnalysisPage />}
      {page === "history" && <HistoryPage />}
      {page === "profile" && <ProfilePage />}
    </div>
  );
}
