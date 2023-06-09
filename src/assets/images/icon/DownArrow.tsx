import { color } from "@styles/theme.style";

export const DownArrow: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={color.grayDark1}
      {...props}
    >
      <path d="M22.2322 34.7678C23.2085 35.7441 24.7915 35.7441 25.7678 34.7678L41.6777 18.8579C42.654 17.8816 42.654 16.2986 41.6777 15.3223C40.7014 14.346 39.1184 14.346 38.1421 15.3223L24 29.4645L9.85787 15.3223C8.88155 14.346 7.29864 14.346 6.32233 15.3223C5.34602 16.2986 5.34602 17.8816 6.32233 18.8579L22.2322 34.7678ZM21.5 32L21.5 33L26.5 33L26.5 32L21.5 32Z" />
    </svg>
  );
};