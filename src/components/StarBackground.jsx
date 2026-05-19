import { useEffect, useRef } from 'react'

export default function StarBackground({ theme }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let animId
    const W = () => document.documentElement.clientWidth
    const H = () => document.documentElement.clientHeight
    const resize = () => { canvas.width = W(); canvas.height = H() }
    resize()
    window.addEventListener('resize', resize)

    const palette = theme === 'light'
      ? ['255,180,0','255,120,0','200,100,255','100,180,255','255,80,120']
      : ['255,255,255','147,197,253','196,181,253','134,239,172','253,186,116','255,255,200']

    const stars = Array.from({ length: 280 }, () => ({
      x: Math.random() * W(), y: Math.random() * H(),
      r: Math.random() * 2.2 + 0.6,
      ox: 0, oy: 0,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.3,
      da: (Math.random() * 0.008 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      color: palette[Math.floor(Math.random() * palette.length)],
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.alpha += s.da
        if (s.alpha >= 0.95 || s.alpha <= 0.15) s.da *= -1
        s.ox += s.dx; s.oy += s.dy
        if (Math.abs(s.ox) > 25) s.dx *= -1
        if (Math.abs(s.oy) > 25) s.dy *= -1
        ctx.beginPath()
        ctx.arc(s.x + s.ox, s.y + s.oy, s.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(' + s.color + ',' + s.alpha + ')'
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [theme])

  return <canvas ref={ref} style={{ position:'fixed', top:0, left:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none', display:'block' }} />
}