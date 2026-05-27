import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

import Sidebar    from "./Sidebar";
import Login      from "./pages/Login";
import Home       from "./pages/Home";
import Lessons    from "./pages/Lessons";
import Flashcards from "./pages/Flashcards";
import Quiz       from "./pages/Quiz";
import Profile    from "./pages/Profile";

export const AppContext = createContext(null);

function App() {
  const [user,     setUser]     = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const snap = await getDoc(doc(db, "progress", u.uid));
        if (snap.exists()) setProgress(snap.data());
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#667eea,#764ba2)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: 16, fontFamily: "'Segoe UI', sans-serif",
    }}>
      <div style={{ fontSize: 56 }}>🌍</div>
      <div style={{ color: "white", fontSize: 18, fontWeight: 700 }}>LinguaLearn</div>
      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Loading...</div>
    </div>
  );

  if (!user) return (
    <AppContext.Provider value={{ user, progress, setProgress }}>
      <Login />
    </AppContext.Provider>
  );

  return (
    <AppContext.Provider value={{ user, progress, setProgress }}>
      <BrowserRouter>
        <div style={{ display: "flex", minHeight: "100vh", background: "#0d0f14" }}>
          <Sidebar />
          <div style={{ marginLeft: 220, flex: 1, minHeight: "100vh", overflowY: "auto" }}>
            <Routes>
              <Route path="/"                  element={<Navigate to="/home" replace />} />
              <Route path="/home"              element={<Home />}       />
              <Route path="/lessons/:langCode" element={<Lessons />}    />
              <Route path="/flashcards"        element={<Flashcards />} />
              <Route path="/quiz"              element={<Quiz />}       />
              <Route path="/profile"           element={<Profile />}    />
              <Route path="*"                  element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
