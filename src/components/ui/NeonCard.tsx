
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NeonCardProps extends HTMLAttributes<HTMLDivElement> {
  color?: "cyan" | "magenta" | "yellow";
  glassEffect?: boolean;
  hoverEffect?: boolean;
}

const NeonCard = forwardRef<HTMLDivElement, NeonCardProps>(
  ({ className, color = "cyan", glassEffect = true, hoverEffect = true, children, ...props }, ref) => {
    const getColorClasses = () => {
      switch (color) {
        case "magenta":
          return "border-neon-magenta";
        case "yellow":
          return "border-neon-yellow";
        default:
          return "border-neon-cyan";
      }
    };

    const getGlowStyles = () => {
      switch (color) {
        case "magenta":
          return {
            "--glow-color": "rgba(255, 0, 255, 0.6)",
            boxShadow: "0 0 15px rgba(255, 0, 255, 0.4), inset 0 0 8px rgba(255, 0, 255, 0.2)",
          };
        case "yellow":
          return {
            "--glow-color": "rgba(255, 255, 0, 0.6)",
            boxShadow: "0 0 15px rgba(255, 255, 0, 0.4), inset 0 0 8px rgba(255, 255, 0, 0.2)",
          };
        default:
          return {
            "--glow-color": "rgba(0, 255, 255, 0.6)",
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.4), inset 0 0 8px rgba(0, 255, 255, 0.2)",
          };
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "border-2 rounded-md overflow-hidden bg-cyber-dark p-5",
          getColorClasses(),
          glassEffect && "backdrop-blur-sm bg-opacity-70",
          hoverEffect && "transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]",
          className
        )}
        style={getGlowStyles() as React.CSSProperties}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NeonCard.displayName = "NeonCard";

export default NeonCard;
