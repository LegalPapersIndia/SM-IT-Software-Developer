

// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/itlogo1.png";
// import { FaChevronDown } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdown, setIsDropdown] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(false); // ✅ mobile fix
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("software");

//   const dropdownRef = useRef();

//   // Scroll Effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={logo}
//             alt="Logo"
//             className={`${scrolled ? "h-10" : "h-14"} transition`}
//           />
//           <span className="font-bold text-lg text-white -ml-2">
//             SM IT Software Developer 
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul
//           className={`hidden md:flex space-x-8 font-medium ${
//             scrolled ? "text-gray-300" : "text-white"
//           }`}
//         >
//           <li>
//             <Link to="/" className="hover:text-blue-400">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-blue-400">
//               About Us
//             </Link>
//           </li>

//           {/* DROPDOWN */}
//           <li className="relative" ref={dropdownRef}>
//             <div
//               className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
//               onClick={() => setIsDropdown(!isDropdown)}
//             >
//               <Link to="/services">Services</Link>
//               <FaChevronDown
//                 className={`text-xs transition ${
//                   isDropdown ? "rotate-180" : ""
//                 }`}
//               />
//             </div>

//             {isDropdown && (
//               <div className="absolute left-0 top-full mt-2 w-72 bg-gray-900 text-gray-300 rounded-lg shadow-lg border border-white/10 flex">
//                 {/* LEFT SIDE */}
//                 <div className="w-1/2 border-r border-white/10">
//                   {[
//                     {
//                       key: "software",
//                       label: "Software Development",
//                       link: "/services/software",
//                     },
//                     {
//                       key: "cloud",
//                       label: "Cloud Solutions",
//                       link: "/services/cloud",
//                     },
//                     {
//                       key: "security",
//                       label: "Cybersecurity",
//                       link: "/services/security",
//                     },
//                     {
//                       key: "ai",
//                       label: "AI & Automation",
//                       link: "/services/ai",
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.key}
//                       className={`text-sm px-4 py-2 cursor-pointer hover:bg-blue-800/20 ${
//                         active === item.key ? "bg-blue-800/20" : ""
//                       }`}
//                       onMouseEnter={() => setActive(item.key)}
//                     >
//                       <Link to={item.link}>{item.label}</Link>
//                     </div>
//                   ))}
//                 </div>

//                 {/* RIGHT SIDE */}
//                 <div className="w-1/2 p-2 text-sm">
//                   {active === "software" && (
//                     <>
//                       <Link
//                         to="/services/web-dev"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Web Development
//                       </Link>
//                       <Link
//                         to="/services/app-dev"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         App Development
//                       </Link>
//                       <Link
//                         to="/services/custom-software"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Custom Software
//                       </Link>
//                       <Link
//                         to="/services/uiux"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         UI/UX Design
//                       </Link>
//                     </>
//                   )}

//                   {active === "cloud" && (
//                     <>
//                       <Link
//                         to="/services/aws"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         AWS
//                       </Link>
//                       <Link
//                         to="/services/azure"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Azure
//                       </Link>
//                       <Link
//                         to="/services/cloud-migration"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Cloud Migration
//                       </Link>
//                       <Link
//                         to="/services/devops"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         DevOps
//                       </Link>
//                     </>
//                   )}

//                   {active === "security" && (
//                     <>
//                       <Link
//                         to="/services/network-security"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Network Security
//                       </Link>
//                       <Link
//                         to="/services/data-protection"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Data Protection
//                       </Link>
//                       <Link
//                         to="/services/ethical-hacking"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Ethical Hacking
//                       </Link>
//                       <Link
//                         to="/services/security-audit"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Security Audit
//                       </Link>
//                     </>
//                   )}

//                   {active === "ai" && (
//                     <>
//                       <Link
//                         to="/services/chatbots"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Chatbots
//                       </Link>
//                       <Link
//                         to="/services/ml"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         Machine Learning
//                       </Link>
//                       <Link
//                         to="/services/rpa"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         RPA
//                       </Link>
//                       <Link
//                         to="/services/ai-analytics"
//                         className="block px-3 py-1 hover:bg-blue-800/20"
//                       >
//                         AI Analytics
//                       </Link>
//                     </>
//                   )}
//                 </div>
//               </div>
//             )}
//           </li>

//           <li>
//             <Link to="/portfolio" className="hover:text-blue-400">
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-blue-400">
//               Contact Us
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Button */}
//         <button
//           className={`md:hidden ${scrolled ? "text-blue-400" : "text-white"}`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-900 text-gray-300 px-6 py-5 flex flex-col space-y-4 h-[calc(100vh-70px)] overflow-y-auto">
//           <Link to="/" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//           <Link to="/about" onClick={() => setIsOpen(false)}>
//             About Us
//           </Link>

//           {/* MOBILE DROPDOWN */}
//           {/* MOBILE DROPDOWN */}
//           <div>
//             <p
//               className="flex justify-between cursor-pointer"
//               onClick={() => setMobileDropdown(!mobileDropdown)}
//             >
//               Services <FaChevronDown />
//             </p>

//             {mobileDropdown && (
//               <div className="mt-2 flex flex-col text-sm space-y-2">
//                 {/* Software */}
//                 <Link
//                   to="/services/software"
//                   className="font-semibold"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   Software Development
//                 </Link>
//                 <Link
//                   to="/services/web-dev"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Web Development
//                 </Link>
//                 <Link
//                   to="/services/app-dev"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - App Development
//                 </Link>
//                 <Link
//                   to="/services/custom-software"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Custom Software
//                 </Link>
//                 <Link
//                   to="/services/uiux"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - UI/UX Design
//                 </Link>

//                 {/* Cloud */}
//                 <Link
//                   to="/services/cloud"
//                   className="font-semibold mt-2"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   Cloud Solutions
//                 </Link>
//                 <Link
//                   to="/services/aws"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - AWS
//                 </Link>
//                 <Link
//                   to="/services/azure"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Azure
//                 </Link>
//                 <Link
//                   to="/services/cloud-migration"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Cloud Migration
//                 </Link>
//                 <Link
//                   to="/services/devops"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - DevOps
//                 </Link>

//                 {/* Security */}
//                 <Link
//                   to="/services/security"
//                   className="font-semibold mt-2"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   Cybersecurity
//                 </Link>
//                 <Link
//                   to="/services/network-security"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Network Security
//                 </Link>
//                 <Link
//                   to="/services/data-protection"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Data Protection
//                 </Link>
//                 <Link
//                   to="/services/ethical-hacking"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Ethical Hacking
//                 </Link>
//                 <Link
//                   to="/services/security-audit"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Security Audit
//                 </Link>

//                 {/* AI */}
//                 <Link
//                   to="/services/ai"
//                   className="font-semibold mt-2"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   AI & Automation
//                 </Link>
//                 <Link
//                   to="/services/chatbots"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Chatbots
//                 </Link>
//                 <Link
//                   to="/services/ml"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - Machine Learning
//                 </Link>
//                 <Link
//                   to="/services/rpa"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - RPA
//                 </Link>
//                 <Link
//                   to="/services/ai-analytics"
//                   className="pl-3"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setMobileDropdown(false);
//                   }}
//                 >
//                   - AI Analytics
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link to="/portfolio" onClick={() => setIsOpen(false)}>
//             Portfolio
//           </Link>
//           <Link to="/contact" onClick={() => setIsOpen(false)}>
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sm-it-logo.png";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false); // ✅ mobile fix
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("software");

  const dropdownRef = useRef();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
       {/* Logo */}
{/* Logo */}
<Link to="/" className="flex items-center gap-2 sm:gap-3">
  <div className="bg-white rounded-lg px-1.5 py-1 sm:px-2 sm:py-1 shadow-md">
    <img
      src={logo}
      alt="SM IT Software and Solutions"
      className={`${
        scrolled ? "h-6 sm:h-7" : "h-7 sm:h-9"
      } w-auto object-contain transition-all duration-300`}
    />
  </div>
  <span
    className={`hidden sm:inline font-serif text-lg md:text-xl font-semibold tracking-wide ${
      scrolled ? "text-gray-200" : "text-white"
    }`}
  >
    IT Software <span className="text-blue-400">&</span> Solutions
  </span>
</Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 font-medium ${
            scrolled ? "text-gray-300" : "text-white"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About Us
            </Link>
          </li>

          {/* DROPDOWN */}
          <li className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
              onClick={() => setIsDropdown(!isDropdown)}
            >
              <Link to="/services">Services</Link>
              <FaChevronDown
                className={`text-xs transition ${
                  isDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDropdown && (
              <div className="absolute left-0 top-full mt-2 w-72 bg-gray-900 text-gray-300 rounded-lg shadow-lg border border-white/10 flex">
                {/* LEFT SIDE */}
                <div className="w-1/2 border-r border-white/10">
                  {[
                    {
                      key: "software",
                      label: "Software Development",
                      link: "/services/software",
                    },
                    {
                      key: "cloud",
                      label: "Cloud Solutions",
                      link: "/services/cloud",
                    },
                    {
                      key: "security",
                      label: "Cybersecurity",
                      link: "/services/security",
                    },
                    {
                      key: "ai",
                      label: "AI & Automation",
                      link: "/services/ai",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className={`text-sm px-4 py-2 cursor-pointer hover:bg-blue-800/20 ${
                        active === item.key ? "bg-blue-800/20" : ""
                      }`}
                      onMouseEnter={() => setActive(item.key)}
                    >
                      <Link to={item.link}>{item.label}</Link>
                    </div>
                  ))}
                </div>

                {/* RIGHT SIDE */}
                <div className="w-1/2 p-2 text-sm">
                  {active === "software" && (
                    <>
                      <Link
                        to="/services/web-dev"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/services/app-dev"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        App Development
                      </Link>
                      <Link
                        to="/services/custom-software"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Custom Software
                      </Link>
                      <Link
                        to="/services/uiux"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        UI/UX Design
                      </Link>
                    </>
                  )}

                  {active === "cloud" && (
                    <>
                      <Link
                        to="/services/aws"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        AWS
                      </Link>
                      <Link
                        to="/services/azure"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Azure
                      </Link>
                      <Link
                        to="/services/cloud-migration"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Cloud Migration
                      </Link>
                      <Link
                        to="/services/devops"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        DevOps
                      </Link>
                    </>
                  )}

                  {active === "security" && (
                    <>
                      <Link
                        to="/services/network-security"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Network Security
                      </Link>
                      <Link
                        to="/services/data-protection"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Data Protection
                      </Link>
                      <Link
                        to="/services/ethical-hacking"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Ethical Hacking
                      </Link>
                      <Link
                        to="/services/security-audit"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Security Audit
                      </Link>
                    </>
                  )}

                  {active === "ai" && (
                    <>
                      <Link
                        to="/services/chatbots"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Chatbots
                      </Link>
                      <Link
                        to="/services/ml"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        Machine Learning
                      </Link>
                      <Link
                        to="/services/rpa"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        RPA
                      </Link>
                      <Link
                        to="/services/ai-analytics"
                        className="block px-3 py-1 hover:bg-blue-800/20"
                      >
                        AI Analytics
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/portfolio" className="hover:text-blue-400">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className={`md:hidden ${scrolled ? "text-blue-400" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-gray-300 px-6 py-5 flex flex-col space-y-4 h-[calc(100vh-70px)] overflow-y-auto">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          {/* MOBILE DROPDOWN */}
          <div>
            <p
              className="flex justify-between cursor-pointer"
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Services <FaChevronDown />
            </p>

            {mobileDropdown && (
              <div className="mt-2 flex flex-col text-sm space-y-2">
                {/* Software */}
                <Link
                  to="/services/software"
                  className="font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  Software Development
                </Link>
                <Link
                  to="/services/web-dev"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Web Development
                </Link>
                <Link
                  to="/services/app-dev"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - App Development
                </Link>
                <Link
                  to="/services/custom-software"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Custom Software
                </Link>
                <Link
                  to="/services/uiux"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - UI/UX Design
                </Link>

                {/* Cloud */}
                <Link
                  to="/services/cloud"
                  className="font-semibold mt-2"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  Cloud Solutions
                </Link>
                <Link
                  to="/services/aws"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - AWS
                </Link>
                <Link
                  to="/services/azure"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Azure
                </Link>
                <Link
                  to="/services/cloud-migration"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Cloud Migration
                </Link>
                <Link
                  to="/services/devops"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - DevOps
                </Link>

                {/* Security */}
                <Link
                  to="/services/security"
                  className="font-semibold mt-2"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  Cybersecurity
                </Link>
                <Link
                  to="/services/network-security"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Network Security
                </Link>
                <Link
                  to="/services/data-protection"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Data Protection
                </Link>
                <Link
                  to="/services/ethical-hacking"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Ethical Hacking
                </Link>
                <Link
                  to="/services/security-audit"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Security Audit
                </Link>

                {/* AI */}
                <Link
                  to="/services/ai"
                  className="font-semibold mt-2"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  AI & Automation
                </Link>
                <Link
                  to="/services/chatbots"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Chatbots
                </Link>
                <Link
                  to="/services/ml"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - Machine Learning
                </Link>
                <Link
                  to="/services/rpa"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - RPA
                </Link>
                <Link
                  to="/services/ai-analytics"
                  className="pl-3"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  - AI Analytics
                </Link>
              </div>
            )}
          </div>

          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;