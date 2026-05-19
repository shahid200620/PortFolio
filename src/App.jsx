import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import StarBackground from './components/StarBackground'
import LightBackground from './components/LightBackground'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  const lightStyle = {
    background: 'linear-gradient(160deg, #FFDBBB 0%, #CCBEB1 40%, #997E67 80%, #664930 100%)',
    color: '#1f2937',
  }

  const darkStyle = {
    background: '#080808',
    color: '#ffffff',
  }

  return (
    <div style={{ position:'relative', minHeight:'100vh', overflowX:'clip', ...(isDark ? darkStyle : lightStyle), transition:'background 0.4s, color 0.4s' }}>
      {isDark ? <StarBackground theme={theme} /> : <LightBackground />}
      <CustomCursor theme={theme} />
      <div style={{ position:'relative', zIndex:1 }}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  )
}