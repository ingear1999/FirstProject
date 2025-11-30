import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import heartTerms from "./heart_terms.json";
import "./MedicalTerminology.css";

function MedicalTerminology() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(heartTerms);

  // Fuse.js options
  const options = {
    keys: ["term", "definition"], // search in term and definition
    threshold: 0.4, // 0.0 = exact match, 1.0 = match everything
  };

  const fuse = new Fuse(heartTerms, options);

  useEffect(() => {
    if (!searchTerm) {
      setFiltered(heartTerms); // show all if empty
    } else {
      const results = fuse.search(searchTerm);
      setFiltered(results.map(result => result.item));
    }
  }, [searchTerm]);

  return (
    <div className="medical-page">
      <header className="medical-header">
        <h1>Heart Medical Terminology Dictionary</h1>
        <p>Search any heart‑related term to see its definition.</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search heart term..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="terms-container">
        {filtered.length > 0 ? (
          filtered.map((item, idx) => (
            <div className="term-card" key={idx}>
              <h2>{item.term}</h2>
              <p>{item.definition}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No results found for “{searchTerm}”</p>
        )}
      </div>
    </div>
  );
}

export default MedicalTerminology;
