"use client"

import { type AnchorHTMLAttributes, type MouseEvent } from "react"

type DemoLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href?: string | object
}

export default function DemoLink({ onClick, children, ...props }: DemoLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onClick) onClick(e)
  }
  return (
    <a href="#" onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
