
import { useEffect, useState } from "react";

interface GlitchEffectProps {
  intensity?: "low" | "medium" | "high";
  interval?: number;
}

const GlitchEffect: React.FC<GlitchEffectProps> = ({ 
  intensity = "medium", 
  interval = 5000 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    // Set up glitch intervals
    const glitchDuration = intensity === "low" ? 100 : intensity === "high" ? 300 : 200;
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to glitch
        setIsGlitching(true);
        
        // Turn off glitch after duration
        setTimeout(() => {
          setIsGlitching(false);
        }, glitchDuration);
      }
    }, interval);
    
    return () => {
      clearInterval(glitchInterval);
    };
  }, [intensity, interval]);
  
  // Generate different glitch styles based on intensity
  const getGlitchStyles = () => {
    if (!isGlitching) return {};
    
    const glitchIntensity = 
      intensity === "low" ? 1 : 
      intensity === "high" ? 3 : 2;
    
    const transformValue = `translate(${(Math.random() - 0.5) * glitchIntensity * 10}px, ${(Math.random() - 0.5) * glitchIntensity * 5}px)`;
    
    return {
      position: "fixed" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: `rgba(${Math.random() > 0.5 ? "255, 0, 255" : "0, 255, 255"}, ${Math.random() * 0.03})`,
      backgroundImage: `repeating-linear-gradient(${Math.random() * 360}deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ${Math.random() * 5 + 1}px, rgba(255, 255, 255, 0.1) ${Math.random() * 5 + 1}px, rgba(255, 255, 255, 0.1) ${Math.random() * 10 + 2}px)`,
      transform: transformValue,
      pointerEvents: "none" as const,
      zIndex: 1000,
      mixBlendMode: "screen" as const,
    };
  };
  
  // Create random RGB shift lines when glitching
  const createRGBShiftLines = () => {
    if (!isGlitching) return null;
    
    const lineCount = intensity === "low" ? 2 : intensity === "high" ? 6 : 4;
    const lines = [];
    
    for (let i = 0; i < lineCount; i++) {
      const height = Math.random() * 2 + 1;
      const position = Math.random() * 100;
      const color = Math.random() > 0.5 ? "rgba(0, 255, 255, 0.5)" : "rgba(255, 0, 255, 0.5)";
      
      lines.push(
        <div
          key={i}
          style={{
            position: "fixed",
            top: `${position}%`,
            left: 0,
            width: "100%",
            height: `${height}px`,
            backgroundColor: color,
            opacity: Math.random() * 0.7 + 0.3,
            zIndex: 1001,
            pointerEvents: "none",
          }}
        />
      );
    }
    
    return lines;
  };
  
  return (
    <>
      <div style={getGlitchStyles()} />
      {createRGBShiftLines()}
    </>
  );
};

export default GlitchEffect;
