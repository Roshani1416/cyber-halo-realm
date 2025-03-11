
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Certificate, Star, ChevronRight, ChevronLeft } from "lucide-react";
import CyberButton from "@/components/ui/CyberButton";
import GlitchText from "@/components/ui/GlitchText";
import NeonCard from "@/components/ui/NeonCard";
import HolographicEffect from "@/components/effects/HolographicEffect";
import { cn } from "@/lib/utils";

// Sample achievements data
const achievements = [
  {
    id: 1,
    title: "Neural Network Championship",
    description: "First place in the global AI algorithm optimization competition.",
    date: "2077.05.12",
    type: "competition",
    icon: <Trophy className="text-neon-yellow" size={28} />,
    color: "yellow",
  },
  {
    id: 2,
    title: "Cybernetic Innovation Award",
    description: "Recognized for breakthrough advancements in neural interface technology.",
    date: "2076.11.30",
    type: "award",
    icon: <Award className="text-neon-cyan" size={28} />,
    color: "cyan",
  },
  {
    id: 3,
    title: "Digital Security Excellence",
    description: "Certificate for developing quantum-resistant encryption protocols.",
    date: "2076.08.15",
    type: "certificate",
    icon: <Certificate className="text-neon-magenta" size={28} />,
    color: "magenta",
  },
  {
    id: 4,
    title: "Reality Augmentation Hackathon",
    description: "Winner of the 48-hour mixed reality development challenge.",
    date: "2076.04.22",
    type: "competition",
    icon: <Trophy className="text-neon-yellow" size={28} />,
    color: "yellow",
  },
  {
    id: 5,
    title: "Synthetic Intelligence Mastery",
    description: "Advanced certification in consciousness transfer algorithms.",
    date: "2075.12.10",
    type: "certificate",
    icon: <Certificate className="text-neon-magenta" size={28} />,
    color: "magenta",
  },
  {
    id: 6,
    title: "Corporate Innovation Recognition",
    description: "Awarded by Arasaka Corp for holographic interface designs.",
    date: "2075.09.03",
    type: "award",
    icon: <Award className="text-neon-cyan" size={28} />,
    color: "cyan",
  },
  {
    id: 7,
    title: "NetRunner Championship",
    description: "First place in the global cybersecurity defense competition.",
    date: "2075.06.17",
    type: "competition",
    icon: <Trophy className="text-neon-yellow" size={28} />,
    color: "yellow",
  },
];

// Skills data
const skills = [
  { name: "Neural Interfacing", level: 95, color: "cyan" },
  { name: "Quantum Algorithms", level: 85, color: "magenta" },
  { name: "Holographic Design", level: 90, color: "yellow" },
  { name: "Cybersecurity", level: 98, color: "cyan" },
  { name: "AI Development", level: 88, color: "magenta" },
  { name: "Mixed Reality", level: 80, color: "yellow" },
];

const Credentials = () => {
  const [filter, setFilter] = useState("all");
  const [filteredAchievements, setFilteredAchievements] = useState(achievements);
  const [activePage, setActivePage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredAchievements.length / itemsPerPage);
  
  // Apply filter
  useEffect(() => {
    if (filter === "all") {
      setFilteredAchievements(achievements);
    } else {
      setFilteredAchievements(achievements.filter(item => item.type === filter));
    }
    setActivePage(0);
  }, [filter]);
  
  // Animation on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = activePage * itemsPerPage;
    return filteredAchievements.slice(startIndex, startIndex + itemsPerPage);
  };
  
  // Navigation
  const nextPage = () => {
    if (activePage < totalPages - 1) {
      setActivePage(prev => prev + 1);
    }
  };
  
  const prevPage = () => {
    if (activePage > 0) {
      setActivePage(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="relative max-w-7xl mx-auto">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-cyber-black/80 backdrop-blur-sm -z-10"></div>
        
        {/* Header */}
        <div className="text-center mb-16">
          <GlitchText as="h1" className="text-4xl md:text-5xl font-bold mb-4">
            Hall of Cyber Glory
          </GlitchText>
          <p className="max-w-2xl mx-auto text-gray-300">
            A chronicle of accomplishments, certifications and victories that showcase our expertise in the digital realm.
          </p>
        </div>
        
        {/* Achievement Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <CyberButton
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="text-sm"
          >
            All Achievements
          </CyberButton>
          <CyberButton
            variant={filter === "competition" ? "yellow" : "outline"}
            onClick={() => setFilter("competition")}
            className="text-sm"
          >
            <Trophy size={16} className="mr-2" />
            Competitions
          </CyberButton>
          <CyberButton
            variant={filter === "award" ? "cyan" : "outline"}
            onClick={() => setFilter("award")}
            className="text-sm"
          >
            <Award size={16} className="mr-2" />
            Awards
          </CyberButton>
          <CyberButton
            variant={filter === "certificate" ? "magenta" : "outline"}
            onClick={() => setFilter("certificate")}
            className="text-sm"
          >
            <Certificate size={16} className="mr-2" />
            Certifications
          </CyberButton>
        </div>
        
        {/* Achievements Timeline */}
        <div className="mb-16 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-yellow md:left-1/2 md:-translate-x-0.5"></div>
          
          {/* Achievements */}
          <AnimatePresence mode="wait">
            <div key={activePage} className="space-y-8 relative">
              {getCurrentPageItems().map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-4 md:gap-0",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-cyber-dark border-2 transform -translate-x-2 md:left-1/2 md:-translate-x-2"
                    style={{ 
                      borderColor: item.color === "cyan" ? "#00FFFF" : 
                                  item.color === "magenta" ? "#FF00FF" : "#FFFF00",
                      boxShadow: `0 0 10px ${item.color === "cyan" ? "#00FFFF" : 
                                              item.color === "magenta" ? "#FF00FF" : "#FFFF00"}`
                    }}
                  ></div>
                  
                  {/* Date (mobile) */}
                  <div className="ml-10 md:hidden text-sm text-gray-400">{item.date}</div>
                  
                  {/* Date (desktop) */}
                  <div className="hidden md:block md:w-[calc(50%-20px)] text-right pr-4 pt-3 text-sm text-gray-400">
                    {index % 2 === 0 ? item.date : ""}
                  </div>
                  
                  {/* Content */}
                  <NeonCard 
                    color={item.color as "cyan" | "magenta" | "yellow"}
                    className="ml-10 md:ml-0 md:w-[calc(50%+20px)] md:max-w-[calc(50%+20px)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-cyber-dark">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </NeonCard>
                  
                  {/* Date (desktop reverse) */}
                  <div className="hidden md:block md:w-[calc(50%-20px)] text-left pl-4 pt-3 text-sm text-gray-400">
                    {index % 2 !== 0 ? item.date : ""}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              <CyberButton 
                onClick={prevPage} 
                disabled={activePage === 0}
                className={activePage === 0 ? "opacity-50 cursor-not-allowed" : ""}
              >
                <ChevronLeft size={18} />
              </CyberButton>
              
              <div className="text-gray-300 px-4">
                {activePage + 1} / {totalPages}
              </div>
              
              <CyberButton 
                onClick={nextPage} 
                disabled={activePage === totalPages - 1}
                className={activePage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""}
              >
                <ChevronRight size={18} />
              </CyberButton>
            </div>
          )}
        </div>
        
        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Technical <span className="text-neon-magenta">Expertise</span></h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Our team's proficiency in cutting-edge technologies defines our capacity to innovate and execute.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HolographicEffect 
                  color={skill.color as "cyan" | "magenta" | "mixed"} 
                  className="p-4"
                  intensity="low"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                    <div className="flex items-center">
                      <span className="text-lg font-bold mr-2" 
                        style={{ 
                          color: skill.color === "cyan" ? "#00FFFF" : 
                                 skill.color === "magenta" ? "#FF00FF" : "#FFFF00" 
                        }}
                      >
                        {skill.level}%
                      </span>
                      <Star 
                        size={16} 
                        className="fill-current" 
                        style={{ 
                          color: skill.color === "cyan" ? "#00FFFF" : 
                                 skill.color === "magenta" ? "#FF00FF" : "#FFFF00" 
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div className="h-2 bg-cyber-black/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color === "cyan" ? "#00FFFF" : 
                                                          skill.color === "magenta" ? "#FF00FF" : "#FFFF00"}80, ${
                                                          skill.color === "cyan" ? "#00FFFF" : 
                                                          skill.color === "magenta" ? "#FF00FF" : "#FFFF00"
                                                      })` 
                      }}
                    />
                  </div>
                </HolographicEffect>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Ready to <span className="text-neon-cyan">join forces</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Our collective expertise can help bring your cybernetic visions to reality. Connect with us to discuss potential collaborations.
          </p>
          <CyberButton size="lg">
            Initiate Contact Protocol
          </CyberButton>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
