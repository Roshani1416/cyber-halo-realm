
import { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HolographicEffectProps {
  children: ReactNode;
  intensity?: "low" | "medium" | "high";
  color?: "cyan" | "magenta" | "mixed";
  className?: string;
  mouseTracking?: boolean;
}

const HolographicEffect: React.FC<HolographicEffectProps> = ({
  children,
  intensity = "medium",
  color = "cyan",
  className,
  mouseTracking = true,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Update element position when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          updateElementPosition();
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("holo-container");
    if (element) {
      observer.observe(element);
    }

    function updateElementPosition() {
      const element = document.getElementById("holo-container");
      if (element) {
        const rect = element.getBoundingClientRect();
        setElementPosition({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    }

    window.addEventListener("resize", updateElementPosition);
    window.addEventListener("scroll", updateElementPosition);

    return () => {
      if (element) observer.unobserve(element);
      window.removeEventListener("resize", updateElementPosition);
      window.removeEventListener("scroll", updateElementPosition);
    };
  }, []);

  // Track mouse position
  useEffect(() => {
    if (!mouseTracking) return;

    function handleMouseMove(e: MouseEvent) {
      if (isVisible) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible, mouseTracking]);

  // Calculate holographic effect based on mouse position
  const calculateHolographicEffect = () => {
    if (!isVisible || !mouseTracking) return {};

    // Calculate relative mouse position to element
    const relativeX = mousePosition.x - elementPosition.x;
    const relativeY = mousePosition.y - elementPosition.y;

    // Calculate percentage across the element
    const percentX = Math.max(0, Math.min(1, relativeX / elementPosition.width));
    const percentY = Math.max(0, Math.min(1, relativeY / elementPosition.height));

    // Calculate rotation based on mouse position
    const intensityFactor = intensity === "low" ? 2 : intensity === "high" ? 8 : 5;
    const tiltX = (percentY - 0.5) * intensityFactor;
    const tiltY = (percentX - 0.5) * intensityFactor;

    // Define shine gradient direction based on mouse
    const angle = Math.atan2(relativeY - elementPosition.height / 2, relativeX - elementPosition.width / 2) * (180 / Math.PI);

    return {
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      "--shine-angle": `${angle}deg`,
    } as React.CSSProperties;
  };

  // Get color classes and gradients based on color prop
  const getColorStyles = () => {
    switch (color) {
      case "magenta":
        return {
          borderColor: "rgba(255, 0, 255, 0.3)",
          "--holo-color-1": "rgba(255, 0, 255, 0.2)",
          "--holo-color-2": "rgba(255, 0, 255, 0.05)",
        } as React.CSSProperties;
      case "mixed":
        return {
          borderColor: "rgba(180, 0, 255, 0.3)",
          "--holo-color-1": "rgba(0, 255, 255, 0.15)",
          "--holo-color-2": "rgba(255, 0, 255, 0.15)",
        } as React.CSSProperties;
      default:
        return {
          borderColor: "rgba(0, 255, 255, 0.3)",
          "--holo-color-1": "rgba(0, 255, 255, 0.2)",
          "--holo-color-2": "rgba(0, 255, 255, 0.05)",
        } as React.CSSProperties;
    }
  };

  return (
    <div
      id="holo-container"
      className={cn(
        "relative border rounded-lg overflow-hidden transition-transform duration-200",
        "backdrop-blur-sm bg-cyber-dark/60",
        className
      )}
      style={{
        ...calculateHolographicEffect(),
        ...getColorStyles(),
      }}
    >
      {/* Holographic overlay effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 mix-blend-screen" 
        style={{
          background: `linear-gradient(var(--shine-angle, 45deg), transparent 30%, var(--holo-color-1) 45%, var(--holo-color-2) 50%, transparent 70%)`,
          opacity: mouseTracking ? 0.6 : 0.3,
        }}
      />
      
      {/* Scanlines effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-20" 
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, var(--holo-color-1), var(--holo-color-1) 1px, transparent 1px, transparent 2px)`,
          backgroundSize: '100% 4px',
        }}
      />
      
      {children}
    </div>
  );
};

export default HolographicEffect;
