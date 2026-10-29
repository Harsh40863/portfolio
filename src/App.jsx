import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <div className="pipeline-vertical" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
