import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "olangmichael37@gmail.com",
      link: "mailto:olangmichael37@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Nairobi, Kenya",
      link: null,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Available",
      value: "Mon - Fri, 9AM - 6PM EAT",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: "https://www.github.com/mikeyolang",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/michael-olang-830b63214/",
      color: "hover:text-blue-400",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      link: "https://wa.me/254768241008",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="py-20 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#42A5F5] to-[#0175C2] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your mobile app idea to life? Let's discuss how we
            can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, whether it's
                building a mobile app, consulting on your project, or exploring
                potential collaborations. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[#1A1A1B]/50 rounded-xl border border-[#42A5F5]/10 hover:border-[#42A5F5]/30 transition-all duration-300"
                >
                  <div className="text-[#42A5F5]">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-[#42A5F5] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-[#1A1A1B]/50 rounded-xl border border-[#42A5F5]/10 hover:border-[#42A5F5]/30 transition-all duration-300 transform hover:scale-105 text-gray-400 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-gradient-to-r from-[#42A5F5]/20 to-[#0175C2]/20 border border-[#42A5F5]/30 rounded-xl hover:from-[#42A5F5]/30 hover:to-[#0175C2]/30 transition-all duration-300 text-left">
                  <Calendar className="w-6 h-6 text-[#42A5F5] mb-2" />
                  <div className="text-sm font-medium">Schedule Call</div>
                  <div className="text-xs text-gray-400">
                    Book a consultation
                  </div>
                </button>
                <button className="p-4 bg-gradient-to-r from-[#42A5F5]/20 to-[#0175C2]/20 border border-[#42A5F5]/30 rounded-xl hover:from-[#42A5F5]/30 hover:to-[#0175C2]/30 transition-all duration-300 text-left">
                  <Send className="w-6 h-6 text-[#42A5F5] mb-2" />
                  <div className="text-sm font-medium">Quick Message</div>
                  <div className="text-xs text-gray-400">
                    Send direct message
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#1A1A1B]/60 to-[#2A2A2B]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#42A5F5]/10">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#2A2A2B]/50 border border-[#42A5F5]/20 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-[#42A5F5] focus:outline-none transition-colors peer"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-4 -top-2.5 bg-[#1A1A1B] px-2 text-sm text-[#42A5F5] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-[#42A5F5]">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#2A2A2B]/50 border border-[#42A5F5]/20 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-[#42A5F5] focus:outline-none transition-colors peer"
                    placeholder="Your Email"
                  />
                  <label className="absolute left-4 -top-2.5 bg-[#1A1A1B] px-2 text-sm text-[#42A5F5] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-[#42A5F5]">
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#2A2A2B]/50 border border-[#42A5F5]/20 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-[#42A5F5] focus:outline-none transition-colors peer"
                  placeholder="Subject"
                />
                <label className="absolute left-4 -top-2.5 bg-[#1A1A1B] px-2 text-sm text-[#42A5F5] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-[#42A5F5]">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-[#2A2A2B]/50 border border-[#42A5F5]/20 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-[#42A5F5] focus:outline-none transition-colors peer resize-none"
                  placeholder="Your Message"
                />
                <label className="absolute left-4 -top-2.5 bg-[#1A1A1B] px-2 text-sm text-[#42A5F5] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-[#42A5F5]">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#42A5F5] to-[#0175C2] rounded-lg font-semibold hover:from-[#0175C2] hover:to-[#42A5F5] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-[#42A5F5]/10 border border-[#42A5F5]/20 rounded-lg">
              <p className="text-sm text-[#42A5F5] font-medium">💡 Pro Tip</p>
              <p className="text-sm text-gray-300 mt-1">
                Include details about your project timeline, budget, and
                specific requirements for a faster response!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
