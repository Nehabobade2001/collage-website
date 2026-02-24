import HeroSection from "./pages/Hero"
import CoursesSection from "./pages/CoursesSection"
import AchievementsSection from "./pages/AchievementsSection"
import WhyChooseSection from "./pages/Whychoosesection"
import TestimonialsSection from "./pages/Testimonialssection"
import StaffSection from "./pages/StaffSection"
import NoticesSection from "./pages/Noticessection"
import LogoMarquee from "./pages/Logomarquee"

export default function MainLayout() {
  return (
    <>
      <HeroSection/>
      <CoursesSection/>
      <AchievementsSection/>
      <WhyChooseSection/>
      <TestimonialsSection/>
      <StaffSection/>
      <NoticesSection/>
      <LogoMarquee/>
    </>
  )
}