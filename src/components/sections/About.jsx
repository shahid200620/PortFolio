import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import photo from '../../assets/photo.jpeg'

export default function About({ theme }) {
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const stats = [
    { number: '25+', label: 'Projects Built' },
    { number: '15+', label: 'Skills Mastered' },
    { number: '3+', label: 'Domains Covered' },
  ]

  return (
    <section id='about' style={{ position:'relative', zIndex:1, width:'100%', padding:'96px 0' }}>
      <div ref={ref} style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(24px,5vw,80px)', width:'100%' }}>

        <motion.div initial={{ opacity:0, y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} style={{ marginBottom:'56px' }}>
          <span style={{ color:'#3b82f6', fontSize:'12px', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase' }}>About Me</span>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:800, marginTop:'10px', background:'linear-gradient(to right,#22d3ee,#3b82f6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontFamily:'Orbitron,sans-serif', ...(isDark?{}:{WebkitTextFillColor:'#000080', backgroundClip:'unset', background:'none', color:'#000080'}) }}>Who I Am</h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'56px', alignItems:'center', marginBottom:'64px' }}>
          <motion.div initial={{ opacity:0, x:-40 }} animate={isInView?{opacity:1,x:0}:{}} transition={{ duration:0.8, delay:0.15 }}>
            <div style={{ maxWidth:'340px', margin:'0 auto', position:'relative' }}>
              <img src={photo} alt='Mohammed Shahid Ali Khan' style={{ width:'100%', borderRadius:'20px', border:'1px solid rgba(255,255,255,0.1)', objectFit:'cover', display:'block' }} />
              <div style={{ position:'absolute', bottom:'-16px', right:'-16px', width:'80px', height:'80px', borderRadius:'50%', background:'rgba(59,130,246,0.25)', filter:'blur(24px)' }} />
              <div style={{ position:'absolute', top:'-16px', left:'-16px', width:'60px', height:'60px', borderRadius:'50%', background:'rgba(139,92,246,0.25)', filter:'blur(20px)' }} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:40 }} animate={isInView?{opacity:1,x:0}:{}} transition={{ duration:0.8, delay:0.2 }} style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
            <p style={{ color: isDark?'#e5e7eb':'#2C1A1C', fontSize:'18px', lineHeight:1.8 }}>Hey, I am Shahid — a developer at the intersection of data science and web engineering. I enjoy building things that are both smart and beautiful.</p>
            <p style={{ color: isDark?'#9ca3af':'#1F1F2E', lineHeight:1.8 }}>I work with Python for ML pipelines — from data preprocessing and feature engineering to training and deploying models with TensorFlow, Keras, and Scikit-learn.</p>
            <p style={{ color: isDark?'#9ca3af':'#1F1F2E', lineHeight:1.8 }}>On the web side, I build full-stack apps with React, Flask, and REST APIs. Currently exploring deep learning, MLflow, and FastAPI for production ML systems.</p>
            <div style={{ display:'flex', gap:'20px', flexWrap:'wrap', marginTop:'8px' }}>
              <a href='https://github.com/shahid200620' target='_blank' rel='noreferrer' style={{ display:'flex', alignItems:'center', gap:'6px', color: isDark?'#9ca3af':'#374151', textDecoration:'none', fontSize:'14px' }}><FaGithub /> GitHub</a>
              <a href='https://www.linkedin.com/in/md-shahidkhan/' target='_blank' rel='noreferrer' style={{ display:'flex', alignItems:'center', gap:'6px', color: isDark?'#9ca3af':'#374151', textDecoration:'none', fontSize:'14px' }}><FaLinkedin /> LinkedIn</a>
              <a href='mailto:mdshahidalikhan20@gmail.com' style={{ display:'flex', alignItems:'center', gap:'6px', color: isDark?'#9ca3af':'#374151', textDecoration:'none', fontSize:'14px' }}><FaEnvelope /> Email</a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity:0, y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.4 }}
          style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding:'28px 20px', borderRadius:'16px', background: isDark?'rgba(17,24,39,0.75)':'rgba(255,219,187,0.5)', border: isDark?'1px solid rgba(94,234,212,0.15)':'1px solid rgba(153,126,103,0.4)', textAlign:'center', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', boxShadow: isDark?'0 8px 20px rgba(0,0,0,0.3)':'0 4px 12px rgba(153,126,103,0.15)', transition:'all 0.3s', cursor:'default' }} onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow= isDark?'0 0 25px rgba(94,234,212,0.2), 0 12px 30px rgba(0,0,0,0.4)':'0 8px 24px rgba(153,126,103,0.3)' }} onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow= isDark?'0 8px 20px rgba(0,0,0,0.3)':'0 4px 12px rgba(153,126,103,0.15)' }}>
              <p style={{ fontSize:'2.4rem', fontWeight:800, color:'#60a5fa', fontFamily:'Orbitron,sans-serif' }}>{s.number}</p>
              <p style={{ color: isDark?'#6b7280':'#4b5563', fontSize:'13px', marginTop:'6px' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}