import { ReactNode } from "react"
import { InvisibleHTMLCheckboxProps } from "./partials/invisibleHTMLCheckbox"

export interface CheckboxProps extends InvisibleHTMLCheckboxProps {
  label?: ReactNode
  className?: string
}