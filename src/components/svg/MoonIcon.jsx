import * as React from "react"

const MoonIcon = (props) => (
  <svg
    className="w-7 h-7 sm:w-9 sm:h-9 dark:text-yellow-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z"
    />
  </svg>
)

export default MoonIcon
