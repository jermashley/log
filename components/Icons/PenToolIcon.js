import { useEffect, useState } from 'react'

const PenToolIcon = ({ isActive }) => {
  const [active, setActive] = useState(isActive)

  useEffect(() => {
    setActive(isActive)
  }, [isActive])

  return (
    <svg
      className={`stroke-current ${
        active ? `text-pink-500` : `text-coolGray-800 dark:text-coolGray-400`
      }`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15.8333L15.8333 10L18.3333 12.5L12.5 18.3333L10 15.8333Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9993 10.8337L13.7493 4.58366L1.66602 1.66699L4.58268 13.7503L10.8327 15.0003L14.9993 10.8337Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1.66602 1.66699L7.9875 7.98848" strokeWidth="1.5" />
      <circle cx="9.16667" cy="9.16667" r="1.66667" strokeWidth="1.5" />
    </svg>
  )
}

export default PenToolIcon
