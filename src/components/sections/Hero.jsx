import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEye } from 'react-icons/fa'
import resumeImg from '../../assets/Resume.png'

function ResumePreview() {
  return (
    <motion.div
      initial={{ opacity:0, y:10, scale:0.92 }}
      animate={{ opacity:1, y:0, scale:1 }}
      exit={{ opacity:0, y:10, scale:0.92 }}
      transition={{ duration:0.2 }}
      style={{ position:'absolute', bottom:'115%', left:'50%', transform:'translateX(-50%)', width:'200px', borderRadius:'12px', border:'2px solid rgba(139,92,246,0.7)', boxShadow:'0 0 40px rgba(139,92,246,0.5), 0 0 80px rgba(59,130,246,0.2)', overflow:'hidden', zIndex:100, pointerEvents:'none', background:'linear-gradient(135deg,#0f172a,#1e1b4b,#3b0764)', backdropFilter:'blur(10px)' }}
    >
      <img src={resumeImg} alt='Resume Preview' style={{ width:'100%', display:'block', opacity:0.92, mixBlendMode:'luminosity' }} />
      <div style={{ padding:'8px 10px', background:'linear-gradient(to right,#1e1b4b,#3b0764)', borderTop:'1px solid rgba(139,92,246,0.4)' }}>
        <p style={{ color:'#c4b5fd', fontSize:'9px', textAlign:'center', fontFamily:'Orbitron,sans-serif', fontWeight:600, letterSpacing:'0.05em' }}>Mohammed Shahid Ali Khan</p>
      </div>
    </motion.div>
  )
}

export default function Hero({ theme }) {
  const isDark = theme === 'dark'
  const roles = ['Data Scientist', 'ML Engineer', 'Full Stack Developer']
  const resumeView = 'https://drive.google.com/file/d/1GGDJ_kIqlIIB68vUoxco8m3noRFHuNZz/view'
  const [showResume, setShowResume] = useState(false)

  const nameDark = isDark ? '#ffffff' : '#000000'
  const mutedTxt = isDark ? '#9ca3af' : '#374151'
  const badgeBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
  const badgeBorder = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.15)'
  const btnBorder = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'

  return (
    <section id='home' style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'80px clamp(24px,5vw,80px) 40px', zIndex:1 }}>
      <div style={{ position:'absolute', top:'25%', left:'15%', width:'280px', height:'280px', background: isDark?'rgba(59,130,246,0.07)':'rgba(255,140,0,0.07)', borderRadius:'50%', filter:'blur(70px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'20%', right:'15%', width:'240px', height:'240px', background: isDark?'rgba(139,92,246,0.07)':'rgba(255,80,120,0.07)', borderRadius:'50%', filter:'blur(70px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'800px', width:'100%', textAlign:'center', position:'relative', zIndex:1 }}>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
          style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'7px 18px', borderRadius:'999px', border:'1px solid rgba(59,130,246,0.35)', background:'rgba(59,130,246,0.1)', color:'#60a5fa', fontSize:'13px', marginBottom:'28px', fontFamily:'Inter,sans-serif' }}>
          <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#60a5fa', display:'inline-block', animation:'pulse 2s infinite' }} />
          Open to opportunities
        </motion.div>

        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.2 }}
          style={{ fontSize:'clamp(2rem,6vw,4.2rem)', fontWeight:800, lineHeight:1.2, marginBottom:'24px', fontFamily:'Orbitron,sans-serif', wordBreak:'keep-all', color:nameDark }}>
          <span style={{ color: isDark?'#ffffff':'#2C1A1C' }}>Mohammed </span>
          <span style={{ background:'linear-gradient(to right,#3b82f6,#8b5cf6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Shahid </span>
          <span style={{ color: isDark?'#ffffff':'#2C1A1C' }}>Ali Khan</span>
        </motion.h1>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.35 }}
          style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'10px', marginBottom:'20px' }}>
          {roles.map((role,i) => (
            <span key={i} style={{ padding:'7px 18px', borderRadius:'999px', background: isDark?badgeBg:'rgba(255,219,187,0.5)', border: isDark?'1px solid '+badgeBorder:'1px solid rgba(153,126,103,0.4)', color: isDark?'#d1d5db':'#664930', fontSize:'13px', fontFamily:'Inter,sans-serif' }}>{role}</span>
          ))}
        </motion.div>

        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.45 }}
          style={{ color: isDark?'#9ca3af':'#1F1F2E', fontSize:'clamp(0.95rem,2vw,1.1rem)', lineHeight:1.8, maxWidth:'560px', margin:'0 auto 32px', fontFamily:'Inter,sans-serif' }}>
          I build intelligent systems and sleek web experiences — from training ML models to shipping full-stack apps. I turn complex problems into clean, working solutions.
        </motion.p>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.55 }}
          style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'12px', marginBottom:'28px' }}>
          <a href='#projects' style={{ padding:'11px 26px', background: isDark?'linear-gradient(135deg,#1d4ed8,#5b21b6)':'#2563eb', color:'#fff', borderRadius:'999px', fontSize:'14px', fontWeight:600, textDecoration:'none', fontFamily:'Inter,sans-serif', boxShadow: isDark?'0 0 20px rgba(29,78,216,0.4)':'none', transition:'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow= isDark?'0 0 30px rgba(94,234,212,0.4)':'0 6px 20px rgba(37,99,235,0.4)' }} onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow= isDark?'0 0 20px rgba(29,78,216,0.4)':'none' }}>View My Work</a>
          <a href='#contact' style={{ padding:'11px 26px', border:'1px solid '+btnBorder, color: isDark?'#d1d5db':'#1f2937', borderRadius:'999px', fontSize:'14px', fontWeight:500, textDecoration:'none', fontFamily:'Inter,sans-serif' }}>Get In Touch</a>
          <div style={{ position:'relative' }} onMouseEnter={() => setShowResume(true)} onMouseLeave={() => setShowResume(false)}>
            <AnimatePresence>{showResume && <ResumePreview />}</AnimatePresence>
            <a href={resumeView} target='_blank' rel='noreferrer'
              style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'11px 22px', borderRadius:'999px', background: isDark?'rgba(255,255,255,0.04)':'rgba(0,0,0,0.04)', border:'1px solid rgba(139,92,246,0.4)', color: isDark?'#d1d5db':'#1f2937', fontSize:'14px', textDecoration:'none', fontFamily:'Inter,sans-serif' }}>
              <FaEye /> View Resume
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.7, delay:0.7 }}
          style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'24px', marginBottom:'60px' }}>
          <a href='https://github.com/shahid200620' target='_blank' rel='noreferrer' style={{ color: isDark?'#9ca3af':'#000000', fontSize:'22px', textDecoration:'none' }}><FaGithub /></a>
          <a href='https://www.linkedin.com/in/md-shahidkhan/' target='_blank' rel='noreferrer' style={{ color: isDark?'#9ca3af':'#000000', fontSize:'22px', textDecoration:'none' }}><FaLinkedin /></a>
          <a href='mailto:mdshahidalikhan20@gmail.com' style={{ color: isDark?'#9ca3af':'#000000', fontSize:'13px', textDecoration:'none', fontFamily:'Inter,sans-serif' }}>mdshahidalikhan20@gmail.com</a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:1.2 }}
        style={{ position:'absolute', bottom:'16px', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'4px', color: isDark?'#9ca3af':'#000000', zIndex:2 }}>
        <span style={{ fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', fontFamily:'Inter,sans-serif' }}>Scroll</span>
        <HiArrowDown style={{ fontSize:'16px', animation:'bounce 2s infinite' }} />
      </motion.div>
    </section>
  )
}