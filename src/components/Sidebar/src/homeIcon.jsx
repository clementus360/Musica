export const HomeIcon = ({active}) => {
  return (
    <svg
    className="w-10 h-10 3xl:w-16 3xl:h-16 4xl:w-16 4xl:h-16"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g >
        <path
        className="transition-all duration-300"
          d="M17.3818 29.0502V26.239C17.3818 25.5266 17.9611 24.9478 18.6786 24.9433H21.3132C22.034 24.9433 22.6183 25.5234 22.6183 26.239V29.0421C22.6182 29.66 23.1204 30.1621 23.7427 30.1666H25.5402C26.3797 30.1688 27.1855 29.8392 27.7799 29.2506C28.3743 28.662 28.7084 27.8628 28.7084 27.0294V19.0437C28.7084 18.3704 28.4077 17.7318 27.8876 17.2999L21.7811 12.4514C20.7137 11.6033 19.1891 11.6307 18.1533 12.5166L12.1781 17.2999C11.6334 17.7191 11.3078 18.3596 11.2917 19.0437V27.0212C11.2917 28.7584 12.7101 30.1666 14.4598 30.1666H16.2163C16.5159 30.1688 16.804 30.0521 17.0167 29.8425C17.2294 29.6329 17.349 29.3477 17.3489 29.0502H17.3818Z"
          fill={active? "#FACD66":"#EFEEE0"} fillOpacity={active? "1":"0.25"}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_66_342"
          x="0.291687"
          y="0.833313"
          width="39.4167"
          height="40.3334"
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
          <feOffset />
          <feGaussianBlur stdDeviation="5.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.980392 0 0 0 0 0.803921 0 0 0 0 0.4 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_66_342"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_66_342"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
