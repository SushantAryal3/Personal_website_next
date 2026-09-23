import React from "react";

const OrcidIcon = () => {
  return (
    <a
      href="https://orcid.org/0009-0002-6461-1858"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ORCID"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/80 text-white hover:bg-black transition-colors"
    >
      <svg
        viewBox="0 0 256 256"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM86.3 186.2H70.9V79.1h15.4v107.1zM78.6 66.9c-5.5 0-9.9-4.5-9.9-9.9s4.5-9.9 9.9-9.9 9.9 4.5 9.9 9.9-4.4 9.9-9.9 9.9zM194.9 186.2h-15.2v-56.2c0-13.4-4.8-22.6-16.8-22.6-9.2 0-14.7 6.2-17.1 12.1-.9 2.1-1.1 5.1-1.1 8.1v58.6h-15.2s.2-95.1 0-107.1h15.2v15.2c2-3.5 5.6-8.5 13.6-11.7 4.9-1.9 10.3-2.6 15.7-1.4 15.3 3.4 21 15.6 21 32.9v72.1z" />
      </svg>
    </a>
  );
};

export default OrcidIcon;
