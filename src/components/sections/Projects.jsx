import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import p17 from '../../assets/pics/pic17.jpeg'
import p3 from '../../assets/pics/pic3.jpeg'
import p14 from '../../assets/pics/pic14.jpeg'
import p16 from '../../assets/pics/pic16.jpeg'
import p12 from '../../assets/pics/pic12.jpeg'
import p13 from '../../assets/pics/pic13.jpeg'
import p9 from '../../assets/pics/pic9.jpeg'
import p10 from '../../assets/pics/pic10.jpeg'

const featured = [
  { number:'01', title:'E-Commerce Churn Prediction', description:'End-to-end ML pipeline predicting customer churn using RFM feature engineering and Random Forest. Deployed live on Streamlit Cloud.', tags:['Python','Scikit-learn','Pandas','Streamlit','Random Forest'], github:'https://github.com/shahid200620/ecommerce-churn-prediction', live:'https://ecommerce-churn-prediction-byshahid.streamlit.app/', border:'rgba(59,130,246,0.4)', accent:'#60a5fa', img:p17, darkBg:'linear-gradient(135deg,#0f172a,#1d4ed8)', lightBg:'linear-gradient(135deg,#0B0F19,#818CF8)' },
  { number:'02', title:'Custom Image Classifier', description:'Transfer learning with ResNet50 achieving 99.07% accuracy on Dogs vs Cats. Includes Grad-CAM visualizations for full model interpretability.', tags:['Python','TensorFlow','Keras','ResNet50','Grad-CAM'], github:'https://github.com/shahid200620/Custom_Image_Classifier', live:null, border:'rgba(139,92,246,0.4)', accent:'#a78bfa', img:p3, darkBg:'linear-gradient(135deg,#1e1b4b,#5b21b6)', lightBg:'linear-gradient(135deg,#111827,#C084FC)' },
  { number:'03', title:'Marketing Funnel Analytics', description:'Multi-page Streamlit dashboard tracking user journeys, detecting funnel drop-off points, and delivering channel-wise growth recommendations.', tags:['Python','Streamlit','Pandas','Plotly'], github:'https://github.com/shahid200620/FUTURE_DS_03', live:'https://futureds03.streamlit.app/', border:'rgba(34,197,94,0.4)', accent:'#4ade80', img:p14, darkBg:'linear-gradient(135deg,#052e16,#166534)', lightBg:'linear-gradient(135deg,#1F2937,#5EEAD4)' },
  { number:'04', title:'VoltVision', description:'Intelligent energy monitoring platform with real-time power consumption tracking. Full-stack React frontend with Flask backend and REST API integration.', tags:['React','Flask','REST API','Python','JavaScript'], github:'https://github.com/shahid200620/VoltVision', live:null, border:'rgba(251,146,60,0.4)', accent:'#fb923c', img:p16, darkBg:'linear-gradient(135deg,#431407,#92400e)', lightBg:'linear-gradient(135deg,#334155,#F59E0B)' },
]

const more = [
  { title:'Math Quiz App', desc:'Interactive math quiz app with multiple difficulty levels, scoring system and timer challenges.', github:'https://github.com/shahid200620/Math_quiz', tag:'JavaScript', img:p12, darkBg:'linear-gradient(135deg,#1e1b4b,#5b21b6)', lightBg:'linear-gradient(135deg,#111827,#C084FC)' },
  { title:'First ERC-20 Token', desc:'Custom ERC-20 token built on Ethereum blockchain with Solidity smart contracts and token economics.', github:'https://github.com/shahid200620/first-erc20-token', tag:'Solidity', img:p13, darkBg:'linear-gradient(135deg,#166534,#052e16)', lightBg:'linear-gradient(135deg,#0B0F19,#5EEAD4)' },
  { title:'Streamlytics Kafka', desc:'Real-time streaming analytics pipeline using Apache Kafka for high-throughput data processing.', github:'https://github.com/shahid200620/streamlytics-kafka', tag:'Python', img:p9, darkBg:'linear-gradient(135deg,#92400e,#431407)', lightBg:'linear-gradient(135deg,#1F2937,#F59E0B)' },
  { title:'Eval-Ops', desc:'ML model evaluation and operations toolkit for tracking model performance and deployment metrics.', github:'https://github.com/shahid200620/eval-ops', tag:'Python', img:p10, darkBg:'linear-gradient(135deg,#0f172a,#1d4ed8)', lightBg:'linear-gradient(135deg,#334155,#818CF8)' },
]

export default function Projects({ theme }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const moreRef = useRef(null)
  const moreInView = useInView(moreRef, { once: true, margin: '-40px' })
  const isDark = theme === 'dark'
  const txt = isDark ? '#e5e7eb' : '#111827'
  const muted = isDark ? '#9ca3af' : '#374151'
  const cardBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.7)'
  const cardBorderBase = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.1)'
  const tagBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'
  const tagBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'

  return (
    <section id='projects' style={{ position:'relative', zIndex:1, width:'100%', padding:'96px 0' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(24px,5vw,80px)', width:'100%' }}>

        <motion.div ref={ref} initial={{ opacity:0, y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} style={{ marginBottom:'48px' }}>
          <span style={{ color:'#3b82f6', fontSize:'12px', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', fontFamily:'Inter,sans-serif' }}>What I Have Built</span>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:800, marginTop:'10px', background:'linear-gradient(to right,#34d399,#3b82f6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontFamily:'Orbitron,sans-serif', ...(isDark?{}:{WebkitTextFillColor:'#013220', backgroundClip:'unset', background:'none', color:'#16233B'}) }}>Projects</h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'20px', marginBottom:'64px' }}>
          {featured.map((p,i) => (
            <motion.div key={i} initial={{ opacity:0, y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay:i*0.12 }}
              style={{ borderRadius:'20px', border:'1px solid '+p.border, overflow:'hidden', display:'flex', flexDirection:'column', background:cardBg }}>
              <div style={{ height:'180px', overflow:'hidden', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', background: isDark?p.darkBg:p.lightBg }}>
                <img src={p.img} alt={p.title} style={{ height:'100%', width:'auto', objectFit:'contain', padding:'8px', filter: isDark?'drop-shadow(0 4px 12px rgba(0,0,0,0.5))':'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
                <div style={{ position:'absolute', bottom:'10px', left:'14px', right:'14px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ color:p.accent, fontSize:'11px', fontWeight:700, fontFamily:'Orbitron,sans-serif' }}>{p.number}</span>
                  <div style={{ display:'flex', gap:'10px' }}>
                    <a href={p.github} target='_blank' rel='noreferrer' style={{ color:'#fff', fontSize:'16px', textDecoration:'none', background:'rgba(0,0,0,0.4)', padding:'4px', borderRadius:'6px' }}><FaGithub /></a>
                    {p.live && <a href={p.live} target='_blank' rel='noreferrer' style={{ color:'#fff', fontSize:'14px', textDecoration:'none', background:'rgba(0,0,0,0.4)', padding:'4px', borderRadius:'6px' }}><FaExternalLinkAlt /></a>}
                  </div>
                </div>
              </div>
              <div style={{ padding:'20px', display:'flex', flexDirection:'column', gap:'10px', flex:1 }}>
                <h3 style={{ fontSize:'1rem', fontWeight:700, fontFamily:'Orbitron,sans-serif', color:txt }}>{p.title}</h3>
                <p style={{ color: isDark?'#9ca3af':'#1F1F2E', fontSize:'13px', lineHeight:1.7, fontFamily:'Inter,sans-serif' }}>{p.description}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginTop:'auto' }}>
                  {p.tags.map((t,ti) => <span key={ti} style={{ padding:'4px 10px', borderRadius:'6px', background:tagBg, border:'1px solid '+tagBorder, color:muted, fontSize:'11px', fontFamily:'Inter,sans-serif' }}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div ref={moreRef} initial={{ opacity:0, y:30 }} animate={moreInView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} style={{ marginBottom:'24px' }}>
          <h3 style={{ fontSize:'1.2rem', fontWeight:700, fontFamily:'Orbitron,sans-serif', color:txt, marginBottom:'20px' }}>More Repositories</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'14px' }}>
            {more.map((p,i) => (
              <motion.a key={i} href={p.github} target='_blank' rel='noreferrer'
                initial={{ opacity:0, y:20 }} animate={moreInView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:i*0.08 }}
                style={{ borderRadius:'14px', border:'1px solid '+cardBorderBase, overflow:'hidden', textDecoration:'none', display:'flex', flexDirection:'column', transition:'border-color 0.2s', background:cardBg }}
                onMouseEnter={e => e.currentTarget.style.borderColor='rgba(59,130,246,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor=cardBorderBase}
              >
                <div style={{ height:'110px', background: isDark?p.darkBg:p.lightBg, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ height:'100%', width:'auto', objectFit:'contain', padding:'8px', filter: isDark?'drop-shadow(0 4px 8px rgba(0,0,0,0.5))':'drop-shadow(0 2px 6px rgba(0,0,0,0.2))' }} />
                </div>
                <div style={{ padding:'14px', flex:1 }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'6px' }}>
                    <p style={{ color: isDark?'#e5e7eb':'#2C1A1C', fontSize:'13px', fontWeight:700, fontFamily:'Orbitron,sans-serif' }}>{p.title}</p>
                    <FaGithub style={{ color: isDark?'#6b7280':'#4b5563', fontSize:'13px', flexShrink:0 }} />
                  </div>
                  <p style={{ color: isDark?'#6b7280':'#362226', fontSize:'11px', lineHeight:1.6, fontFamily:'Inter,sans-serif', marginBottom:'8px' }}>{p.desc}</p>
                  <span style={{ padding:'3px 10px', borderRadius:'999px', background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.25)', color:'#60a5fa', fontSize:'11px', fontFamily:'Inter,sans-serif' }}>{p.tag}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div style={{ textAlign:'center', marginTop:'32px' }}>
          <a href='https://github.com/shahid200620' target='_blank' rel='noreferrer'
            style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 28px', border: isDark?'1px solid rgba(255,255,255,0.15)':'1px solid rgba(0,0,0,0.15)', color: isDark?'#9ca3af':'#374151', borderRadius:'999px', fontSize:'14px', textDecoration:'none', fontFamily:'Orbitron,sans-serif' }}>
            <FaGithub /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}