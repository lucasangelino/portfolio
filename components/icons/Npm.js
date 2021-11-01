import * as React from "react";

function Npm(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="npm"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#fff" />
      <path
        fill="none"
        stroke="#cb3837"
        strokeWidth={22}
        d="M234 311h213V199H65v112h113V210m-12 123h90M133 232v68m112-68v45m45-67v90m67-68v68m45-68v68"
      />
    </svg>
  );
}

export default Npm;
