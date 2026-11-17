import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { person } from './data/cv'

export default function App() {
  return (
    <>
      <a className="skip" href="#projects">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer wrap">
        <p>
          {person.name}. Built with Vite and React.
        </p>
      </footer>
    </>
  )
}