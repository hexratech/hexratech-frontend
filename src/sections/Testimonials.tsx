import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const testimonials = [
  {
    name: "Kwame Mensah",
    company: "TechHub Africa",
    text: "HexraTech completely transformed our online presence. Their attention to detail and commitment to quality is unmatched.",
  },
  {
    name: "Sarah Osei",
    company: "Bloom Boutique",
    text: "Working with them was a breeze. They understood our vision perfectly and delivered a stunning, high-performing website.",
  },
  {
    name: "David Amponsah",
    company: "FinCorp Solutions",
    text: "Professional, responsive, and incredibly talented. They exceeded our expectations in every way.",
  },
  {
    name: "Amina Yeboah",
    company: "Creative Studio",
    text: "The web experiences they brought to our site helped us double our client inquiries in a month.",
  }
];

const Testimonials: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the parallax container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="testimonials" ref={targetRef} className="relative bg-gray-50 h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <motion.div style={{ y: bgY }} className="absolute top-10 md:top-20 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-10 left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-indigo-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="pl-6 lg:pl-20 mb-8 md:mb-12">
          <SectionTitle subtitle="Client Feedback" title="What They Say About Us" />
          <p className="mt-3 md:mt-4 text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-xl">
            Don't just take our word for it. Here is what some of our amazing clients have to say about working with us.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-6 lg:px-20 w-[350vw] sm:w-[250vw] lg:w-[200vw]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[80vw] sm:w-[50vw] lg:w-[35vw] shrink-0 bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-100 hover:border-blue-100 hover:shadow-[0_12px_40px_rgb(59,130,246,0.10)] transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-2 md:top-4 right-6 md:right-8 text-7xl md:text-9xl text-blue-50 font-serif leading-none select-none pointer-events-none">"</div>

              <p className="text-gray-600 italic mb-8 md:mb-10 leading-relaxed font-light text-base md:text-xl relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 md:gap-5 mt-auto relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg md:text-xl border border-blue-100">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base md:text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium text-sm md:text-base">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
