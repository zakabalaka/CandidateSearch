import React, { useState, useEffect } from "react";
import CandidateCard from "../components/CandidateCard";
import { fetchCandidate } from "../api";

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCandidate();
  }, []);

  const loadCandidate = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCandidate();
      setCandidate(data);
    } catch (err) {
      setError("Failed to load candidate. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading candidate...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {candidate && typeof candidate === 'object' ? (
        <CandidateCard {...candidate} />
      ) : (
        <p>No more candidates available</p>
      )}
      <button onClick={loadCandidate}>Next Candidate</button>
    </div>
  );
};

export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const addCandidateToLocalStorage = (candidate: any) => {
  const existingCandidates = getFromLocalStorage("savedCandidates") || [];
  existingCandidates.push(candidate);
  saveToLocalStorage("savedCandidates", existingCandidates);
};
