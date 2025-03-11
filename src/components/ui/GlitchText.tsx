
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: "cyan" | "magenta" | "yellow";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  intensity?: "low" | "medium" | "high";
}

const GlitchText = forwardRef<HTMLSpanElement, GlitchTextProps>(
  ({ className, color = "cyan", as = "span", intensity = "medium", children, ...props }, ref) => {
    const Component = as;
    
    const getColorClasses = () => {
      switch (color) {
        case "magenta":
          return "text-neon-magenta";
        case "yellow":
          return "text-neon-yellow";
        default:
          return "text-neon-cyan";
      }
    };
    
    const getIntensityClasses = () => {
      switch (intensity) {
        case "low":
          return "after:left-[-1px] before:left-[1px] after:animate-[glitch_3s_infinite] before:animate-[glitch_4s_infinite]";
        case "high":
          return "after:left-[-3px] before:left-[3px] after:animate-[glitch_1.5s_infinite] before:animate-[glitch_2s_infinite]";
        default:
          return "after:left-[-2px] before:left-[2px] after:animate-[glitch_2s_infinite] before:animate-[glitch_3s_infinite]";
      }
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "relative inline-block glitch-effect", 
          getColorClasses(), 
          getIntensityClasses(),
          className
        )}
        data-text={children}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

GlitchText.displayName = "GlitchText";

export default GlitchText;
