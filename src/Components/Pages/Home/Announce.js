import React, { useState } from "react";
import "./Announce.css";
const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    "background1 text-white flex items-center justify-between px-5 py-5 "
  );

  const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden ");
  };
  return (
    <div className={announceStyle}>
      <h1 className="text-2xl text-white">Hurry up it's 40% off now </h1>
      <h2
        className="cursor-pointer text-2xl text-white font-semibold "
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </h2>
    </div>
  );
};

export default Announce;
