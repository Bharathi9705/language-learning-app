import React, { useState, useContext } from "react";
import { lessons, languages } from "../data/lessons";
import { AppContext } from "../App";

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function generateQuestions(langCode, category) {
  const data = lessons[langCode]?.[category] || [];
  if (data.length < 4) return [];
  return shuffle(data).slice(0, Math.min(8, data.length)).map(item => {
    const wrong = shuffle(data.filter(d => d.word !== item.word)).slice(0, 3).map(d => d.translation);
    const options = shuffle([item.translation, ...wrong]);
    return { question: item.word, answer: item.translation, options, pronunciation: item.pronunciation };
  });
}

function Quiz() {
  const [selectedLang, setSelectedLang] = useState("ta");
  const [category,     setCategory]     = useState("vocabulary");
  const [questions,    setQuestions]    = useState([]);
  const [current,      setCurrent]      = useState(0);
  const [selected,     setSelected]     = useState(null);
  const [score,        setScore]        = useState(0);
  const [done,         setDone]         = useState(false);
  const [started,      setStarted]      = useState(false);

  function startQuiz() {
    const qs = generateQuestions(selectedLang, category);
    setQuestions(qs);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setStarted(true);
  }

  function handleAnswer(opt) {
    if (selected) return;
    setSelected(opt);
    if (opt === questions[current].answer) setScore(s => s + 1);
    setTimeout(() => {
      if (current + 1 >= questions.length) setDone(true);
      else { setCurrent(c => c + 1); setSelected(null); }
    }, 1200);
  }

  const lang = languages.find(l => l.code === selectedLang);
  const q    = questions[current];

  const scoreColor = score / questions.length >= 0.7 ? "#2ecc71" : score / questions.length >= 0.4 ? "#f39c12" : "#e74c3c";
  const scoreEmoji = score / questions.length >= 0.7 ? "🏆" : score / questions.length >= 0.4 ? "👍" : "💪";

  return (
    <div style={{ padding: "24px 28px", fontFamily: "'Segoe UI', sans-serif" }}>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e8eaf0", marginBottom: 6 }}>🎯 Quiz</h2>
      <p style={{ fontSize: 13, color: "#8890a4", marginBottom: 24 }}>Test your knowledge!</p>

      {!started ? (
        <>
          {/* Language selector */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, color: "#8890a4", marginBottom: 10, fontWeight: 600 }}>SELECT LANGUAGE</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {languages.map(l => (
                <button key={l.code} onClick={() => setSelectedLang(l.code)} style={{
                  padding: "8px 16px", borderRadius: 20, border: "1.5px solid",
                  borderColor: selectedLang === l.code ? l.color : "#252a38",
                  background: selectedLang === l.code ? `${l.color}22` : "#13161e",
                  color: selectedLang === l.code ? l.color : "#8890a4",
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                }}>{l.flag} {l.name}</button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 13, color: "#8890a4", marginBottom: 10, fontWeight: 600 }}>SELECT CATEGORY</div>
            <div style={{ display: "flex", gap: 10 }}>
              {["vocabulary","phrases","grammar"].map(cat => (
                <button key={cat} onClick={() => setCategory(cat)} style={{
                  padding: "8px 18px", borderRadius: 20, border: "1.5px solid",
                  borderColor: category === cat ? "#667eea" : "#252a38",
                  background: category === cat ? "rgba(102,126,234,0.15)" : "#13161e",
                  color: category === cat ? "#667eea" : "#8890a4",
                  fontSize: 13, fontWeight: 600, cursor: "pointer", textTransform: "capitalize",
                }}>{cat}</button>
              ))}
            </div>
          </div>

          <button onClick={startQuiz} style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "white", border: "none", borderRadius: 14,
            fontSize: 16, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 4px 20px rgba(102,126,234,0.4)",
          }}>🚀 Start Quiz</button>
        </>
      ) : done ? (
        /* Results */
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>{scoreEmoji}</div>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#e8eaf0", marginBottom: 8 }}>Quiz Complete!</h3>
          <div style={{ fontSize: 48, fontWeight: 800, color: scoreColor, marginBottom: 8 }}>
            {score}/{questions.length}
          </div>
          <div style={{ fontSize: 18, color: "#8890a4", marginBottom: 28 }}>
            {Math.round((score / questions.length) * 100)}% Correct
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={startQuiz} style={{
              background: "linear-gradient(135deg,#667eea,#764ba2)",
              color: "white", border: "none", borderRadius: 12,
              padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}>🔄 Retry</button>
            <button onClick={() => setStarted(false)} style={{
              background: "#13161e", color: "#8890a4",
              border: "1px solid #252a38", borderRadius: 12,
              padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}>Change Language</button>
          </div>
        </div>
      ) : (
        <>
          {/* Progress */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#8890a4", marginBottom: 6 }}>
              <span>Question {current + 1} of {questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div style={{ background: "#1a1e28", borderRadius: 20, height: 8 }}>
              <div style={{ height: 8, borderRadius: 20, width: `${((current) / questions.length) * 100}%`, background: "linear-gradient(90deg,#667eea,#764ba2)", transition: "width 0.3s" }} />
            </div>
          </div>

          {/* Question */}
          <div style={{
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            borderRadius: 20, padding: "32px", textAlign: "center",
            marginBottom: 20, boxShadow: "0 8px 32px rgba(102,126,234,0.3)",
          }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
              {lang?.flag} What does this mean?
            </div>
            <div style={{ fontSize: 36, fontWeight: 800, color: "white", marginBottom: 8 }}>
              {q?.question}
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              🔊 {q?.pronunciation}
            </div>
          </div>

          {/* Options */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {q?.options.map((opt, i) => {
              let bg = "#13161e", border = "#252a38", color = "#e8eaf0";
              if (selected) {
                if (opt === q.answer)             { bg = "rgba(46,204,113,0.15)"; border = "#2ecc71"; color = "#2ecc71"; }
                else if (opt === selected)        { bg = "rgba(231,76,60,0.15)";  border = "#e74c3c"; color = "#e74c3c"; }
              }
              return (
                <button key={i} onClick={() => handleAnswer(opt)} style={{
                  padding: "14px", borderRadius: 14, border: `1.5px solid ${border}`,
                  background: bg, color, fontSize: 14, fontWeight: 600,
                  cursor: selected ? "default" : "pointer",
                  transition: "all 0.2s", textAlign: "center",
                }}>
                  {["A","B","C","D"][i]}. {opt}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;