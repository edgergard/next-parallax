import React from "react";
import type { IconProps } from "@/types";

const DashIcon: React.FC<IconProps> = ({ className = "", ...props }) => {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 14 2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1H13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default DashIcon;
