import React from "react";
import type { IconProps } from "@/types";

const ArrowIcon: React.FC<IconProps> = ({ className = "", ...props }) => {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 14 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 1L13 7M7 1L1 7M7 1V15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ArrowIcon;
