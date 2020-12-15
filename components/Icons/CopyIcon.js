const CopyIcon = () => {
  return (
    <svg
      // width="32"
      // height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shadow-xl"
    >
      <g filter="url(#filter0_dd)">
        <path
          d="M22.5 5H13.5C12.6562 5 12 5.6875 12 6.5V15.5C12 16.3438 12.6562 17 13.5 17H22.5C23.3125 17 24 16.3438 24 15.5V6.5C24 5.6875 23.3125 5 22.5 5ZM13.5 18C12.0938 18 11 16.9062 11 15.5V9H9.5C8.65625 9 8 9.6875 8 10.5V19.5C8 20.3438 8.65625 21 9.5 21H18.5C19.3125 21 20 20.3438 20 19.5V18H13.5Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default CopyIcon
