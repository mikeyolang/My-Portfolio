import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const timeline = [
    {
      date: "Feb 2025 - Present",
      title: "Mobile Application Developer",
      company: "Skylab Systems",
      location: "Nairobi, Kenya",
      type: "current",
      description:
        "Leading mobile app development initiatives and architecting scalable solutions.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      date: "Sep - Dec 2024",
      title: "Software Implementation Engineer",
      company: "Endeavour Africa Group",
      location: "Nairobi, Kenya",
      type: "work",
      description:
        "Implemented enterprise software solutions and managed client deployments.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      date: "Apr - Sep 2024",
      title: "Software Development Instructor",
      company: "Power Learn Project Africa",
      location: "Remote",
      type: "work",
      description:
        "Mentored 300+ students in software development and mobile app creation.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      date: "2020 - 2024",
      title: "BSc Computer Science",
      company: "Egerton University",
      location: "Nakuru, Kenya",
      type: "education",
      description:
        "Graduated with honors, specializing in mobile development and software engineering.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const achievements = [
    { label: "Postman Student Leader", value: "Community Leadership" },
    { label: "Project Manager", value: "Team Leadership" },
    { label: "Apps on PlayStore", value: "5+" },
    { label: "Enterprise Solutions", value: "5+" },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#42A5F5] to-[#0175C2] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate mobile developer with a mission to transform ideas into
            exceptional digital experiences. Based in Nairobi, I specialize in
            creating innovative fintech and enterprise solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info & Stats */}
          <div className="space-y-8">
            <div className="bg-[#1A1A1B]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#42A5F5]/10">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-[#42A5F5]" size={24} />
                <h3 className="text-2xl font-semibold">
                  Based in Nairobi, Kenya
                </h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a dedicated Mobile Application Developer with a passion for
                creating impactful solutions that make a difference. With
                expertise in Flutter and modern development practices, I've
                successfully delivered applications ranging from sports
                platforms to fintech solutions.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My journey from Computer Science student to leading mobile
                developer has been driven by curiosity, continuous learning, and
                a commitment to excellence. I believe in the power of technology
                to transform businesses and improve lives.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1B]/30 rounded-xl p-6 border border-[#42A5F5]/10 hover:border-[#42A5F5]/30 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-[#42A5F5] mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Calendar className="text-[#42A5F5]" size={24} />
              My Journey
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#42A5F5] to-[#0175C2]"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6 pb-8">
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                      item.type === "current"
                        ? "bg-[#42A5F5] border-[#42A5F5] text-white"
                        : "bg-[#1A1A1B] border-[#42A5F5]/50 text-[#42A5F5]"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div
                      className={`p-6 rounded-xl border transition-all duration-300 hover:border-[#42A5F5]/50 ${
                        item.type === "current"
                          ? "bg-[#42A5F5]/10 border-[#42A5F5]/30"
                          : "bg-[#1A1A1B]/50 border-[#42A5F5]/10"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-sm text-[#42A5F5] font-medium">
                          {item.date}
                        </span>
                        {item.type === "current" && (
                          <span className="px-2 py-1 bg-[#42A5F5] text-white text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      <h4 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#42A5F5] font-medium mb-1">
                        {item.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {item.location}
                      </p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
