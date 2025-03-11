import React from "react";
import CandidateCard from "./CandidateCard";

interface CandidateListProps {
  candidates: any[];
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates }) => {
  return (
    <div>
      {candidates.length > 0 ? (
        candidates.map((candidate, index) => (
          <CandidateCard key={index} {...candidate} />
        ))
      ) : (
        <p>No candidates have been saved.</p>
      )}
    </div>
  );
};

export default CandidateList;