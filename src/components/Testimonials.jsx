import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";

// PLACEHOLDER — replace with real client reviews once available
const testimonials = [
  {
    quote:
      "They understood our requirements from day one and delivered exactly what we needed, on time and without surprises.",
    name: "Client Name",
    role: "Founder, Company Name",
  },
  {
    quote:
      "Great communication throughout the project. The team stayed responsive even after launch for support and fixes.",
    name: "Client Name",
    role: "Director, Company Name",
  },
  {
    quote:
      "Solid technical expertise and a genuinely collaborative process. Would work with them again on our next project.",
    name: "Client Name",
    role: "CEO, Company Name",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h4 className="text-blue-400 uppercase tracking-[0.4em] font-bold text-lg mb-4">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold font-black leading-tight">
            What Our Clients <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          modules={[Autoplay]}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40">
                <FaQuoteLeft className="text-blue-400 text-2xl mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;