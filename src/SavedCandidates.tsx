import React, { useState, useEffect } from "react";
import CandidateCard from "./components/CandidateCard";
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
export const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = (key: string): any | null => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const addCandidateToLocalStorage = (candidate: any) => {
    const existingCandidates = getFromLocalStorage("savedCandidates") || [];
    existingCandidates.push(candidate);
    saveToLocalStorage("savedCandidates", existingCandidates);
  };
  
export default SavedCandidates;
