
import { useEffect, useRef } from "react";

interface RainEffectProps {
  intensity?: "low" | "medium" | "high";
  color?: "cyan" | "magenta" | "mixed";
}

const RainEffect: React.FC<RainEffectProps> = ({ 
  intensity = "medium", 
  color = "cyan" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const dropCount = intensity === "low" ? 100 : intensity === "high" ? 300 : 200;
    
    // Define raindrops
    class RainDrop {
      x: number;
      y: number;
      length: number;
      speed: number;
      thickness: number;
      dropColor: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -100; // Start above the canvas
        this.length = Math.random() * 20 + 10; // Length of the raindrop
        this.speed = Math.random() * 5 + 5; // Speed of falling
        this.thickness = Math.random() * 1.5 + 0.5;
        
        // Set color based on props
        if (color === "mixed") {
          const colors = ["rgba(0, 255, 255, ", "rgba(255, 0, 255, "];
          this.dropColor = colors[Math.floor(Math.random() * colors.length)];
        } else if (color === "magenta") {
          this.dropColor = "rgba(255, 0, 255, ";
        } else {
          this.dropColor = "rgba(0, 255, 255, ";
        }
      }
      
      update() {
        this.y += this.speed;
        
        // Reset raindrop when it goes below canvas
        if (this.y > canvas.height) {
          this.y = Math.random() * -100;
          this.x = Math.random() * canvas.width;
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.lineWidth = this.thickness;
        
        // Create gradient for more realistic droplet
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        gradient.addColorStop(0, this.dropColor + "0.1)");
        gradient.addColorStop(1, this.dropColor + "0.6)");
        
        ctx.strokeStyle = gradient;
        ctx.stroke();
      }
    }
    
    // Create rain drops
    const raindrops: RainDrop[] = [];
    for (let i = 0; i < dropCount; i++) {
      raindrops.push(new RainDrop());
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      raindrops.forEach(drop => {
        drop.update();
        drop.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity, color]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
};

export default RainEffect;
