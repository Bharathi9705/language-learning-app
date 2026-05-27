import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import { languages } from "../data/lessons";

function Home() {
  const { user, progress } = useContext(AppContext);
  const navigate = useNavigate();

  const totalWords = Object.values(progress).reduce((s, p) => s + (p.wordsLearned || 0), 0);
  const streak     = progress.streak || 0;

  return (
    <div style={{ padding: "24px 28px", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Welcome */}
      <div style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        borderRadius: 20, padding: "28px 32px", marginBottom: 24,
        color: "white", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)", top: -60, right: -60 }} />
        <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4 }}>Good day! 👋</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
          Welcome back, {user.displayName.split(" ")[0]}!
        </h2>
        <p style={{ fontSize: 14, opacity: 0.85 }}>Keep learning, keep growing 🚀</p>

        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          {[
            { icon: "🔥", val: streak,      label: "Day Streak" },
            { icon: "📚", val: totalWords,  label: "Words Learned" },
            { icon: "🌍", val: Object.keys(progress).filter(k => k !== "streak").length, label: "Languages" },
          ].map((s, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "12px 18px", textAlign: "center", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 22 }}>{s.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 800 }}>{s.val}</div>
              <div style={{ fontSize: 11, opacity: 0.8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Choose Language */}
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e8eaf0", marginBottom: 16 }}>
        🌍 Choose a Language
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 28 }}>
        {languages.map(lang => {
          const p = progress[lang.code] || {};
          const pct = Math.min(100, Math.round(((p.wordsLearned || 0) / 8) * 100));
          return (
            <div key={lang.code} onClick={() => navigate(`/lessons/${lang.code}`)} style={{
              background: "#13161e", border: "1px solid #252a38",
              borderRadius: 16, padding: "20px", cursor: "pointer",
              transition: "transform 0.15s, box-shadow 0.15s",
              borderTop: `4px solid ${lang.color}`,
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 30px rgba(0,0,0,0.3)`; }}
              onMouseOut={e  => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 36, marginBottom: 8 }}>{lang.flag}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#e8eaf0", marginBottom: 4 }}>{lang.name}</div>
              <div style={{ fontSize: 12, color: "#8890a4", marginBottom: 10 }}>{p.wordsLearned || 0} / 8 words</div>
              <div style={{ background: "#1a1e28", borderRadius: 20, height: 6 }}>
                <div style={{ height: 6, borderRadius: 20, width: `${pct}%`, background: lang.color, transition: "width 0.5s" }} />
              </div>
              <div style={{ fontSize: 11, color: "#8890a4", marginTop: 6 }}>{pct}% complete</div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e8eaf0", marginBottom: 16 }}>⚡ Quick Actions</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {[
          { icon: "🃏", label: "Flashcards", sub: "Flip & learn", path: "/flashcards", color: "#e74c3c" },
          { icon: "🎯", label: "Quiz",       sub: "Test yourself", path: "/quiz",       color: "#f39c12" },
          { icon: "👤", label: "Profile",    sub: "Your progress", path: "/profile",    color: "#2ecc71" },
        ].map((a, i) => (
          <div key={i} onClick={() => navigate(a.path)} style={{
            background: "#13161e", border: "1px solid #252a38",
            borderRadius: 14, padding: "18px", cursor: "pointer",
            textAlign: "center", transition: "transform 0.15s",
            borderBottom: `3px solid ${a.color}`,
          }}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseOut={e  => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ fontSize: 30, marginBottom: 8 }}>{a.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#e8eaf0" }}>{a.label}</div>
            <div style={{ fontSize: 11, color: "#8890a4", marginTop: 3 }}>{a.sub}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;