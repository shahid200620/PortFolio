import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '40px', height: '40px', borderRadius: '50%',
        background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.15)',
        color: theme === 'dark' ? '#fbbf24' : '#1e40af',
        fontSize: '18px',
        cursor: 'none',
        transition: 'all 0.3s',
        flexShrink: 0,
      }}
    >
      {theme === 'dark' ? <HiSun /> : <HiMoon />}
    </button>
  )
}