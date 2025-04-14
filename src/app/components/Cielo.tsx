'use client'

import { JSX, useEffect, useState } from 'react'

export default function Cielo() {
  const [stars, setStars] = useState<JSX.Element[]>([])

  useEffect(() => {
    const totalStars = 250
    const tempStars: JSX.Element[] = []

    for (let i = 0; i < totalStars; i++) {
      const size = Math.floor(Math.random() * 3) + 1
      const top = Math.random() * 100
      const left = Math.random() * 100
      const duration = (Math.random() * 3 + 2).toFixed(2)

      tempStars.push(
        <div
          key={`star-${i}`}
          className={`absolute rounded-full bg-white opacity-80 animate-blink`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            boxShadow:
              size > 2 ? `0 0 6px 1px rgba(255,255,255,0.5)` : 'none',
          }}
        />
      )
    }

    setStars(tempStars)
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Cielo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a90e2] via-[#e0e0e0] to-[#bdc3c7]" />

      {/* Montañas */}
      <div className="absolute bottom-0 left-0 w-full h-[35vh] sm:bottom-0 sm:h-[22vh] bg-[#f3ce94] shadow-inner blur-[1px] z-10 rounded-t-[50%]" />

      {/* Base de luz */}
      <div className="absolute bottom-[-80px] left-[10vw] w-[80vw] h-[100px] rounded-full bg-[#ffc1a0] opacity-30 blur-2xl z-0" />

      {/* Estrellas */}
      {stars}
    </div>
  )
}