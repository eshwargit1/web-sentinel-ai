import { cn } from "@/lib/utils";

interface ShieldIconProps {
  className?: string;
  size?: number;
}

const ShieldIcon = ({ className, size = 40 }: ShieldIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M20 3L5 9V18C5 27.5 11.5 36.25 20 38C28.5 36.25 35 27.5 35 18V9L20 3Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20 8L10 12V18C10 24.5 14.5 30.5 20 32C25.5 30.5 30 24.5 30 18V12L20 8Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M15 20L18 23L25 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldIcon;
