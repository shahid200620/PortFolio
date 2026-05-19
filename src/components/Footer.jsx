import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

export default function Footer({ theme }) {
  const isDark = theme === 'dark'
  const nameColor = isDark ? '#e5e7eb' : '#000000'
  const dotColor = isDark ? '#3b82f6' : '#000000'
  const subColor = isDark ? '#9ca3af' : '#000000'
  const iconColor = isDark ? '#6b7280' : '#000000'
  const backColor = isDark ? '#6b7280' : '#000000'
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.1)'

  return (
    <footer style={{ position:'relative', zIndex:1, borderTop:'1px solid '+borderColor, padding:'32px 0' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(24px,5vw,80px)', width:'100%', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'16px' }}>

        <div>
          <p style={{ fontSize:'20px', fontWeight:700, fontFamily:'Orbitron,sans-serif', color:nameColor }}>
            Shahid<span style={{ color:dotColor }}>.</span>
          </p>
          <p style={{ color:subColor, fontSize:'13px', marginTop:'4px', fontFamily:'Inter,sans-serif', fontWeight:600 }}>
            Data Scientist · ML Engineer · Full Stack Developer
          </p>
        </div>

        <div style={{ display:'flex', gap:'20px', alignItems:'center' }}>
          <a href='https://github.com/shahid200620' target='_blank' rel='noreferrer' style={{ color:iconColor, fontSize:'22px', textDecoration:'none' }}>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/md-shahidkhan/' target='_blank' rel='noreferrer' style={{ color:iconColor, fontSize:'22px', textDecoration:'none' }}>
            <FaLinkedin />
          </a>
          <a href='mailto:mdshahidalikhan20@gmail.com' style={{ color:iconColor, fontSize:'22px', textDecoration:'none' }}>
            <FaEnvelope />
          </a>
        </div>

        <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          style={{ display:'flex', alignItems:'center', gap:'6px', color:backColor, background:'none', border:'none', fontSize:'13px', padding:0, fontWeight:700, fontFamily:'Inter,sans-serif' }}>
          Back to top <HiArrowUp />
        </button>
      </div>
    </footer>
  )
}