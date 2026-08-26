import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


import Software from "./pages/services/Software";
import Cloud from "./pages/services/Cloud";
import Security from "./pages/services/Security";
import AI from "./pages/services/AI";
import WebDevelopment from "./pages/services/software/WebDevelopment";
import AppDevelopment from "./pages/services/software/AppDevelopment";
import CustomSoftware from "./pages/services/software/CustomSoftware";
import UIUX from "./pages/services/software/UIUX";
import AWS from "./pages/services/cloud/Aws";
import Azure from "./pages/services/cloud/Azure";
import CloudMigration from "./pages/services/cloud/CloudMigration";
import DevOps from "./pages/services/cloud/DevOps";
import NetworkSecurity from "./pages/services/cybersecurity/NetworkSecurity";
import DataProtection from "./pages/services/cybersecurity/DataProtection";
import EthicalHacking from "./pages/services/cybersecurity/EthicalHacking";
import SecurityAudit from "./pages/services/cybersecurity/SecurityAudit";
import Chatbots from "./pages/services/ai/Chatbots";
import ML from "./pages/services/ai/ML";
import RPA from "./pages/services/ai/RPA";
import AIAnalytics from "./pages/services/ai/AIAnalytics";


function App() {
  return (
    <BrowserRouter>
      {/* Full height container */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content will expand */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

            
            <Route path="/services/software" element={<Software />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/services/ai" element={<AI />} />
            <Route path="/services/web-dev" element={<WebDevelopment />} />
            <Route path="/services/app-dev" element={<AppDevelopment />} />
            <Route
              path="/services/custom-software"
              element={<CustomSoftware />}
            />
            <Route path="/services/uiux" element={<UIUX />} />
            <Route path="/services/aws" element={<AWS />} />
            <Route path="/services/azure" element={<Azure />} />
            <Route
              path="/services/cloud-migration"
              element={<CloudMigration />}
            />
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/network-security" element={<NetworkSecurity />} />
            <Route path="/services/data-protection" element={<DataProtection />} />
            <Route path="/services/ethical-hacking" element={<EthicalHacking />} />
            <Route path="/services/security-audit" element={<SecurityAudit />} />
            <Route path="/services/chatbots" element={<Chatbots />} />
            <Route path="/services/ml" element={<ML />} />
            <Route path="/services/rpa" element={<RPA />} />
            <Route path="/services/ai-analytics" element={<AIAnalytics />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
