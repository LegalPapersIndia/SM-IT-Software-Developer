import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import CTASection from "../components/CTASection";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUs />
      <Technologies />
      <CTASection />
    </>
  );
};

export default Home;
