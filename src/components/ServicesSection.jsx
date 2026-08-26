import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const services = [
  {
    title: "Software Development",
    desc: "Scalable and secure applications tailored to your business needs.",
    image: "/services/software.jpg",
  },
  {
    title: "Cloud Solutions",
    desc: "Reliable cloud infrastructure for seamless storage & operations.",
    image: "/services/cloud.jpg",
  },
  {
    title: "Cybersecurity Services",
    desc: "Protect your business with advanced security measures.",
    image: "/services/security.jpg",
  },
  {
    title: "AI & Automation",
    desc: "Intelligent systems to streamline business processes.",
    image: "/services/ai.jpg",
  },
  {
    title: "IT Consulting",
    desc: "Expert guidance to navigate the evolving tech landscape.",
    image: "/services/consulting.jpg",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Build and scale high-performing online stores.",
    image: "/services/ecommerce.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-2xl">
            We provide end-to-end IT services to help businesses innovate,
            scale, and stay secure in the digital era.
          </p>
        </div>

        {/* 🔥 Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          speed={1000} // smooth motion
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                {/* Image Card */}
                <div className="overflow-hidden group rounded-md shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover transform transition duration-500 ease-in-out group-hover:scale-95"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3 text-1.5xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
