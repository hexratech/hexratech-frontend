import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hero from "../assets/hero.jpg";

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Dramatic scale-down + image parallax as you scroll away
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2.5rem"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[150vh]">
      {/* Sticky shrinking hero frame */}
      <motion.div
        className="sticky top-0 h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden origin-top"
        style={{ scale, borderRadius }}
      >
        {/* Background image moves at slower speed (parallax) */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: imageY,
            scale: 1.2,
          }}
        />

        {/* Blue-tinted overlay — matches brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/60 to-indigo-900/70 z-0" />

        {/* Content fades out as you scroll */}
        <motion.div className="relative z-10 max-w-4xl px-6" style={{ opacity }}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            We Design &amp; Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
              Exceptional Websites
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-blue-100 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafting digital experiences that inspire, engage, and grow your business.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
