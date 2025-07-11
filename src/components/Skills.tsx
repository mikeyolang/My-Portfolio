import { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Smartphone,
  Cloud,
  GitBranch,
  Cog,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: "Flutter", level: 95, icon: "🚀" },
        { name: "Dart", level: 95, icon: "🎯" },
        { name: "Java", level: 65, icon: "☕" },
        { name: "Kotlin", level: 80, icon: "🔥" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "RESTful APIs", level: 90, icon: "🔗" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
      ],
    },
    {
      title: "Web Technologies",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "JavaScript", level: 90, icon: "⚡" },
        { name: "TypeScript", level: 65, icon: "📘" },
        { name: "React", level: 35, icon: "⚛️" },
        { name: "HTML/CSS", level: 90, icon: "🎨" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "Firebase", level: 90, icon: "🔥" },
        { name: "CI/CD", level: 80, icon: "🔄" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="w-8 h-8" />,
      skills: [
        { name: "Git", level: 95, icon: "📋" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Postman", level: 90, icon: "📬" },
      ],
    },
    {
      title: "Specializations",
      icon: <Cog className="w-8 h-8" />,
      skills: [
        { name: "Fintech Solutions", level: 90, icon: "💰" },
        { name: "Enterprise Apps", level: 85, icon: "🏢" },
        { name: "UI/UX Design", level: 80, icon: "✨" },
        { name: "Project Management", level: 85, icon: "📊" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 bg-[#0A0A0B]" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-[#42A5F5] to-[#0175C2] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional mobile and web
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-[#1A1A1B]/60 to-[#2A2A2B]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#42A5F5]/10 hover:border-[#42A5F5]/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#42A5F5] group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[#42A5F5] font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-[#2A2A2B] rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#42A5F5] to-[#0175C2] rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Technologies Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-300">
            Specialized in building with
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Flutter",
              "Kotlin",
              "Firebase",
              "Node.js",
              "MongoDB",
              "RESTful APIs",
              "Git",
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-[#42A5F5]/20 to-[#0175C2]/20 border border-[#42A5F5]/30 rounded-full text-[#42A5F5] font-medium hover:from-[#42A5F5]/30 hover:to-[#0175C2]/30 transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
