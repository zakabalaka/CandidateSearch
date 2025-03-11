import React from "react";

interface CandidateProps {
  name: string;
  username: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
}

const CandidateCard: React.FC<CandidateProps> = ({
  name,
  username,
  location,
  avatar_url,
  email,
  html_url,
  company,
}) => (
  <div>
    <img src={avatar_url} alt={name} width={100} style={{ borderRadius: "50%" }} />
    <h2>{name} (@{username})</h2>
    <p><strong>Location:</strong> {location}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Company:</strong> {company}</p>
    <a href={html_url} target="_blank" rel="noopener noreferrer">
      View GitHub Profile
    </a>
  </div>
);

export default CandidateCard;
