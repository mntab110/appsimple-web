import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./app/page";
import PrivacyPage from "./app/privacy/page";

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/privacy') {
    return (
      <div className="min-h-screen flex flex-col">
        <PrivacyPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HomePage />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
