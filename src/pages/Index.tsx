
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Zap, Shield, Code } from "lucide-react";
import GlitchText from "@/components/ui/GlitchText";
import CyberButton from "@/components/ui/CyberButton";
import RainEffect from "@/components/effects/RainEffect";
import GlitchEffect from "@/components/effects/GlitchEffect";
import HolographicEffect from "@/components/effects/HolographicEffect";
import { cn } from "@/lib/utils";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Simple intersection observer for features section
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFeaturesInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  // Parallax effect for hero section
  const calculateParallax = (depth: number = 30) => {
    if (!heroRef.current) return {};
    
    const heroRect = heroRef.current.getBoundingClientRect();
    const centerX = heroRect.left + heroRect.width / 2;
    const centerY = heroRect.top + heroRect.height / 2;
    
    const deltaX = (mousePosition.x - centerX) / depth;
    const deltaY = (mousePosition.y - centerY) / depth;
    
    return {
      transform: `translate(${deltaX}px, ${deltaY}px)`,
    };
  };

  // Features data
  const features = [
    {
      icon: <Terminal size={36} className="text-neon-cyan" />,
      title: "Cybernetic Interface",
      description: "Advanced neural links with holographic projection technology for seamless interaction.",
      color: "cyan",
    },
    {
      icon: <Zap size={36} className="text-neon-magenta" />,
      title: "Quantum Processing",
      description: "Lightning-fast computations powered by revolutionary quantum algorithms.",
      color: "magenta",
    },
    {
      icon: <Shield size={36} className="text-neon-yellow" />,
      title: "Neural Encryption",
      description: "State-of-the-art biometric security protocols with multi-layered authentication.",
      color: "yellow",
    },
    {
      icon: <Code size={36} className="text-neon-cyan" />,
      title: "Reality Augmentation",
      description: "Blend digital and physical worlds with our augmented reality neural implants.",
      color: "cyan",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/2f296bec-2391-43b9-a9e7-d1cc59fb0b12.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/90 via-cyber-black/60 to-cyber-black z-0"></div>
        
        {/* Rain effect */}
        <RainEffect intensity="medium" color="mixed" />
        
        {/* Periodic glitch effect */}
        <GlitchEffect intensity="medium" interval={3000} />
        
        {/* Title with parallax effect */}
        <div 
          className={cn(
            "relative z-10 text-center px-6 transition-all duration-1000",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={calculateParallax(50)}
        >
          <div className="mb-6 inline-block">
            <GlitchText 
              as="h1" 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter hero-text"
              style={{"--glow-color": "rgba(0, 255, 255, 0.8)"} as React.CSSProperties}
            >
              NEON FUTURE
            </GlitchText>
          </div>
          
          <p 
            className={cn(
              "max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-8 transition-all duration-1000 delay-300",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Step into a world where technology and humanity converge. The future is now, illuminated by neon dreams and digital realities.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <Link to="/projects">
              <CyberButton size="lg" className="group">
                Explore Projects
                <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" size={18} />
              </CyberButton>
            </Link>
            <Link to="/about">
              <CyberButton variant="magenta" size="lg">
                About Us
              </CyberButton>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-neon-cyan flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon-cyan rounded-full animate-pulse-glow" style={{"--glow-color": "rgba(0, 255, 255, 0.8)"} as React.CSSProperties}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="relative py-20 px-6 bg-cyber-dark z-10"
        style={{
          backgroundImage: `url('/lovable-uploads/bd39c06a-14a5-440a-8220-b671cff7ce17.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-black/80 to-cyber-black/90 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-neon-cyan">Future</span> Technology
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Our cutting-edge systems are powered by next-generation technology, designed to push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="transition-all duration-700 transform"
                style={{
                  opacity: featuresInView ? 1 : 0,
                  transform: featuresInView ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <HolographicEffect 
                  color={feature.color as "cyan" | "magenta" | "mixed"} 
                  className="h-full p-6 flex flex-col items-center text-center"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </HolographicEffect>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-cyber-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to <span className="text-neon-magenta">Jack In</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            The network awaits. Dive into our digital ecosystem and discover projects that are defining the neon future.
          </p>
          <Link to="/projects">
            <CyberButton size="lg" variant="magenta" className="group">
              Enter the System
              <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" size={18} />
            </CyberButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
