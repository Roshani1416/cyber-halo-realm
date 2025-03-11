
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "magenta" | "yellow" | "outline";
  size?: "sm" | "md" | "lg";
  glitch?: boolean;
}

const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = "default", size = "md", glitch = false, children, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "magenta":
          return "border-neon-magenta text-neon-magenta hover:bg-neon-magenta/20";
        case "yellow":
          return "border-neon-yellow text-neon-yellow hover:bg-neon-yellow/20";
        case "outline":
          return "border-white/50 text-white hover:bg-white/10";
        default:
          return "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20";
      }
    };

    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return "py-1 px-3 text-sm";
        case "lg":
          return "py-3 px-6 text-lg";
        default:
          return "py-2 px-4 text-base";
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          "cyber-button relative overflow-hidden border-2 font-bold uppercase tracking-wide bg-transparent transition-all duration-300 ease-in-out",
          getVariantClasses(),
          getSizeClasses(),
          glitch && "glitch-effect",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CyberButton.displayName = "CyberButton";

export default CyberButton;
