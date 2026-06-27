import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Palette, Search, Sparkles } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web Design",
    description:
      "Modern, user-friendly designs crafted to engage your audience and elevate your brand to the next level.",
    icon: <Palette className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
  },
  {
    title: "Front-End Development",
    description:
      "Responsive, performant websites built with the latest technologies, frameworks, and best practices.",
    icon: <Code className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
  },
  {
    title: "SEO Services",
    description:
      "Improve your search engine rankings and drive more organic traffic to your website with our SEO strategies.",
    icon: <Search className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
  },
  {
    title: "Branding",
    description:
      "Build a strong and memorable brand identity that resonates with your target audience and stands out.",
    icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
  },
];

const Services: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the parallax container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  // Background floating blobs
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="services" ref={targetRef} className="relative bg-blue-50/50 h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <motion.div style={{ y: bgY }} className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/60 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="pl-6 lg:pl-20 mb-8 md:mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Our Services</h2>
          <div className="h-1 w-16 bg-blue-600 rounded-full" />
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-6 lg:px-20 w-[350vw] sm:w-[250vw] lg:w-[200vw]">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[80vw] sm:w-[50vw] lg:w-[30vw] shrink-0 bg-white border border-gray-100 shadow-xl shadow-blue-900/5 p-8 md:p-12 rounded-[2rem] flex flex-col relative overflow-hidden group hover:border-blue-200 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="mb-6 md:mb-8 p-4 md:p-5 bg-blue-50 rounded-2xl w-fit group-hover:bg-white group-hover:shadow-sm transition-all duration-300 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed relative z-10">{service.description}</p>
              <div className="absolute top-6 right-8 text-7xl md:text-9xl font-black text-gray-50 opacity-50 group-hover:-translate-y-2 transition-transform duration-500 select-none pointer-events-none">
                0{index + 1}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
