import * as React from "react";

function WaveIcon(props) {
  return (
    <svg
      width={190}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 30.615c48-42.4 146.667-31.666 190-21-13.6 24-132.333 24-190 21z"
        fill="#EBD96B"
      />
    </svg>
  );
}

export default WaveIcon;