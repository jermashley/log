const FeatherIcon = ({ stroke }) => (
  <svg
    className={`stroke-current ${
      stroke ?? `text-coolGray-800 dark:text-coolGray-500`
    }`}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.8667 10.2001C17.8049 9.26187 18.332 7.9894 18.332 6.66258C18.332 5.33576 17.8049 4.06328 16.8667 3.12508C15.9285 2.18687 14.656 1.6598 13.3292 1.6598C12.0024 1.6598 10.7299 2.18687 9.79169 3.12508L4.16669 8.75008V15.8334H11.25L16.8667 10.2001Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3334 6.66667L1.66669 18.3333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5833 12.5H7.5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default FeatherIcon
