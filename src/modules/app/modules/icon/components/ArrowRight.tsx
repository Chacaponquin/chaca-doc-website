import React from 'react'
import { IconProps } from '../interfaces/icon'
import { DEFAULT_ICON_SIZE } from '../constants'

export default function ArrowRight({ size = DEFAULT_ICON_SIZE }: IconProps) {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 48 48"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M41.9999 24H5.99994"
            stroke="inherit"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M30 12L42 24L30 36"
            stroke="inherit"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   )
}
