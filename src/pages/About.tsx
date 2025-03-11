
import { ArrowRight, Users, MessageSquare, Globe, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import CyberButton from "@/components/ui/CyberButton";
import GlitchText from "@/components/ui/GlitchText";
import NeonCard from "@/components/ui/NeonCard";
import HolographicEffect from "@/components/effects/HolographicEffect";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="relative max-w-7xl mx-auto">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-cyber-black/80 backdrop-blur-sm -z-10"></div>
        
        {/* Header */}
        <div className="text-center mb-16">
          <GlitchText as="h1" className="text-4xl md:text-5xl font-bold mb-4">
            The Resistance HQ
          </GlitchText>
          <p className="max-w-2xl mx-auto text-gray-300">
            We are the architects of the neon future, coding at the edge of reality to bring cybernetic visions to life.
          </p>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Meet <span className="text-neon-magenta">The Crew</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <NeonCard color="cyan">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-cyan">
                  <div className="w-full h-full bg-cyber-dark flex items-center justify-center">
                    <Users size={40} className="text-neon-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Zero_Cool</h3>
                <p className="text-sm text-gray-400 mb-4">Neural Architect</p>
                <p className="text-gray-300 text-sm mb-4">
                  Specializes in designing neural interfaces that bridge the gap between human consciousness and digital systems.
                </p>
              </div>
            </NeonCard>
            
            {/* Team Member 2 */}
            <NeonCard color="magenta">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-magenta">
                  <div className="w-full h-full bg-cyber-dark flex items-center justify-center">
                    <Users size={40} className="text-neon-magenta" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Phantom_Six</h3>
                <p className="text-sm text-gray-400 mb-4">Quantum Coder</p>
                <p className="text-gray-300 text-sm mb-4">
                  Master of quantum encryption algorithms and reality-bending code architecture.
                </p>
              </div>
            </NeonCard>
            
            {/* Team Member 3 */}
            <NeonCard color="yellow">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-yellow">
                  <div className="w-full h-full bg-cyber-dark flex items-center justify-center">
                    <Users size={40} className="text-neon-yellow" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Neon_Viper</h3>
                <p className="text-sm text-gray-400 mb-4">Holo Designer</p>
                <p className="text-gray-300 text-sm mb-4">
                  Creates immersive holographic interfaces that blend physical and digital realities.
                </p>
              </div>
            </NeonCard>
            
            {/* Team Member 4 */}
            <NeonCard color="cyan">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-cyan">
                  <div className="w-full h-full bg-cyber-dark flex items-center justify-center">
                    <Users size={40} className="text-neon-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Byte_Walker</h3>
                <p className="text-sm text-gray-400 mb-4">Network Diver</p>
                <p className="text-gray-300 text-sm mb-4">
                  Explores the deepest layers of the network, extracting valuable data from the digital abyss.
                </p>
              </div>
            </NeonCard>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="mb-16">
          <HolographicEffect className="p-8" color="mixed">
            <h2 className="text-3xl font-bold mb-6 text-center">Our <span className="text-neon-yellow">Mission</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-dark/60 flex items-center justify-center border border-neon-cyan">
                  <Globe className="text-neon-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Expand Digital Frontiers</h3>
                <p className="text-gray-300 text-sm">
                  Push the boundaries of what's possible in the digital realm through innovative technology.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-dark/60 flex items-center justify-center border border-neon-magenta">
                  <MessageSquare className="text-neon-magenta" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Connect Neural Networks</h3>
                <p className="text-gray-300 text-sm">
                  Facilitate seamless communication between human minds and artificial intelligence.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-dark/60 flex items-center justify-center border border-neon-yellow">
                  <Coffee className="text-neon-yellow" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Fuel the Resistance</h3>
                <p className="text-gray-300 text-sm">
                  Provide tools and technologies that empower individuals in the digital age.
                </p>
              </div>
            </div>
          </HolographicEffect>
        </div>
        
        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Join <span className="text-neon-cyan">The Network</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Ready to dive into the neon-lit future with us? Connect your neural interface to our network and let's build something extraordinary.
          </p>
          <Link to="/projects">
            <CyberButton size="lg" className="group">
              Initialize Connection
              <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" size={18} />
            </CyberButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
