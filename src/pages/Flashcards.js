import React, { useState, useContext } from "react";
import { lessons, languages } from "../data/lessons";
import { AppContext } from "../App";

function Flashcards() {
  const { progress } = useContext(AppContext);
  const [selectedLang, setSelectedLang] = useState("ta");
  const [category,     setCategory]     = useState("vocabulary");
  const [currentIdx,   setCurrentIdx]   = useState(0);
  const [flipped,      setFlipped]      = useState(false);
  const [known,        setKnown]        = useState(0);
  const [unknown,      setUnknown]      = useState(0);

  const lang  = languages.find(l => l.code === selectedLang);
  const cards = lessons[selectedLang]?.[category] || [];
  const card  = cards[currentIdx];
  const done  = currentIdx >= cards.length;

  function next(isKnown) {
    if (isKnown) setKnown(k => k + 1);
    else         setUnknown(u => u + 1);
    setFlipped(false);
    setTimeout(() => setCurrentIdx(i => i + 1), 200);
  }

  function restart() {
    setCurrentIdx(0);
    setFlipped(false);
    setKnown(0);
    setUnknown(0);
  }

  return (
    <div style={{ padding: "24px 28px", fontFamily: "'Segoe UI', sans-serif" }}>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e8eaf0", marginBottom: 6 }}>🃏 Flashcards</h2>
      <p style={{ fontSize: 13, color: "#8890a4", marginBottom: 24 }}>Flip the card to see the translation!</p>

      {/* Language + Category selector */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
        {languages.map(l => (
          <button key={l.code} onClick={() => { setSelectedLang(l.code); setCurrentIdx(0); setFlipped(false); setKnown(0); setUnknown(0); }} style={{
            padding: "7px 14px", borderRadius: 20, border: "1.5px solid",
            borderColor: selectedLang === l.code ? l.color : "#252a38",
            background: selectedLang === l.code ? `${l.color}22` : "#13161e",
            color: selectedLang === l.code ? l.color : "#8890a4",
            fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>{l.flag} {l.name}</button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        {["vocabulary","phrases","grammar"].map(cat => (
          <button key={cat} onClick={() => { setCategory(cat); setCurrentIdx(0); setFlipped(false); }} style={{
            padding: "7px 16px", borderRadius: 20, border: "1.5px solid",
            borderColor: category === cat ? "#667eea" : "#252a38",
            background: category === cat ? "rgba(102,126,234,0.15)" : "#13161e",
            color: category === cat ? "#667eea" : "#8890a4",
            fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize",
          }}>{cat}</button>
        ))}
      </div>

      {/* Progress bar */}
      {!done && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#8890a4", marginBottom: 6 }}>
            <span>{currentIdx + 1} / {cards.length}</span>
            <span>✅ {known} &nbsp; ❌ {unknown}</span>
          </div>
          <div style={{ background: "#1a1e28", borderRadius: 20, height: 8 }}>
            <div style={{ height: 8, borderRadius: 20, width: `${((currentIdx) / cards.length) * 100}%`, background: "linear-gradient(90deg,#667eea,#764ba2)", transition: "width 0.3s" }} />
          </div>
        </div>
      )}

      {/* Done screen */}
      {done ? (
        <div style={{ textAlign: "center", padding: "48px 20px" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: "#e8eaf0", marginBottom: 8 }}>Session Complete!</h3>
          <p style={{ fontSize: 15, color: "#8890a4", marginBottom: 24 }}>
            ✅ Known: {known} &nbsp;&nbsp; ❌ Unknown: {unknown}
          </p>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#667eea", marginBottom: 24 }}>
            {Math.round((known / cards.length) * 100)}% Score
          </div>
          <button onClick={restart} style={{
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "white", border: "none", borderRadius: 14,
            padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer",
          }}>🔄 Try Again</button>
        </div>
      ) : (
        <>
          {/* Flashcard */}
          <div onClick={() => setFlipped(f => !f)} style={{
            background: flipped
              ? "linear-gradient(135deg, #667eea, #764ba2)"
              : "#13161e",
            border: "1px solid #252a38",
            borderRadius: 24, padding: "48px 32px",
            textAlign: "center", cursor: "pointer",
            minHeight: 220, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            transition: "all 0.3s", marginBottom: 20,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            {!flipped ? (
              <>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#e8eaf0", marginBottom: 12 }}>
                  {card?.word}
                </div>
                <div style={{ fontSize: 13, color: "#8890a4" }}>👆 Tap to reveal</div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 28, fontWeight: 800, color: "white", marginBottom: 8 }}>
                  {card?.translation}
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
                  🔊 {card?.pronunciation}
                </div>
                {card?.example && (
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
                    "{card?.example}"
                  </div>
                )}
              </>
            )}
          </div>

          {/* Action buttons */}
          {flipped && (
            <div style={{ display: "flex", gap: 14 }}>
              <button onClick={() => next(false)} style={{
                flex: 1, padding: "14px", borderRadius: 14, border: "none",
                background: "rgba(231,76,60,0.15)", color: "#e74c3c",
                fontSize: 15, fontWeight: 700, cursor: "pointer",
                border: "1.5px solid rgba(231,76,60,0.3)",
              }}>❌ Still Learning</button>
              <button onClick={() => next(true)} style={{
                flex: 1, padding: "14px", borderRadius: 14, border: "none",
                background: "rgba(46,204,113,0.15)", color: "#2ecc71",
                fontSize: 15, fontWeight: 700, cursor: "pointer",
                border: "1.5px solid rgba(46,204,113,0.3)",
              }}>✅ Got it!</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Flashcards;