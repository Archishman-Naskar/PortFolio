import NavBarMain from './components/navbar/NavBarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillMain from './components/skillsSection/SkillMain'
import SubSkills from './components/skillsSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectMain from './components/projectsSection/ProjectMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'
function App() {
  

  return (
    <main className="font-body mb-10">
      <NavBarMain/>
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillMain />
      <SubSkills />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
      <HelperSection />
    </main>
  )
}

export default App
