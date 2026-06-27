import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    icon: ReactNode;
    link: string;
  }[];
}

const team: TeamMember[] = [
  {
    name: "Agyemang Arnold",
    role: "Lead Developer",
    image: "/assets/team1.jpg",
    socials: [
      { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/arnold-agyemang-718067205/" },
    ],
  },
  {
    name: "Siaw Albert",
    role: "Design Lead",
    image: "/assets/team2.jpg",
    socials: [
      { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/albert-siaw-55451733a/" },
    ],
  },
];

const Team: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]); // Stagger effect

  return (
    <section id="team" ref={ref} className="bg-[#050505] text-white py-32 lg:py-48 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-6">Meet Our Team</h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
              The People<br/><span className="text-gray-600">Behind It All</span>
            </h3>
          </div>
          <p className="mt-8 md:mt-0 text-gray-400 text-xl font-light max-w-sm leading-relaxed tracking-tight">
            Dedicated to bringing your ideas to life with strict engineering and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className="group relative"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-white/5 mb-8 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=050505&color=ffffff&size=512`;
                  }}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-medium tracking-tight mb-2">{member.name}</h3>
                  <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">{member.role}</p>
                </div>
                <div className="flex gap-4">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
