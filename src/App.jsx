import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import GithubActivity from './components/GithubActivity'
import Contact from './components/Contact'
import { person } from './data/cv'

export default function App() {
  const barRef = useRef(null)

  // Reading progress rule along the top edge.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? window.scrollY / max : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${Math.min(1, ratio).toFixed(3)})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <div className="progress" aria-hidden="true">
        <div className="progress__bar" ref={barRef} />
      </div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <GithubActivity />
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
