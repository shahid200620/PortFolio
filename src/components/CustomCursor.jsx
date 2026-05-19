import { useEffect, useState, useRef } from 'react'

export default function CustomCursor({ theme }) {
  const isDark = theme === 'dark'
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const posRef = useRef({ x: -100, y: -100 })
  const trailRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    const addHover = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true))
        el.addEventListener('mouseleave', () => setHovering(false))
      })
    }
    addHover()

    const animate = () => {
      trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.1
      trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.1
      setTrail({ x: trailRef.current.x, y: trailRef.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const main = isDark ? '#3b82f6' : '#16233B'
  const glow = isDark ? '0 0 10px #3b82f6, 0 0 20px #8b5cf6' : 'none'

  return (
    <>
      <div style={{
        position: 'fixed',
        left: trail.x,
        top: trail.y,
        transform: 'translate(-50%,-50%)',
        width: hovering ? '44px' : '30px',
        height: hovering ? '44px' : '30px',
        border: '1.5px solid ' + main,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99997,
        opacity: 0.5,
        boxShadow: glow,
        mixBlendMode: 'difference',
        transition: 'width 0.2s, height 0.2s',
      }} />

      <div style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%,-50%)',
        width: clicking ? '6px' : '10px',
        height: clicking ? '6px' : '10px',
        background: main,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99999,
        boxShadow: glow,
        transition: 'width 0.15s, height 0.15s',
      }} />
    </>
  )
}