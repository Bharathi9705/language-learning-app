import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { lessons, languages } from "../data/lessons";
import { AppContext } from "../App";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

function Lessons() {
  const { langCode } = useParams();
  const { user, progress, setProgress } = useContext(AppContext);
  const navigate   = useNavigate();
  const [category, setCategory] = useState("vocabulary");
  const [learned,  setLearned]  = useState(new Set());

  const lang    = languages.find(l => l.code === langCode);
  const data    = lessons[langCode]?.[category] || [];

  async function markLearned(idx) {
    const newLearned = new Set(learned);
    newLearned.add(idx);
    setLearned(newLearned);

    // Save progress to Firestore
    const newProgress = {
      ...progress,
      [langCode]: {
        ...(progress[langCode] || {}),
        wordsLearned: newLearned.size,
        lastStudied:  new Date().toISOString(),
      }
    };
    setProgress(newProgress);
    await setDoc(doc(db, "progress", user.uid), newProgress);
  }

  if (!lang) return <div style={{ padding: 28, color: "#e8eaf0" }}>Language not found!</div>;

  return (
    <div style={{ padding: "24px 28px", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
        <button onClick={() => navigate("/")} style={{
          background: "#1a1e28", border: "1px solid #252a38",
          color: "#8890a4", borderRadius: 10, padding: "8px 14px",
          cursor: "pointer", fontSize: 14,
        }}>← Back</button>
        <div style={{ fontSize: 36 }}>{lang.flag}</div>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e8eaf0" }}>{lang.name}</h2>
          <p style={{ fontSize: 13, color: "#8890a4" }}>{learned.size} words learned today</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        {["vocabulary", "phrases", "grammar"].map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} style={{
            padding: "9px 20px", borderRadius: 20, border: "1.5px solid",
            borderColor: category === cat ? lang.color : "#252a38",
            background: category === cat ? `${lang.color}22` : "#13161e",
            color: category === cat ? lang.color : "#8890a4",
            fontSize: 13, fontWeight: 600, cursor: "pointer",
            textTransform: "capitalize",
          }}>
            {cat === "vocabulary" ? "📖 Vocabulary" : cat === "phrases" ? "💬 Phrases" : "📝 Grammar"}
          </button>
        ))}
      </div>

      {/* Word Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {data.map((item, i) => (
          <div key={i} style={{
            background: learned.has(i) ? `${lang.color}15` : "#13161e",
            border: `1.5px solid ${learned.has(i) ? lang.color : "#252a38"}`,
            borderRadius: 16, padding: "20px 22px",
            transition: "all 0.2s",
          }}>
            {/* Word */}
            <div style={{ fontSize: 26, fontWeight: 800, color: "#e8eaf0", marginBottom: 6 }}>
              {item.word}
            </div>

            {/* Translation */}
            <div style={{ fontSize: 16, color: lang.color, fontWeight: 600, marginBottom: 4 }}>
              {item.translation}
            </div>

            {/* Pronunciation */}
            <div style={{
              display: "inline-block", background: "#1a1e28",
              padding: "3px 10px", borderRadius: 20,
              fontSize: 12, color: "#8890a4", marginBottom: 10,
            }}>
              🔊 {item.pronunciation}
            </div>

            {/* Example */}
            {item.example && (
              <div style={{
                background: "#1a1e28", borderRadius: 10,
                padding: "8px 12px", fontSize: 13,
                color: "#8890a4", marginBottom: 12,
                fontStyle: "italic",
              }}>
                "{item.example}"
              </div>
            )}

            {/* Mark Learned Button */}
            <button onClick={() => markLearned(i)} style={{
              width: "100%", padding: "8px",
              background: learned.has(i) ? lang.color : "transparent",
              color: learned.has(i) ? "white" : lang.color,
              border: `1.5px solid ${lang.color}`,
              borderRadius: 10, fontSize: 13, fontWeight: 700,
              cursor: "pointer", transition: "all 0.2s",
            }}>
              {learned.has(i) ? "✅ Learned!" : "Mark as Learned"}
            </button>
          </div>
        ))}
      </div>

      {/* Quiz CTA */}
      {learned.size >= 3 && (
        <div style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          borderRadius: 16, padding: "20px 24px", marginTop: 24,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "white" }}>Ready to test yourself? 🎯</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>You learned {learned.size} words — take a quiz!</div>
          </div>
          <button onClick={() => navigate("/quiz")} style={{
            background: "white", color: "#667eea",
            border: "none", borderRadius: 12,
            padding: "10px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer",
          }}>Take Quiz →</button>
        </div>
      )}

    </div>
  );
}

export default Lessons;