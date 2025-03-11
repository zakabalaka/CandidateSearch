import React, { useState, useEffect } from "react";
import CandidateCard from "../components/CandidateCard/CandidateCard";
import { getFromLocalStorage } from "../utils/localStorage";

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    const storedCandidates = getFromLocalStorage("savedCandidates") || [];
    setSavedCandidates(storedCandidates);
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate, index) => (
          <CandidateCard key={index} {...candidate} />
        ))
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
