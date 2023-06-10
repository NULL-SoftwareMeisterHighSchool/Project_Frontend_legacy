import { color } from "@styles/theme.style";

export const UpArrow: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={color.grayDark1}
      {...props}
    >
      <path d="M25.7678 13.2322C24.7915 12.2559 23.2085 12.2559 22.2322 13.2322L6.32233 29.1421C5.34602 30.1184 5.34602 31.7014 6.32233 32.6777C7.29864 33.654 8.88155 33.654 9.85787 32.6777L24 18.5355L38.1421 32.6777C39.1184 33.654 40.7014 33.654 41.6777 32.6777C42.654 31.7014 42.654 30.1184 41.6777 29.1421L25.7678 13.2322ZM26.5 16L26.5 15L21.5 15L21.5 16L26.5 16Z" />
    </svg>
  );
};