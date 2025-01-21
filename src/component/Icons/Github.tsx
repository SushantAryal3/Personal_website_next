import React from "react";

const GithubIcon = () => {
  return (
    <a href="https://github.com/SushantAryal3">
      <button className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white  group transition-all duration-300">
        <svg
          className="fill-black z-10 transition-all duration-300 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 0.297C5.372 0.297 0 5.669 0 12.297C0 17.618 3.438 22.086 8.205 23.682C8.805 23.795 9.025 23.435 9.025 23.123C9.025 22.845 9.015 22.124 9.008 21.168C5.672 21.884 4.968 19.631 4.968 19.631C4.422 18.291 3.633 17.916 3.633 17.916C2.546 17.25 3.713 17.266 3.713 17.266C4.918 17.34 5.555 18.501 5.555 18.501C6.616 20.265 8.285 19.798 9.053 19.496C9.158 18.742 9.461 18.258 9.799 18.001C7.151 17.743 4.344 16.682 4.344 11.927C4.344 10.535 4.838 9.398 5.656 8.535C5.529 8.276 5.137 7.045 5.782 5.397C5.782 5.397 6.771 5.107 9.003 6.501C9.956 6.262 10.972 6.144 11.987 6.137C13.002 6.144 14.018 6.262 14.971 6.501C17.203 5.107 18.191 5.397 18.191 5.397C18.836 7.045 18.444 8.276 18.317 8.535C19.135 9.398 19.629 10.535 19.629 11.927C19.629 16.696 16.811 17.739 14.153 17.989C14.569 18.316 14.935 18.964 14.935 19.913C14.935 21.319 14.921 22.578 14.921 23.123C14.921 23.435 15.141 23.799 15.747 23.682C20.514 22.086 23.952 17.617 23.952 12.297C23.952 5.669 18.579 0.297 12 0.297Z"
            fill=""
          />
        </svg>
        <div className="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
      </button>
    </a>
  );
};

export default GithubIcon;
