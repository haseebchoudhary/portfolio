import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { person } from './data/cv'

const PHOTO_CREDIT =
  'Photo by Jan Kahánek, CC0, via Wikimedia Commons (https://commons.wikimedia.org/wiki/File:Tabel_day_1_(Unsplash).jpg)'

export default function App() {
  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer wrap">
        <p>
          {person.name}. Built with Vite and React.
        </p>
        <p className="footer__credits">{PHOTO_CREDIT}</p>
      </footer>
    </>
  )
}
