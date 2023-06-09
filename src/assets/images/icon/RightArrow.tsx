import { color } from "@styles/theme.style";

export const RightArrow: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={color.grayDark1}
      {...props}
    >
      <path d="M34.7678 25.7678C35.7441 24.7915 35.7441 23.2085 34.7678 22.2322L18.8579 6.32233C17.8816 5.34602 16.2986 5.34602 15.3223 6.32233C14.346 7.29864 14.346 8.88155 15.3223 9.85786L29.4645 24L15.3223 38.1421C14.346 39.1184 14.346 40.7014 15.3223 41.6777C16.2986 42.654 17.8816 42.654 18.8579 41.6777L34.7678 25.7678ZM32 26.5H33V21.5H32V26.5Z" />
    </svg>
  );
};