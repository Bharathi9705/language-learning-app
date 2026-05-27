import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./App";

const navItems = [
  { path: "/home",       icon: "🏠", label: "Home"       },
  { path: "/flashcards", icon: "🃏", label: "Flashcards" },
  { path: "/quiz",       icon: "🎯", label: "Quiz"       },
  { path: "/profile",    icon: "👤", label: "Profile"    },
];

function Sidebar() {
  const { user, progress } = useContext(AppContext);
  const streak = progress.streak || 0;

  return (
    <div style={{
      width: 220, minHeight: "100vh",
      background: "#13161e",
      borderRight: "1px solid #252a38",
      display: "flex", flexDirection: "column",
      position: "fixed", top: 0, left: 0,
      fontFamily: "'Segoe UI', sans-serif", zIndex: 50,
    }}>

      {/* Logo */}
      <div style={{
        padding: "24px 20px",
        borderBottom: "1px solid #252a38",
        background: "linear-gradient(135deg,rgba(102,126,234,0.1),rgba(118,75,162,0.1))",
      }}>
        <div style={{ fontSize: 32, marginBottom: 6 }}>🌍</div>
        <div style={{ fontSize: 17, fontWeight: 800, color: "#e8eaf0" }}>LinguaLearn</div>
        <div style={{ fontSize: 11, color: "#8890a4", marginTop: 2 }}>Learn 6 languages 🚀</div>
      </div>

      {/* Streak badge */}
      {streak > 0 && (
        <div style={{
          margin: "12px", padding: "10px 14px",
          background: "rgba(243,156,18,0.1)",
          border: "1px solid rgba(243,156,18,0.3)",
          borderRadius: 10, display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ fontSize: 20 }}>🔥</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#f39c12" }}>{streak} Day Streak!</div>
            <div style={{ fontSize: 11, color: "#8890a4" }}>Keep it up!</div>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav style={{ padding: "12px", flex: 1 }}>
        {navItems.map(item => (
          <NavLink key={item.path} to={item.path} style={({ isActive }) => ({
            display: "flex", alignItems: "center", gap: 12,
            padding: "11px 14px", borderRadius: 12, marginBottom: 4,
            textDecoration: "none",
            background: isActive ? "linear-gradient(135deg,rgba(102,126,234,0.15),rgba(118,75,162,0.15))" : "transparent",
            color:      isActive ? "#667eea" : "#8890a4",
            fontWeight: isActive ? 600 : 400,
            fontSize: 14,
            borderLeft: isActive ? "3px solid #667eea" : "3px solid transparent",
            transition: "all 0.15s",
          })}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      {user && (
        <div style={{
          padding: "14px 16px",
          borderTop: "1px solid #252a38",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <img src={user.photoURL} alt="avatar" style={{
            width: 32, height: 32, borderRadius: "50%",
            border: "2px solid #667eea",
          }} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#e8eaf0" }}>
              {user.displayName?.split(" ")[0]}
            </div>
            <div style={{ fontSize: 10, color: "#2ecc71" }}>● Online</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;