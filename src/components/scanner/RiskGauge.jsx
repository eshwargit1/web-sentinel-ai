import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const RiskGauge = ({ score, label }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 100);
    return () => clearTimeout(timer);
  }, [score]);

  // Calculate the arc position (score 0 = safe/green, 100 = danger/red)
  const radius = 45;
  const circumference = Math.PI * radius; // Half circle
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  const getColor = () => {
    if (score <= 30) return "text-safe";
    if (score <= 60) return "text-warning";
    return "text-danger";
  };

  const getGradientId = () => {
    if (score <= 30) return "safeGradient";
    if (score <= 60) return "warningGradient";
    return "dangerGradient";
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-28">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dangerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(0, 72%, 51%)" />
              <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
            </linearGradient>
            <linearGradient id="warningGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(25, 95%, 53%)" />
              <stop offset="100%" stopColor="hsl(45, 93%, 47%)" />
            </linearGradient>
            <linearGradient id="safeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(160, 84%, 39%)" />
              <stop offset="100%" stopColor="hsl(142, 76%, 36%)" />
            </linearGradient>
          </defs>

          {/* Background arc */}
          <path
            d="M 5 50 A 45 45 0 0 1 95 50"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Animated progress arc */}
          <path
            d="M 5 50 A 45 45 0 0 1 95 50"
            stroke={`url(#${getGradientId()})`}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
          <span className={cn("text-lg font-bold uppercase tracking-wide", getColor())}>
            {label}
          </span>
        </div>
      </div>

      {/* Safe indicator */}
      <div className="flex justify-between w-full px-4 mt-2">
        <span className="text-xs text-muted-foreground">SAFE</span>
        <span className="text-xs text-muted-foreground">UNSAFE</span>
      </div>
    </div>
  );
};

export default RiskGauge;
