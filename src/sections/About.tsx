import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import aboutImg from "../assets/about.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-white overflow-hidden text-gray-800">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left Block — Image with subtle float */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Rotated accent card behind image */}
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[2rem] -rotate-3 scale-105 -z-10 opacity-70" />
          <img
            src={aboutImg}
            alt="About HexraTech"
            className="rounded-[2rem] shadow-2xl w-full max-h-[50vh] md:max-h-[70vh] object-cover ring-1 ring-black/5 relative z-10"
          />
        </motion.div>

        {/* Right Block — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle subtitle="Who We Are" title="About HexraTech Agency" />
          
          <h3 className="mt-8 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            We build digital <span className="text-blue-600">experiences that matter.</span>
          </h3>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed font-light">
            At <span className="font-semibold text-gray-800">HexraTech</span>, we
            are a passionate team of developers and designers dedicated to
            crafting exceptional digital experiences. From stunning websites to
            strategic branding, we blend creativity and technology to help your
            business thrive in the digital era.
          </p>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed font-light">
            Based in Accra, Ghana, we proudly serve clients worldwide,
            delivering solutions that are not only visually appealing but also
            built with performance, engineering excellence, and scalable growth in mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
