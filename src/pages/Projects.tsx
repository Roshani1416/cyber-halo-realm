
import { useState, useEffect } from "react";
import { Upload, Database, Filter, Search, X, Plus } from "lucide-react";
import CyberButton from "@/components/ui/CyberButton";
import NeonCard from "@/components/ui/NeonCard";
import GlitchText from "@/components/ui/GlitchText";
import HolographicEffect from "@/components/effects/HolographicEffect";
import { cn } from "@/lib/utils";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Neural Interface",
    description: "Brain-computer interface for direct neural communication with cybernetic enhancements.",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "cyan",
  },
  {
    id: 2,
    title: "Holo-Projection",
    description: "Free-floating holographic display with tactile interaction capabilities.",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "magenta",
  },
  {
    id: 3,
    title: "CyberSec Protocol",
    description: "Advanced encryption algorithm with quantum-resistant security measures.",
    category: "Software",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "cyan",
  },
  {
    id: 4,
    title: "Reality Augmentor",
    description: "Overlay digital information on physical environments with neural recognition.",
    category: "Mixed",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "yellow",
  },
  {
    id: 5,
    title: "Memory Implant",
    description: "Neural chip for enhanced memory storage and instant information recall.",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "magenta",
  },
  {
    id: 6,
    title: "Digital Consciousness",
    description: "Experimental framework for transferring consciousness to digital environments.",
    category: "Software",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "cyan",
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [showUpload, setShowUpload] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter projects based on search term and category
  useEffect(() => {
    const filtered = projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "All" || project.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProjects(filtered);
  }, [searchTerm, categoryFilter]);

  // Handle drag events for file upload
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle file drop for upload
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      console.log("File uploaded:", e.dataTransfer.files[0].name);
      
      // For demo purposes, just close the upload panel after a short delay
      setTimeout(() => {
        setShowUpload(false);
      }, 1500);
    }
  };

  // Handle file selection from input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload logic here
      console.log("File selected:", e.target.files[0].name);
      
      // For demo purposes, just close the upload panel after a short delay
      setTimeout(() => {
        setShowUpload(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div 
        className="relative max-w-7xl mx-auto"
        style={{
          backgroundImage: `url('/lovable-uploads/d800e09c-886b-4ec9-b3b5-0531f1339d0a.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-cyber-black/80 backdrop-blur-sm -z-10"></div>
        
        {/* Header */}
        <div className="text-center mb-16">
          <GlitchText as="h1" className="text-4xl md:text-5xl font-bold mb-4">
            The Digital Repository
          </GlitchText>
          <p className="max-w-2xl mx-auto text-gray-300">
            Explore cutting-edge projects that define the neon future or upload your own creations to the network.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neon-cyan" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-cyber-dark/80 border-2 border-neon-cyan/50 focus:border-neon-cyan text-white py-2 pl-10 pr-4 rounded-md outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neon-magenta" size={18} />
            <select
              className="w-full bg-cyber-dark/80 border-2 border-neon-magenta/50 focus:border-neon-magenta text-white py-2 pl-10 pr-4 rounded-md outline-none transition-all appearance-none"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Mixed">Mixed Reality</option>
            </select>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <CyberButton 
              variant="yellow" 
              className="w-full md:w-auto"
              onClick={() => setShowUpload(true)}
            >
              <Upload className="mr-2" size={18} />
              Upload Project
            </CyberButton>
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease-in-out ${index * 0.1}s, transform 0.5s ease-in-out ${index * 0.1}s`
                }}
              >
                <NeonCard 
                  color={project.color as "cyan" | "magenta" | "yellow"} 
                  className="h-full"
                >
                  <div className="aspect-video overflow-hidden rounded mb-4 bg-cyber-black">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="px-2">
                    <div className="mb-4 flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className={cn(
                        "text-xs px-2 py-1 rounded",
                        project.category === "Hardware" ? "bg-neon-cyan/20 text-neon-cyan" :
                        project.category === "Software" ? "bg-neon-magenta/20 text-neon-magenta" :
                        "bg-neon-yellow/20 text-neon-yellow"
                      )}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <CyberButton 
                      variant={project.color as "default" | "magenta" | "yellow"} 
                      className="w-full text-sm"
                    >
                      View Details
                    </CyberButton>
                  </div>
                </NeonCard>
              </div>
            ))}
            
            {/* Add Project Card */}
            <div 
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-in-out ${filteredProjects.length * 0.1}s, transform 0.5s ease-in-out ${filteredProjects.length * 0.1}s`
              }}
            >
              <div className="border-2 border-dashed border-gray-500 rounded-md h-full flex flex-col items-center justify-center p-6 text-center bg-cyber-dark/30 hover:bg-cyber-dark/50 transition-all cursor-pointer">
                <Plus className="text-neon-cyan mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Add New Project</h3>
                <p className="text-gray-400">Upload your own creation to the network</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <Database className="mx-auto text-gray-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <CyberButton onClick={() => { setSearchTerm(""); setCategoryFilter("All"); }}>
              Reset Filters
            </CyberButton>
          </div>
        )}
      </div>
      
      {/* Upload Project Modal */}
      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-black/80 backdrop-blur-md">
          <HolographicEffect
            className="max-w-xl w-full p-6"
            intensity="medium"
            color="mixed"
          >
            <button
              onClick={() => setShowUpload(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6">Upload Project</h2>
            
            <div
              className={cn(
                "border-2 border-dashed rounded-md p-10 text-center cursor-pointer transition-all mb-6",
                dragActive ? "border-neon-cyan bg-neon-cyan/10" : "border-gray-500 hover:border-gray-300"
              )}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Upload className="mx-auto text-neon-cyan mb-4" size={40} />
              <p className="text-white mb-2">
                {dragActive ? "Drop your file here" : "Drag & drop files here"}
              </p>
              <p className="text-gray-400 text-sm">or click to browse</p>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <CyberButton
                variant="outline"
                onClick={() => setShowUpload(false)}
              >
                Cancel
              </CyberButton>
              <CyberButton>
                Upload
              </CyberButton>
            </div>
          </HolographicEffect>
        </div>
      )}
    </div>
  );
};

export default Projects;
