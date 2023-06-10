import { color } from "@styles/theme.style";

export const Menu: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={color.grayDark1}
      {...props}
    >
      <path d="M4 6.00012C4 4.89555 4.89543 4.00012 6 4.00012H21C22.1046 4.00012 23 4.89555 23 6.00012V21.0001C23 22.1047 22.1046 23.0001 21 23.0001H6C4.89543 23.0001 4 22.1047 4 21.0001V6.00012ZM27 4.00012C25.8954 4.00012 25 4.89555 25 6.00012V21.0001C25 22.1047 25.8954 23.0001 27 23.0001H42C43.1046 23.0001 44 22.1047 44 21.0001V6.00012C44 4.89555 43.1046 4.00012 42 4.00012H27ZM27 25.0001C25.8954 25.0001 25 25.8956 25 27.0001V42.0001C25 43.1047 25.8954 44.0001 27 44.0001H42C43.1046 44.0001 44 43.1047 44 42.0001V27.0001C44 25.8956 43.1046 25.0001 42 25.0001H27ZM6 25.0001C4.89543 25.0001 4 25.8956 4 27.0001V42.0001C4 43.1047 4.89543 44.0001 6 44.0001H21C22.1046 44.0001 23 43.1047 23 42.0001V27.0001C23 25.8956 22.1046 25.0001 21 25.0001H6Z" />
    </svg>
  );
};