
import { useState } from 'react';
import { ExternalLink, Github, Smartphone, Star, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Let's Play App",
      description: "Sports platform connecting athletes and enthusiasts with real-time match updates, team management, and social features.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop",
      category: 'mobile',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      features: ['Real-time Updates', 'Team Management', 'Social Features', 'Match Scheduling'],
      links: {
        playstore: '#',
        github: '#'
      },
      status: 'Published',
      metrics: { downloads: '1K+', rating: 4.8 }
    },
    {
      id: 2,
      title: "Stima Sacco App V2",
      description: "Mobile chama solution for financial groups with savings tracking, loan management, and member administration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: 'fintech',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'JWT'],
      features: ['Savings Tracking', 'Loan Management', 'Member Admin', 'Financial Reports'],
      links: {
        demo: '#',
        github: '#'
      },
      status: 'Enterprise',
      metrics: { users: '500+', transactions: '10K+' }
    },
    {
      id: 3,
      title: "HESED Journeys Taxi",
      description: "Ride-hailing platform with real-time tracking, payment integration, and driver-passenger matching system.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop",
      category: 'mobile',
      tech: ['Flutter', 'Google Maps', 'Firebase', 'Payment Gateway'],
      features: ['Real-time Tracking', 'Payment Integration', 'Driver Matching', 'Trip History'],
      links: {
        demo: '#',
        github: '#'
      },
      status: 'Beta',
      metrics: { rides: '200+', drivers: '50+' }
    },
    {
      id: 4,
      title: "Agvision Mobile App",
      description: "AI-powered crop disease detection system helping farmers identify and treat plant diseases using machine learning.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&h=300&fit=crop",
      category: 'ai',
      tech: ['Flutter', 'TensorFlow', 'Python', 'REST API'],
      features: ['AI Disease Detection', 'Treatment Recommendations', 'Crop Database', 'Offline Mode'],
      links: {
        demo: '#',
        github: '#'
      },
      status: 'Development',
      metrics: { accuracy: '94%', crops: '50+' }
    },
    {
      id: 5,
      title: "Mobile Ticket Management",
      description: "Comprehensive ticketing system for events with QR code scanning, analytics, and real-time attendance tracking.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop",
      category: 'enterprise',
      tech: ['Flutter', 'QR Scanner', 'Firebase', 'Analytics'],
      features: ['QR Code Scanning', 'Real-time Analytics', 'Attendance Tracking', 'Event Management'],
      links: {
        demo: '#',
        github: '#'
      },
      status: 'Published',
      metrics: { events: '100+', tickets: '5K+' }
    },
    {
      id: 6,
      title: "Nauli App",
      description: "Transportation fare system for public transport with route optimization and digital payment solutions.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      category: 'mobile',
      tech: ['Flutter', 'GPS', 'Payment API', 'Route Optimization'],
      features: ['Route Optimization', 'Digital Payments', 'Fare Calculation', 'Transport Tracking'],
      links: {
        demo: '#',
        github: '#'
      },
      status: 'Pilot',
      metrics: { routes: '25+', users: '300+' }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'fintech', label: 'Fintech' },
    { key: 'enterprise', label: 'Enterprise' },
    { key: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Beta': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Enterprise': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Pilot': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-[#1A1A1B] to-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-[#42A5F5] to-[#0175C2] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative mobile applications and enterprise solutions that make a real impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-[#42A5F5] to-[#0175C2] text-white shadow-lg transform scale-105'
                  : 'bg-[#1A1A1B]/50 text-gray-400 hover:text-[#42A5F5] hover:bg-[#42A5F5]/10 border border-[#42A5F5]/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-[#1A1A1B]/60 to-[#2A2A2B]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#42A5F5]/10 hover:border-[#42A5F5]/30 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.links.playstore && (
                    <a
                      href={project.links.playstore}
                      className="p-3 bg-[#42A5F5] rounded-full hover:bg-[#0175C2] transition-colors transform hover:scale-110"
                    >
                      <Smartphone size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="p-3 bg-[#42A5F5] rounded-full hover:bg-[#0175C2] transition-colors transform hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="p-3 bg-[#42A5F5] rounded-full hover:bg-[#0175C2] transition-colors transform hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#42A5F5] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#42A5F5]/10 text-[#42A5F5] text-xs rounded-md border border-[#42A5F5]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-[#42A5F5] rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex justify-between items-center pt-4 border-t border-[#42A5F5]/10">
                  <div className="flex gap-4 text-xs">
                    {Object.entries(project.metrics).map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className="text-[#42A5F5] font-semibold">{value}</div>
                        <div className="text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs">Featured</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#42A5F5] to-[#0175C2] rounded-lg font-semibold hover:from-[#0175C2] hover:to-[#42A5F5] transition-all duration-300 transform hover:scale-105">
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
