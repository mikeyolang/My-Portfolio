import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Smartphone,
} from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Mobile Application Developer",
    "Flutter Expert",
    "Fintech Solutions Architect",
    "Innovation Leader",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentTitle = titles[currentIndex];

        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentTitle.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-left lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#42A5F5] to-[#0175C2] bg-clip-text text-transparent">
                  Michael Olang
                </span>
              </h1>

              <div className="h-16 flex items-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                  {displayText}
                  <span className="animate-pulse text-[#42A5F5]">|</span>
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
                Crafting exceptional mobile experiences with Android
                development. Specializing in fintech solutions and enterprise
                applications from Nairobi, Kenya.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-3 bg-gradient-to-r from-[#42A5F5] to-[#0175C2] rounded-lg font-semibold hover:from-[#0175C2] hover:to-[#42A5F5] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href =
                    "https://drive.google.com/file/d/1dAeigzUf9F9tbPi8dBh3pvxZaizAqEtQ/view?usp=drive_link";
                  link.download = "Michael Olang Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download size={20} />
                Download Resume
              </button>

              <div className="flex gap-3">
                <a
                  href="https://github.com/mikeyolang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#42A5F5]/30 rounded-lg hover:bg-[#42A5F5]/10 transition-all duration-300 hover:border-[#42A5F5]"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-olang-830b63214/"
                  className="p-3 border border-[#42A5F5]/30 rounded-lg hover:bg-[#42A5F5]/10 transition-all duration-300 hover:border-[#42A5F5]"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#42A5F5]">
                  15+
                </div>
                <div className="text-gray-400">Apps Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#42A5F5]">
                  500+
                </div>
                <div className="text-gray-400">Students Mentored</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#42A5F5]">
                  3+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile Mockups */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Phone */}
              <div className="relative z-10 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="bg-gradient-to-br from-[#1A1A1B] to-[#2A2A2B] p-2 rounded-3xl shadow-2xl border border-[#42A5F5]/20">
                  <div className="bg-[#0A0A0B] rounded-2xl p-6 h-96 flex flex-col">
                    <div className="flex items-center justify-center mb-4">
                      <Smartphone className="text-[#42A5F5] mb-2" size={32} />
                    </div>
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-[#42A5F5]">
                        Android Development
                      </h3>
                      <p className="text-sm text-gray-400">
                        Full-Stack Development
                      </p>
                    </div>
                    <div className="flex-1 bg-gradient-to-b from-[#42A5F5]/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="absolute -top-8 -left-16 z-0 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <div className="bg-gradient-to-br from-[#1A1A1B] to-[#2A2A2B] p-2 rounded-3xl shadow-xl border border-[#42A5F5]/10">
                  <div className="bg-[#0A0A0B] rounded-2xl p-4 h-72 flex flex-col">
                    <div className="text-center mb-2">
                      <h4 className="text-sm font-semibold text-[#42A5F5]">
                        Tech-Mentor
                      </h4>
                      <p className="text-xs text-gray-400">Exploring</p>
                    </div>
                    <div className="flex-1 bg-gradient-to-b from-[#42A5F5]/10 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-8 animate-bounce">
                <div className="w-3 h-3 bg-[#42A5F5] rounded-full"></div>
              </div>
              <div className="absolute bottom-8 -left-4 animate-pulse">
                <div className="w-2 h-2 bg-[#42A5F5] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#42A5F5]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
