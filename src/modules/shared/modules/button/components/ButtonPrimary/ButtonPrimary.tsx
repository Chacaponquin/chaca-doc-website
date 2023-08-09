import React from 'react'

interface ButtonProps {
   text: string
   onClick?: () => void
}

export default function ButtonPrimary({ text, onClick }: ButtonProps) {
   return (
      <button onClick={onClick} className="button-primary">
         {text}
      </button>
   )
}
