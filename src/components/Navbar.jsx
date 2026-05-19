import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

function Sparkle({ x, y, color }) {
  return (
    <motion.div
      initial={{ scale:0, opacity:1 }}
      animate={{ scale:[0,1,0], opacity:[1,1,0], y:[-0,y], x:[0,x] }}
      transition={{ duration:0.8, ease:'easeOut' }}
      style={{ position:'absolute', width:'6px', height:'6px', borderRadius:'50%', background:color, pointerEvents:'none', zIndex:100 }}
    />
  )
}

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const triggerSparkles = () => {
    const colors = ['#3b82f6','#a78bfa','#f472b6','#34d399','#fbbf24']
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 60,
      y: -(Math.random() * 40 + 10),
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setSparkles(newSparkles)
    setTimeout(() => setSparkles([]), 900)
  }

  const navLinks = [
    { label:'Home', href:'#home' },
    { label:'About', href:'#about' },
    { label:'Skills', href:'#skills' },
    { label:'Projects', href:'#projects' },
    { label:'Contact', href:'#contact' },
  ]

  const isDark = theme === 'dark'
  const bgColor = scrolled ? (isDark ? 'rgba(8,8,8,0.92)' : 'rgba(255,219,187,0.97)') : 'transparent'
  const textColor = isDark ? '#9ca3af' : '#2C1A1C'
  const hoverColor = isDark ? '#fff' : '#16233B'
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'

  return (
    <header style={{ position:'fixed', top:0, left:0, width:'100%', zIndex:50, transition:'all 0.3s', backgroundColor:bgColor, backdropFilter:scrolled?'blur(12px)':'none', borderBottom:scrolled?'1px solid '+borderColor:'none' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(24px,5vw,80px)', width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', height:'64px' }}>

        <div style={{ position:'relative', display:'inline-block' }}>
          {sparkles.map(s => <Sparkle key={s.id} x={s.x} y={s.y} color={s.color} />)}
          <motion.a
            href='#home'
            onMouseEnter={triggerSparkles}
            whileHover={{ scale:1.05 }}
            style={{ fontSize:'20px', fontWeight:800, fontFamily:'Syne,sans-serif', textDecoration:'none', color: isDark?'#fff':'#16233B', display:'block' }}
          >
            Shahid<span style={{ color:'#3b82f6' }}>.</span>
          </motion.a>
        </div>

        <nav style={{ display:'flex', alignItems:'center', gap:'28px' }} className='hidden-mobile'>
          {navLinks.map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y:-2 }}
              style={{ fontSize:'14px', color:textColor, textDecoration:'none', fontWeight:500, transition:'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = hoverColor}
              onMouseLeave={e => e.target.style.color = textColor}
            >{link.label}</motion.a>
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <motion.a
            href='mailto:mdshahidalikhan20@gmail.com'
            whileHover={{ scale:1.05 }}
            style={{ fontSize:'13px', padding:'8px 20px', border:'1px solid #3b82f6', color:'#3b82f6', borderRadius:'999px', textDecoration:'none' }}
          >Hire Me</motion.a>
        </nav>

        <div style={{ display:'flex', alignItems:'center', gap:'12px' }} className='show-mobile'>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button style={{ background:'none', border:'none', color:isDark?'#fff':'#1f2937', fontSize:'24px' }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor:isDark?'#0f0f0f':'#fff8f0', borderTop:'1px solid '+borderColor, padding:'20px clamp(24px,5vw,80px)', display:'flex', flexDirection:'column', gap:'16px' }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{ color: isDark?'#e5e7eb':'#1f2937', textDecoration:'none', fontSize:'15px' }}>{link.label}</a>
          ))}
          <a href='mailto:mdshahidalikhan20@gmail.com' onClick={() => setMenuOpen(false)} style={{ fontSize:'13px', padding:'8px 20px', border:'1px solid #3b82f6', color:'#3b82f6', borderRadius:'999px', textDecoration:'none', textAlign:'center' }}>Hire Me</a>
        </div>
      )}
    </header>
  )
}