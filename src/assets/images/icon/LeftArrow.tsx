import { color } from "@styles/theme.style";

export const LeftArrow: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={color.grayDark1}
      {...props}
    >
      <path d="M13.2322 22.2322C12.2559 23.2085 12.2559 24.7915 13.2322 25.7678L29.1421 41.6777C30.1184 42.654 31.7014 42.654 32.6777 41.6777C33.654 40.7014 33.654 39.1184 32.6777 38.1421L18.5355 24L32.6777 9.85787C33.654 8.88156 33.654 7.29864 32.6777 6.32233C31.7014 5.34602 30.1184 5.34602 29.1421 6.32233L13.2322 22.2322ZM16 21.5L15 21.5L15 26.5L16 26.5L16 21.5Z" />
    </svg>
  );
};