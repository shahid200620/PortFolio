import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaPython, FaJava, FaJs, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiC, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiMongodb, SiMysql, SiFlask, SiJupyter, SiGooglecolab, SiHtml5, SiTailwindcss, SiKeras, SiPytorch, SiOpencv, SiFastapi, SiStreamlit, SiPostgresql } from 'react-icons/si'
import p1 from '../../assets/pics/pic1.jpeg'
import p4 from '../../assets/pics/pic4.jpeg'
import p7 from '../../assets/pics/pic7.jpeg'
import p8 from '../../assets/pics/pic8.jpeg'
import p11 from '../../assets/pics/pic11.jpeg'
import p15 from '../../assets/pics/pic15.jpeg'

const cards = [
  { title:'Languages', img:p11, color:'#1d4ed8', darkCardBg:'linear-gradient(135deg,#0f172a,#1d4ed8)', lightCardBg:'linear-gradient(135deg,#0B0F19,#818CF8)', imgBg:'linear-gradient(135deg,#0f172a,#1d4ed8)', desc:'Clean efficient code in Python, Java, JavaScript and C. Like Luffy — unbreakable determination, always finding a way.', skills:[{name:'Python',icon:FaPython,color:'#60a5fa'},{name:'Java',icon:FaJava,color:'#f97316'},{name:'JavaScript',icon:FaJs,color:'#eab308'},{name:'C',icon:SiC,color:'#a78bfa'}] },
  { title:'Web Dev', img:p8, color:'#818CF8', darkCardBg:'linear-gradient(135deg,#1e1b4b,#1d4ed8)', lightCardBg:'linear-gradient(135deg,#111827,#C084FC)', imgBg:'linear-gradient(135deg,#1e1b4b,#1d4ed8)', desc:'Full-stack apps with React, Flask and FastAPI. Like Gojo — powerful, precise, always ahead of the curve.', skills:[{name:'React',icon:FaReact,color:'#38bdf8'},{name:'HTML5',icon:SiHtml5,color:'#f97316'},{name:'Tailwind',icon:SiTailwindcss,color:'#38bdf8'},{name:'Flask',icon:SiFlask,color:'#fff'},{name:'FastAPI',icon:SiFastapi,color:'#22c55e'}] },
  { title:'ML & AI', img:p7, color:'#C084FC', darkCardBg:'linear-gradient(135deg,#1e1b4b,#5b21b6)', lightCardBg:'linear-gradient(135deg,#1F2937,#5EEAD4)', imgBg:'linear-gradient(135deg,#1e1b4b,#5b21b6)', desc:'ML models with TensorFlow, Keras, PyTorch. Like Senku — 10 billion percent science-driven, always optimizing.', skills:[{name:'TensorFlow',icon:SiTensorflow,color:'#f97316'},{name:'Keras',icon:SiKeras,color:'#ef4444'},{name:'PyTorch',icon:SiPytorch,color:'#f97316'},{name:'Scikit-learn',icon:SiScikitlearn,color:'#fb923c'}] },
  { title:'Data Science', img:p4, color:'#F59E0B', darkCardBg:'linear-gradient(135deg,#0f172a,#5b21b6)', lightCardBg:'linear-gradient(135deg,#334155,#F59E0B)', imgBg:'linear-gradient(135deg,#0f172a,#5b21b6)', desc:'Data analysis with Pandas, NumPy and Streamlit. Like Naruto — relentless hard work drives every single insight.', skills:[{name:'Pandas',icon:SiPandas,color:'#a78bfa'},{name:'NumPy',icon:SiNumpy,color:'#38bdf8'},{name:'OpenCV',icon:SiOpencv,color:'#22c55e'},{name:'Streamlit',icon:SiStreamlit,color:'#ef4444'}] },
  { title:'Databases', img:p15, color:'#5EEAD4', darkCardBg:'linear-gradient(135deg,#052e16,#166534)', lightCardBg:'linear-gradient(135deg,#0B0F19,#5EEAD4)', imgBg:'linear-gradient(135deg,#052e16,#166534)', desc:'MongoDB, MySQL, PostgreSQL and Docker. Like Mash Burnedead — no magic needed, just raw unstoppable power.', skills:[{name:'MongoDB',icon:SiMongodb,color:'#22c55e'},{name:'MySQL',icon:SiMysql,color:'#38bdf8'},{name:'PostgreSQL',icon:SiPostgresql,color:'#60a5fa'},{name:'Docker',icon:FaDocker,color:'#38bdf8'}] },
  { title:'DevTools', img:p1, color:'#F59E0B', darkCardBg:'linear-gradient(135deg,#431407,#92400e)', lightCardBg:'linear-gradient(135deg,#1F2937,#818CF8)', imgBg:'linear-gradient(135deg,#431407,#92400e)', desc:'Git, Jupyter, Colab and Streamlit. Like Nezuko — calm, reliable, always there when you need support.', skills:[{name:'Git',icon:FaGitAlt,color:'#f97316'},{name:'OpenCV',icon:SiOpencv,color:'#22c55e'},{name:'Jupyter',icon:SiJupyter,color:'#f97316'},{name:'Colab',icon:SiGooglecolab,color:'#f59e0b'}] },
]

const arsenal = ['Transfer Learning','Image Augmentation','A/B Testing','Hyperparameter Tuning','Feature Engineering','ML Deployment','API Development','Deep Learning','Data Analysis','Data Preprocessing','AI','Machine Learning','CI/CD','Monitoring','Blockchain Basics','ERC-20','Solidity','Token Economics','UAT','Programming']
const tools = ['Git','OpenCV','NumPy','Matplotlib','Keras','Optuna','Scikit-Learn','PyTorch','Docker','Python','XGBoost','TensorFlow','Jupyter','PostgreSQL','Pytest','Pandas','MLflow','FastAPI','Streamlit','Seaborn']

export default function Skills({ theme }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState(3)
  const active = cards[selected]
  const isDark = theme === 'dark'
  const txt = isDark ? '#d1d5db' : '#2C1A1C'
  const muted = isDark ? '#9ca3af' : '#1F1F2E'
  const cardBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,219,187,0.15)'
  const cardBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(153,126,103,0.3)'
  const arsenalBg = isDark ? 'rgba(139,92,246,0.07)' : 'rgba(255,219,187,0.4)'
  const arsenalBorder = isDark ? 'rgba(139,92,246,0.25)' : 'rgba(153,126,103,0.4)'
  const arsenalTag = isDark ? 'rgba(139,92,246,0.1)' : 'rgba(204,190,177,0.6)'
  const arsenalTagBorder = isDark ? 'rgba(139,92,246,0.25)' : 'rgba(153,126,103,0.5)'
  const arsenalTagTxt = isDark ? '#c4b5fd' : '#664930'
  const toolsBg = isDark ? 'rgba(34,197,94,0.05)' : 'rgba(255,219,187,0.35)'
  const toolsBorder = isDark ? 'rgba(34,197,94,0.25)' : 'rgba(153,126,103,0.4)'
  const toolsTag = isDark ? 'rgba(34,197,94,0.08)' : 'rgba(153,126,103,0.25)'
  const toolsTagBorder = isDark ? 'rgba(34,197,94,0.25)' : 'rgba(102,73,48,0.4)'
  const toolsTagTxt = isDark ? '#86efac' : '#664930'

  return (
    <section id='skills' style={{ position:'relative', zIndex:1, width:'100%', padding:'96px 0' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(24px,5vw,80px)', width:'100%' }}>

        <motion.div ref={ref} initial={{ opacity:0, y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} style={{ marginBottom:'24px', textAlign:'center' }}>
          <span style={{ color:'#3b82f6', fontSize:'12px', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', fontFamily:'Inter,sans-serif' }}>What I Know</span>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:800, marginTop:'10px', background:'linear-gradient(to right,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontFamily:'Orbitron,sans-serif' }}>Skills & Tech</h2>
          <p style={{ color:muted, fontSize:'14px', marginTop:'8px', fontFamily:'Inter,sans-serif' }}>Click any card to explore</p>
        </motion.div>

        <div style={{ display:'flex', flexWrap:'wrap', gap:'32px', justifyContent:'center', alignItems:'flex-end', marginBottom:'80px' }}>

          <motion.div initial={{ opacity:0, x:-40 }} animate={isInView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.2 }}
            style={{ position:'relative', width:'320px', height:'360px', flexShrink:0 }}>
            {cards.map((card, i) => {
              const offset = i - selected
              const absOff = Math.abs(offset)
              const scale = selected===i ? 1.06 : Math.max(0.72, 1 - absOff * 0.09)
              const yPos = selected===i ? -50 : absOff * 20
              const rot = selected===i ? 0 : offset * 9
              const zIdx = selected===i ? 20 : 10 - absOff
              return (
                <motion.div key={i} onClick={() => setSelected(i)}
                  animate={{ scale, y:yPos, rotate:rot, zIndex:zIdx }}
                  transition={{ type:'spring', stiffness:180, damping:22 }}
                  style={{ position:'absolute', bottom:0, left:'50%', marginLeft:'-75px', transformOrigin:'bottom center', border:'2px solid', borderColor:selected===i?card.color:'rgba(255,255,255,0.1)', boxShadow:selected===i?'0 0 35px '+card.color+'55':'none', width:'150px', height:'210px', borderRadius:'18px', cursor:'pointer', overflow:'hidden', userSelect:'none', background: isDark?card.darkCardBg:card.lightCardBg }}
                >
                  <div style={{ width:'100%', height:'65%', background:card.imgBg, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
                    <img src={card.img} alt={card.title} style={{ height:'100%', width:'auto', objectFit:'contain', filter:'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }} />
                  </div>
                  <div style={{ padding:'10px 12px', background:'rgba(0,0,0,0.5)' }}>
                    <span style={{ fontFamily:'Orbitron,sans-serif', fontWeight:700, fontSize:'0.72rem', color:'#fff', lineHeight:1.2 }}>{card.title}</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div initial={{ opacity:0, x:40 }} animate={isInView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.3 }}
            style={{ flex:1, minWidth:'280px', maxWidth:'480px' }}>
            <AnimatePresence mode='wait'>
              <motion.div key={selected} initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-15 }} transition={{ duration:0.25 }}
                style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
                  <div style={{ width:'56px', height:'56px', borderRadius:'50%', overflow:'hidden', border:'2px solid '+active.color, flexShrink:0, background:active.imgBg, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <img src={active.img} alt={active.title} style={{ height:'100%', width:'auto', objectFit:'contain' }} />
                  </div>
                  <h3 style={{ fontSize:'1.6rem', fontWeight:800, color:active.color, fontFamily:'Orbitron,sans-serif' }}>{active.title}</h3>
                </div>
                <p style={{ color:muted, lineHeight:1.8, fontSize:'14px', fontFamily:'Inter,sans-serif' }}>{active.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                  {active.skills.map((skill,i) => { const Icon=skill.icon; return (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:'7px', padding:'7px 12px', borderRadius:'10px', background:cardBg, border:'1px solid '+cardBorder }}>
                      <Icon style={{ color:skill.color, fontSize:'14px' }} />
                      <span style={{ color:txt, fontSize:'12px', fontFamily:'Inter,sans-serif' }}>{skill.name}</span>
                    </div>
                  )})}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div initial={{ opacity:0, y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.5 }}
          style={{ padding:'24px', borderRadius:'18px', background:arsenalBg, border:'1px solid '+arsenalBorder, marginBottom:'14px' }}>
          <p style={{ fontSize:'11px', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color: isDark?'#a78bfa':'#251123', marginBottom:'14px', fontFamily:'Inter,sans-serif' }}>Full Arsenal</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
            {arsenal.map((item,i) => <span key={i} style={{ padding:'5px 12px', borderRadius:'999px', background:arsenalTag, border:'1px solid '+arsenalTagBorder, color:arsenalTagTxt, fontSize:'12px', fontFamily:'Inter,sans-serif' }}>{item}</span>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity:0, y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.6 }}
          style={{ padding:'24px', borderRadius:'18px', background:toolsBg, border:'1px solid '+toolsBorder }}>
          <p style={{ fontSize:'11px', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color: isDark?'#34d399':'#1B2E24', marginBottom:'14px', fontFamily:'Inter,sans-serif' }}>Tech Stack & Tools</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
            {tools.map((tool,i) => <span key={i} style={{ padding:'5px 12px', borderRadius:'999px', background:toolsTag, border:'1px solid '+toolsTagBorder, color:toolsTagTxt, fontSize:'12px', fontFamily:'Inter,sans-serif' }}>{tool}</span>)}
          </div>
        </motion.div>

      </div>
    </section>
  )
}