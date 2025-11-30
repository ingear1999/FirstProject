import React, { useState } from "react";
import icd10Data from "../Data/icd10Data";
import "./SymptomChecker.css";

// Symptom checklist
const SYMPTOMS = [
  { id: "fever", label: "Fever" },
  { id: "cough", label: "Cough" },
  { id: "fatigue", label: "Fatigue / Weakness" },
  { id: "headache", label: "Headache" },
  { id: "nausea", label: "Nausea" },
  { id: "shortBreath", label: "Shortness of Breath" },
  { id: "chestPain", label: "Chest Pain" },
  { id: "soreThroat", label: "Sore Throat" },
  { id: "diarrhea", label: "Diarrhea" },
  { id: "lossTasteSmell", label: "Loss of Taste / Smell" },
  { id: "abdominalPain", label: "Abdominal Pain" },
  { id: "increasedThirst", label: "Increased Thirst" },
  { id: "frequentUrination", label: "Frequent Urination" },
  { id: "dizziness", label: "Dizziness" },
  { id: "pallor", label: "Pallor" },
  { id: "wheezing", label: "Wheezing" },
  { id: "sensitivityLight", label: "Sensitivity to Light" }
];

// Precompute total weights
const precomputedICD = icd10Data.map(cond => ({
  ...cond,
  totalWeight: cond.symptoms.reduce((sum, s) => sum + s.weight, 0)
}));

export default function SymptomChecker() {
  const [selected, setSelected] = useState(new Set());
  const [results, setResults] = useState([]);
  const [warning, setWarning] = useState(null);

  const toggleSymptom = (id) => {
    setSelected(prev => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  const analyze = () => {
    setWarning(null);
    if (selected.size === 0) {
      setResults([]);
      return;
    }

    const selectedSet = new Set(selected);

    const scored = precomputedICD
      .map(cond => {
        const matched = cond.symptoms.filter(s => selectedSet.has(s.id));
        const matchedWeight = matched.reduce((sum, s) => sum + s.weight, 0);
        const probability = cond.totalWeight > 0 ? Math.round((matchedWeight / cond.totalWeight) * 100) : 0;
        return { ...cond, probability, matched };
      })
      .filter(c => c.probability >= 20)
      .sort((a, b) => b.probability - a.probability);

    // Emergency warning
    const urgent = scored.find(c => c.emergency && c.probability >= 50);
    if (urgent) {
      setWarning({
        text: `⚠️ "${urgent.illness}" may be urgent. Please seek immediate medical care.`,
        condition: urgent
      });
    }

    setResults(scored);
  };

  const reset = () => {
    setSelected(new Set());
    setResults([]);
    setWarning(null);
  };

  const getLabels = (ids) =>
    ids.map(id => SYMPTOMS.find(s => s.id === id)?.label || id).join(", ");

  return (
    <div className="scicd-container">
      <h1 className="scicd-title">Symptom Checking</h1>
      <p className="scicd-subtitle">
        Select symptoms from the checklist. Results show likely conditions with ICD-10 codes and estimated probability.
      </p>

      <div className="scicd-symptom-grid" role="group" aria-label="Symptom selection">
        {SYMPTOMS.map(s => {
          const active = selected.has(s.id);
          return (
            <label
              key={s.id}
              className={`scicd-symptom-card ${active ? "active" : ""}`}
              role="checkbox"
              aria-checked={active}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  toggleSymptom(s.id);
                }
              }}
            >
              <input
                type="checkbox"
                checked={active}
                onChange={() => toggleSymptom(s.id)}
              />
              {active && <span style={{ marginRight: 6 }}>✔️</span>}
              {s.label}
            </label>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28 }}>
        <button className="scicd-analyze-btn" onClick={analyze}>Analyze Symptoms</button>
        <button
          className="scicd-analyze-btn"
          style={{ background: "#fff", color: "#0A63B8", border: "1px solid #E2E8F0" }}
          onClick={reset}
        >
          Reset
        </button>
      </div>

      {warning && (
        <div
          role="alert"
          aria-live="polite"
          style={{
            marginTop: 20,
            background: "linear-gradient(90deg, rgba(255,230,230,1), #fff)",
            borderRadius: 12,
            padding: 14,
            color: "#A61111",
            boxShadow: "0 6px 18px rgba(166, 24, 24, 0.08)"
          }}
        >
          <strong>{warning.text}</strong>
        </div>
      )}

      {results.length > 0 ? (
        <div className="scicd-results-box" aria-live="polite">
          <h2>Possible Conditions</h2>
          {results.map((r, idx) => (
            <div key={idx} className="scicd-result-item">
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: r.emergency ? "#B91C1C" : "#0A63B8" }}>
                  {r.illness} {r.emergency && "⚠️"}
                </div>
                <div style={{ marginTop: 6 }}>
                  <small className="scicd-icd-code">ICD-10: {r.icd}</small>
                  <div style={{ color: "#6B7280", marginTop: 4 }}>
                    Matched: {r.matched.length > 0 ? getLabels(r.matched.map(s => s.id)) : "—"}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0A63B8" }}>{r.probability}%</div>
                <div style={{ height: 10, background: "#E6F2FF", borderRadius: 8, overflow: "hidden", marginTop: 8 }}>
                  <div
                    style={{
                      width: `${r.probability}%`,
                      height: "100%",
                      background: `linear-gradient(90deg, #1E90FF, #00C2FF)`,
                      borderRadius: 8,
                      transition: "width 0.6s ease"
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: 20, textAlign: "center", color: "#6B7280" }}>
          No matching conditions found — try selecting different or additional symptoms.
        </div>
      )}
    </div>
  );
}
