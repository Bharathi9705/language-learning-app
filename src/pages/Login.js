import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  async function handleLogin() {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      alert("Login failed! Try again.");
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Segoe UI', sans-serif", position: "relative", overflow: "hidden",
    }}>

      {/* Animated background circles */}
      <div style={{
        position: "absolute", width: 400, height: 400,
        borderRadius: "50%", background: "rgba(255,255,255,0.05)",
        top: -100, left: -100,
      }} />
      <div style={{
        position: "absolute", width: 300, height: 300,
        borderRadius: "50%", background: "rgba(255,255,255,0.05)",
        bottom: -50, right: -50,
      }} />
      <div style={{
        position: "absolute", width: 200, height: 200,
        borderRadius: "50%", background: "rgba(255,255,255,0.08)",
        top: "40%", right: "10%",
      }} />

      {/* Login Card */}
      <div style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: 24, padding: "48px 40px",
        textAlign: "center", maxWidth: 440, width: "90%",
        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
        position: "relative", zIndex: 1,
      }}>

        {/* Logo */}
        <div style={{ fontSize: 64, marginBottom: 8 }}>🌍</div>
        <h1 style={{
          fontSize: 32, fontWeight: 800, color: "white",
          marginBottom: 8, letterSpacing: -0.5,
        }}>LinguaLearn</h1>
        <p style={{
          fontSize: 15, color: "rgba(255,255,255,0.8)",
          marginBottom: 32, lineHeight: 1.6,
        }}>
          Learn 6 languages with flashcards,<br />
          quizzes & daily lessons! 🚀
        </p>

        {/* Language flags */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 12, marginBottom: 32, flexWrap: "wrap",
        }}>
          {["🇮🇳 Tamil","🇮🇳 Hindi","🇫🇷 French","🇯🇵 Japanese","🇪🇸 Spanish","🇩🇪 German"].map((l, i) => (
            <span key={i} style={{
              background: "rgba(255,255,255,0.2)",
              padding: "6px 12px", borderRadius: 20,
              fontSize: 12, color: "white", fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.3)",
            }}>{l}</span>
          ))}
        </div>

        {/* Features */}
        {[
          { icon: "📚", text: "Daily Lessons & Flashcards" },
          { icon: "🎯", text: "Interactive Quizzes" },
          { icon: "🔥", text: "Streak System & Progress Tracking" },
          { icon: "☁️", text: "Cloud Sync with Firebase" },
        ].map((f, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 12, padding: "10px 16px",
            marginBottom: 10, textAlign: "left",
            border: "1px solid rgba(255,255,255,0.2)",
          }}>
            <span style={{ fontSize: 20 }}>{f.icon}</span>
            <span style={{ fontSize: 13, color: "white", fontWeight: 500 }}>{f.text}</span>
          </div>
        ))}

        {/* Google Login Button */}
        <button onClick={handleLogin} style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 12, width: "100%", padding: "14px 20px", marginTop: 24,
          background: "white", color: "#333",
          border: "none", borderRadius: 14,
          fontSize: 15, fontWeight: 700, cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          transition: "transform 0.15s, box-shadow 0.15s",
        }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
          }}
        >
          <span style={{
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "white", borderRadius: "50%",
            width: 28, height: 28,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 14,
          }}>G</span>
          Continue with Google
        </button>

        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>
          Free forever • No credit card required ✨
        </p>
      </div>
    </div>
  );
}

export default Login;
