// import Hero from "../components/Hero";
// import ServicesSection from "../components/ServicesSection";
// import WhyChooseUs from "../components/WhyChooseUs";
// import AboutUs from "../components/AboutUs";
// import CTASection from "../components/CTASection";
// import Technologies from "../components/Technologies";

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <AboutUs />
//       <ServicesSection />
//       <WhyChooseUs />
//       <Technologies />
//       <CTASection />
//     </>
//   );
// };

// export default Home;



import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import ServicesSection from "../components/ServicesSection";
import StatsCounter from "../components/StatsCounter";
import WhyChooseUs from "../components/WhyChooseUs";
import CaseStudies from "../components/CaseStudies";
import Industries from "../components/Industries";
import Technologies from "../components/Technologies";
// import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import DirectorMessage from "../components/DirectorMessage";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServicesSection />
      <StatsCounter />
      <WhyChooseUs />
      <CaseStudies />
      <Industries />
      <Technologies />
      {/* <Testimonials /> */}
      <FAQ />
        <DirectorMessage />
      <CTASection />
    </>
  );
};

export default Home;