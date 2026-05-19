import { useEffect, useRef } from 'react'

const JP = ['桜','夢','空','心','星','愛','花','光','風','月','雨','海','山','川','鳥','猫','犬','春','夏','冬']

export default function LightBackground() {
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

    const items = Array.from({ length: 35 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      char: JP[Math.floor(Math.random() * JP.length)],
      size: Math.random() * 18 + 10,
      alpha: Math.random() * 0.15 + 0.05,
      da: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      dy: Math.random() * 0.6 + 0.3,
      color: ['255,140,0','200,50,150','50,100,255','255,80,80','80,180,80'][Math.floor(Math.random() * 5)],
    }))

    const sakura = Array.from({ length: 25 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      r: Math.random() * 5 + 3,
      alpha: Math.random() * 0.3 + 0.1,
      da: (Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : -1),
      dy: Math.random() * 0.8 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      items.forEach(s => {
        s.alpha += s.da
        if (s.alpha >= 0.2 || s.alpha <= 0.02) s.da *= -1
        s.y -= s.dy
        if (s.y < -30) s.y = H() + 30
        ctx.font = s.size + 'px serif'
        ctx.fillStyle = 'rgba(' + s.color + ',' + s.alpha + ')'
        ctx.fillText(s.char, s.x, s.y)
      })

      sakura.forEach(s => {
        s.alpha += s.da
        if (s.alpha >= 0.4 || s.alpha <= 0.05) s.da *= -1
        s.y += s.dy
        s.x += s.dx
        if (s.y > H() + 20) { s.y = -20; s.x = Math.random() * W() }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(153,126,103,' + s.alpha + ')'
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} style={{ position:'fixed', top:0, left:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none', display:'block' }} />
}