export const PauserIcon = ({ audio }) => {
  return (
    <svg
      width="61"
      height="62"
      viewBox="0 0 61 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_1_2)">
        <path
          d="M43 30.5C43 23.5964 37.4036 18 30.5 18C23.5964 18 18 23.5964 18 30.5V31.0453C18 37.9489 23.5964 43.5453 30.5 43.5453C37.4036 43.5453 43 37.9489 43 31.0453V30.5Z"
          fill="#FACD66"
        />
        <rect x="26" y="26" width="3" height="10" rx="1.5" fill="#F0EFE2" />
        <rect x="32" y="26" width="3" height="10" rx="1.5" fill="#F0EFE2" />
      </g>
      <defs>
        <filter
          id="filter0_i_1_2"
          x="18"
          y="18"
          width="25"
          height="25.5453"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2" />
        </filter>
      </defs>
    </svg>
  );
};
