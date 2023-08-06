import React from "react";
import { IconProps } from "../interfaces/icon";
import { DEFAULT_ICON_SIZE } from "../constants";

export default function Check({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43 11L16.875 37L5 25.1818"
        stroke="inherit"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}