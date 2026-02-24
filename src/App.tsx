// import AchievementsSection from "./pages/AchievementsSection"
// // import CoursesSection from "./pages/CoursesSection"
// // import FeaturesSection from "./pages/FeaturesSection"
// import CoursesSection from "./pages/CoursesSection"
// import Footer from "./pages/Footer"
// import HeroSection from "./pages/Hero"
// import Home from "./pages/Home"
// import LogoMarquee from "./pages/Logomarquee"
// import NoticesSection from "./pages/Noticessection"
// import StaffSection from "./pages/StaffSection"
// import TestimonialsSection from "./pages/Testimonialssection"
// import WhyChooseSection from "./pages/Whychoosesection"

// function App() {
//   return <>
//   <Home />
//   <HeroSection/>
//   <CoursesSection/>
//   <AchievementsSection/>
//   <WhyChooseSection/>
//   <TestimonialsSection/>
//       <StaffSection/>

//   <NoticesSection/>

//   <LogoMarquee/>
//   <Footer/>

  
//   </> 
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/layout/Layout";
import MainLayout from "./MainLayout";
import About from "../src/about/AboutHero";
import AppreciationSection from "./about/Appreciationsection";
import ContactUs from "./about/ContactUs";
import Registration from "./alliance/Registration";
import Affiliation from "./alliance/Affiliation";
import Accreditation from "./alliance/Accreditation";
import AllianceAppreciation from "./alliance/Appreciation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainLayout />} />
          <Route path="about" element={<About />} />
          <Route path="/appreaciations"  element={<AppreciationSection/>}/>
          <Route path="/appreciations" element={<AppreciationSection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/alliance/registration" element={<Registration />} />
          <Route path="/alliance/affiliation" element={<Affiliation />} />
          <Route path="/alliance/accreditation" element={<Accreditation />} />
          <Route path="/alliance/appreciation" element={<AllianceAppreciation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
