import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    type?: "button" | "submit" | "reset"
}

export const Button = ({ text, type="button", onClick }:ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>{text}</button>
  )
}
