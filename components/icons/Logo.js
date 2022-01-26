import * as React from "react"

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 50 50"
    
    {...props}
  >
    <path d="M78 36 93.3 2 141 117h-28.8L78 36Z" fill="url(#a)" />
    <path d="M0 117 55 0h33L47 91l33-20 19 46H0Z" fill="url(#b)" />
    <defs>
      <linearGradient
        id="a"
        x1={72.919}
        y1={2}
        x2={128.33}
        y2={125.669}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00B8" />
        <stop offset={1} stopColor="#00F5E7" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={49.5}
        y1={0}
        x2={-40}
        y2={195}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.083} stopColor="#E21684" />
        <stop offset={0.865} stopColor="#1E3ACD" />
      </linearGradient>
    </defs>
  </svg>
)

export default Logo
