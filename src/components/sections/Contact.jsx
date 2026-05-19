import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function Contact({ theme }) {
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)

  const txt = isDark ? '#e5e7eb' : '#2C1A1C'
  const muted = isDark ? '#9ca3af' : '#1F1F2E'
  const inputBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'
  const inputBorder = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.15)'
  const labelColor = isDark ? '#9ca3af' : '#362226'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    const mailto = 'mailto:mdshahidalikhan20@gmail.com?subject=Message from ' + encodeURIComponent(form.name) + '&body=' + encodeURIComponent('Name: ' + form.name + '\nEmail: ' + form.email + '\n\n' + form.message)
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const links = [
    { icon:FaEnvelope, label:'Email', value:'mdshahidalikhan20@gmail.com', sub:'Best for work inquiries', href:'mailto:mdshahidalikhan20@gmail.com', color: isDark?'#60a5fa':'#16233B', bg: isDark?'rgba(59,130,246,0.1)':'rgba(30,35,59,0.06)', border: isDark?'rgba(59,130,246,0.25)':'rgba(22,35,59,0.25)' },
    { icon:FaGithub, label:'GitHub', value:'github.com/shahid200620', sub:'Browse all my projects', href:'https://github.com/shahid200620', color: isDark?'#e5e7eb':'#111827', bg: isDark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.04)', border: isDark?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.12)' },
    { icon:FaLinkedin, label:'LinkedIn', value:'linkedin.com/in/md-shahidkhan', sub:'Connect professionally', href:'https://www.linkedin.com/in/md-shahidkhan/', color: isDark?'#60a5fa':'#16233B', bg: isDark?'rgba(59,130,246,0.1)':'rgba(30,35,59,0.06)', border: isDark?'rgba(59,130,246,0.25)':'rgba(22,35,59,0.25)' },
    { icon:FaMapMarkerAlt, label:'Location', value:'Kakinada, India', sub:'Available remotely', href:null, color: isDark?'#4ade80':'#1B2E24', bg: isDark?'rgba(34,197,94,0.08)':'rgba(34,197,94,0.06)', border: isDark?'rgba(34,197,94,0.25)':'rgba(34,197,94,0.3)' },
  ]

  const inputStyle = { width:'100%', padding:'13px 16px', borderRadius:'12px', background:inputBg, border:'1px solid '+inputBorder, color:txt, fontSize:'14px', outline:'none', fontFamily:'Inter,sans-serif' }

  return (
    <section id='contact' style={{ position:'relative', zIndex:1, width:'100%', padding:'96px 0' }}>
      <div ref={ref} style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(24px,5vw,80px)', width:'100%' }}>

        <motion.div initial={{ opacity:0, y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} style={{ marginBottom:'56px' }}>
          <span style={{ color:isDark?'#3b82f6':'#000000', fontSize:'12px', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', fontFamily:'Inter,sans-serif' }}>Get In Touch</span>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:800, marginTop:'10px', color: isDark?'#f0abfc':'#000000', fontFamily:'Orbitron,sans-serif', display:'block' }}>Contact Me</h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'48px', alignItems:'start' }}>

          <motion.div initial={{ opacity:0, x:-40 }} animate={isInView?{opacity:1,x:0}:{}} transition={{ duration:0.8, delay:0.15 }} style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
            <h3 style={{ fontSize:'1.3rem', fontWeight:700, fontFamily:'Orbitron,sans-serif', color: isDark?'#e5e7eb':'#000000' }}>Send a Message</h3>
            <p style={{ color:muted, fontSize:'13px', display:'flex', alignItems:'center', gap:'6px', fontFamily:'Inter,sans-serif' }}>📧 Messages go directly to my Gmail inbox — I reply within 24 hours.</p>

            <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
              <label style={{ color:labelColor, fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:'Inter,sans-serif' }}>Your Name *</label>
              <input name='name' value={form.name} onChange={handleChange} placeholder='John Doe' style={inputStyle} />
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
              <label style={{ color:labelColor, fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:'Inter,sans-serif' }}>Email Address *</label>
              <input name='email' value={form.email} onChange={handleChange} placeholder='john@example.com' style={inputStyle} />
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
              <label style={{ color:labelColor, fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:'Inter,sans-serif' }}>Message *</label>
              <textarea name='message' value={form.message} onChange={handleChange} placeholder={"Hi Shahid, I'd love to connect about..."} rows={5} style={{ ...inputStyle, resize:'vertical' }} />
            </div>

            <button onClick={handleSubmit} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', padding:'14px', borderRadius:'12px', background:sent?'#16a34a':'#2563eb', color:'#fff', fontSize:'15px', fontWeight:600, border:'none', width:'100%', fontFamily:'Inter,sans-serif', transition:'background 0.3s' }}>
              <FaPaperPlane /> {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </motion.div>

          <motion.div initial={{ opacity:0, x:40 }} animate={isInView?{opacity:1,x:0}:{}} transition={{ duration:0.8, delay:0.2 }} style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
            <h3 style={{ fontSize:'1.3rem', fontWeight:700, fontFamily:'Orbitron,sans-serif', color: isDark?'#e5e7eb':'#000000', marginBottom:'8px' }}>Or Find Me At</h3>
            {links.map((item,i) => {
              const Icon = item.icon
              const card = (
                <div style={{ display:'flex', alignItems:'center', gap:'16px', padding:'16px 20px', borderRadius:'14px', background:item.bg, border:'1px solid '+item.border }}>
                  <div style={{ width:'44px', height:'44px', borderRadius:'12px', background: isDark?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.06)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon style={{ color:item.color, fontSize:'18px' }} />
                  </div>
                  <div>
                    <p style={{ color:txt, fontSize:'15px', fontWeight:600, fontFamily:'Inter,sans-serif' }}>{item.label}</p>
                    <p style={{ color:item.color, fontSize:'13px', fontFamily:'Inter,sans-serif' }}>{item.value}</p>
                    <p style={{ color:muted, fontSize:'12px', fontFamily:'Inter,sans-serif' }}>{item.sub}</p>
                  </div>
                </div>
              )
              return item.href
                ? <a key={i} href={item.href} target='_blank' rel='noreferrer' style={{ textDecoration:'none', display:'block' }}>{card}</a>
                : <div key={i}>{card}</div>
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}