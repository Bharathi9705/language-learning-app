import React, { useContext } from "react";
import { AppContext } from "../App";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { languages } from "../data/lessons";

function Profile() {
  const { user, progress } = useContext(AppContext);

  const totalWords = Object.entries(progress)
    .filter(([k]) => k !== "streak")
    .reduce((s, [, p]) => s + (p.wordsLearned || 0), 0);

  const streak = progress.streak || 0;
  const langsStudied = Object.keys(progress).filter(k => k !== "streak" && progress[k].wordsLearned > 0).length;

  return (
    <div style={{ padding: "24px 28px", fontFamily: "'Segoe UI', sans-serif", maxWidth: 700 }}>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e8eaf0", marginBottom: 24 }}>👤 Profile</h2>

      {/* User Card */}
      <div style={{
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        borderRadius: 20, padding: "28px 32px", marginBottom: 20,
        display: "flex", alignItems: "center", gap: 20,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.05)", top: -40, right: -40 }} />
        <img 
  src={user.photoURL} 
  alt={user.displayName}
  referrerPolicy="no-referrer"
  style={{
    width: 72, height: 72, borderRadius: "50%",
    border: "3px solid rgba(255,255,255,0.5)",
  }} 
/>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "white" }}>{user.displayName}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{user.email}</div>
          <div style={{
            display: "inline-block", marginTop: 8,
            padding: "3px 12px", borderRadius: 20,
            background: "rgba(255,255,255,0.2)",
            fontSize: 11, fontWeight: 700, color: "white",
          }}>🌍 Language Learner</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 20 }}>
        {[
          { icon: "🔥", val: streak,      label: "Day Streak",      color: "#f39c12" },
          { icon: "📚", val: totalWords,  label: "Words Learned",   color: "#667eea" },
          { icon: "🌍", val: langsStudied,label: "Languages",       color: "#2ecc71" },
        ].map((s, i) => (
          <div key={i} style={{
            background: "#13161e", border: "1px solid #252a38",
            borderRadius: 14, padding: "18px", textAlign: "center",
            borderTop: `4px solid ${s.color}`,
          }}>
            <div style={{ fontSize: 26, marginBottom: 6 }}>{s.icon}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#e8eaf0" }}>{s.val}</div>
            <div style={{ fontSize: 11, color: "#8890a4", marginTop: 3 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Language Progress */}
      <div style={{ background: "#13161e", border: "1px solid #252a38", borderRadius: 16, padding: "20px 24px", marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: "#667eea", marginBottom: 16 }}>📊 Language Progress</h3>
        {languages.map(lang => {
          const p   = progress[lang.code] || {};
          const pct = Math.min(100, Math.round(((p.wordsLearned || 0) / 8) * 100));
          return (
            <div key={lang.code} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
                <span style={{ color: "#e8eaf0", fontWeight: 600 }}>{lang.flag} {lang.name}</span>
                <span style={{ color: "#8890a4" }}>{p.wordsLearned || 0} words</span>
              </div>
              <div style={{ background: "#1a1e28", borderRadius: 20, height: 8 }}>
                <div style={{ height: 8, borderRadius: 20, width: `${pct}%`, background: lang.color, transition: "width 0.5s" }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Sign out */}
      <button onClick={() => signOut(auth)} style={{
        width: "100%", padding: "13px",
        background: "transparent", color: "#e74c3c",
        border: "1.5px solid #e74c3c", borderRadius: 12,
        fontSize: 14, fontWeight: 700, cursor: "pointer",
      }}>Sign Out</button>

    </div>
  );
}

export default Profile;