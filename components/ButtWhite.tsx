"use client";

import { FaChalkboardUser } from "react-icons/fa6";

export const ButtWhite = () => {
  const handleButtonClick = () => {
    const url = `${window.location.origin}/whiteboard`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleButtonClick}>
      <FaChalkboardUser />
    </button>
  );
};
